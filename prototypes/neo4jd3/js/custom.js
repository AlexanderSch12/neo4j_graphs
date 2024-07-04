/* 
 Maps that track the current nodes and relationships
 Ideally the Neo4jD3 library should (and does partially) support this
 For now it is also done here
 Take a look at "function updateNodes(n)" in the Neo4jD3 library
*/
var nodes_map = new Map([]);
var relationships_map = new Map([]);

/*
 Function that makes a connection to the Neo4j database
 This function should happen in the "middleware" or backend
*/
async function init_driver() {
  const neo4jUsername = "neo4j";
  const neo4jPassword = "neo4j_password";

  try {
    driver = neo4j.driver(
      "neo4j://localhost",
      neo4j.auth.basic(neo4jUsername, neo4jPassword),
      {
        /*
        This should be uncommented when https is supported:
          - Installed SSL certificates
          - Enabled in neo4j.conf
        */
        // encrypted: "ENCRYPTION_ON",
        // trustedCertificates: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
      }
    );
    await driver.verifyConnectivity();
    return driver;
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`);
    await driver.close();
    return;
  }
}

/*
 Extracts and parses data comming directly from the Neo4j database
 This part makes up for the out dated data parsing of the Neo4jD3 library
 Ideally this should be implemented in the library itself
 The returned data only contains nodes an rels not present in the current graph
*/
function extract_data(records) {
  var new_nodes = [];
  var new_relationships = [];

  /*
   Parsing of the data always assumes a "p" is returned, meaning p = (NodeA) -Rel-> (NodeB)
   If a node/rel is not present in the graph the node/rel is refactored to a new node/rel object
   The data-object is returned containing only new nodes and rels. This seems to be the only way no duplictes are created using "updateWithNeo4jData(data)"
  */
  records.forEach((record) => {
    p = record.get("p");

    var node = p.end;
    if (!nodes_map.has(node.elementId)) {
      node_obj = {
        id: node.elementId,
        labels: node.labels,
        properties: node.properties,
      };
      nodes_map.set(node.elementId, node_obj);
      new_nodes[new_nodes.length] = node_obj;
    }
    node = p.start;
    if (!nodes_map.has(node.elementId)) {
      node_obj = {
        id: node.elementId,
        labels: node.labels,
        properties: node.properties,
      };
      nodes_map.set(node.elementId, node_obj);
      new_nodes[new_nodes.length] = node_obj;
    }
    const rel = p.segments[0].relationship;
    if (!relationships_map.has(rel.elementId)) {
      rel_obj = {
        id: rel.elementId,
        type: rel.type,
        startNode: rel.startNodeElementId,
        endNode: rel.endNodeElementId,
        properties: rel.properties,
      };
      relationships_map.set(rel.elementId, rel_obj);
      new_relationships[new_relationships.length] = rel_obj;
    }
  });

  const data = {
    results: [
      {
        columns: ["Movie", "Person", "Actor", "Director", "User", "Genre"],
        data: [
          {
            graph: {
              nodes: new_nodes,
              relationships: new_relationships,
            },
          },
        ],
      },
    ],
  };
  return data;
}

/*
 Execute a query with optional parameters
 The driver should be global
 Function should also move to the backend
*/
async function execute_query(query, params) {
  driver = await init_driver();

  const { records, summary, keys } = await driver.executeQuery(query, params);
  await driver.close();
  console.log(records);
  return extract_data(records);
}

/*
 Function that exstract a cypher query out of the GET-parameters
*/
function get_params() {
  const raw_cypher = window.location.search.split("CYPHER=")[1];
  if (raw_cypher) {
    return decodeURI(raw_cypher);
  }
  return;
}

/*
 Opens a new tab with a specific cypher query
*/
function open_new_tab(cypher) {
  var url = window.location.href;
  url = url + "?CYPHER=" + cypher;
  window.open(url, "_blank");
}

/*
 Start up function of the webpage
*/
async function init_page() {
  /* 
   Try to extract a cypher query out of the GET-params
   If no cypher query is present, a default one is used
  */
  var cypher = get_params();
  if (!cypher) {
    cypher = "MATCH p = (sn:Movie)-[r]->(en) RETURN p LIMIT 25;";
  }

  /*
   Execute the query
  */
  const data = await execute_query(cypher);

  /*
   Define the Neo4jD3 library config
  */
  neo4jd3 = new Neo4jD3("#neo4jd3", {
    highlight: [
      //   {
      //     class: "Project",
      //     property: "name",
      //     value: "neo4jd3",
      //   },
      //   {
      //     class: "User",
      //     property: "userId",
      //     value: "eisman",
      //   },
    ],
    showIcons: false,
    neo4jData: data,
    minCollision: 60,
    nodeRadius: 25,
    /*
     When double clicked on a node, a query fetches 5 random nodes attached to the clicked node
     If the graph (number of nodes in the map) has more or equal then 35 nodes a nex tab is opened with the center node being the clicked node
    */
    onNodeDoubleClick: async function (node) {
      params = { id: node.id };
      const cypher =
        'MATCH p=(n)-[r]->(m) WHERE elementId(m) = "' +
        node.id +
        '" RETURN p LIMIT 5';
      if (nodes_map.size >= 35) {
        open_new_tab(cypher);
      } else {
        var data = await execute_query(cypher, params);
        console.log(data);
        neo4jd3.updateWithNeo4jData(data);
      }
    },
    /*
     You can also define a single click function
     Does nothing at the moment
    */
    onNodeClick: function (node) {},
    zoomFit: true,
  });
}

init_page();
