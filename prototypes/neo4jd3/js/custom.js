var nodes_map = new Map([]);
var relationships_map = new Map([]);

async function init_driver() {
  const neo4jUsername = "neo4j";
  const neo4jPassword = "neo4j_password";

  // Connect to database
  try {
    driver = neo4j.driver(
      "neo4j://localhost",
      neo4j.auth.basic(neo4jUsername, neo4jPassword),
      {
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

function extract_data(records) {
  var new_nodes = [];
  var new_relationships = [];

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

async function execute_query(query, params) {
  driver = await init_driver();

  const { records, summary, keys } = await driver.executeQuery(query, params);
  await driver.close();
  console.log(records);
  return extract_data(records);
}

function get_params() {
  const raw_cypher = window.location.search.split("CYPHER=")[1];
  if (raw_cypher) {
    return decodeURI(raw_cypher);
  }
  return;
}

function open_new_tab(cypher) {
  var url = window.location.href;
  url = url + "?CYPHER=" + cypher;
  window.open(url, "_blank");
}

async function init_page() {
  // Create some nodes

  var cypher = get_params();

  if (!cypher) {
    cypher = "MATCH p = (sn:Movie)-[r]->(en) RETURN p LIMIT 25;";
  }

  const data = await execute_query(cypher);

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
    onNodeClick: function (node) {},
    zoomFit: true,
  });
}

init_page();
