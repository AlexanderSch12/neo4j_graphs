const neo4jUsername = "neo4j";
const neo4jPassword = "H65pgY82QWVEOeVZE9oEevsZ-QwCU1_Vhh-4R8EqROY";

var driver = neo4j.driver(
  "neo4j://375f5cae.databases.neo4j.io",
  neo4j.auth.basic(neo4jUsername, neo4jPassword),
  {
    encrypted: "ENCRYPTION_ON",
    trustedCertificates: "TRUST_SYSTEM_CA_SIGNED_CERTIFICATES",
  }
);
var session = driver.session({ defaultAccessMode: neo4j.session.READ });

var nodes = new Map([]);
var links = new Map([]);

session
  .run("MATCH p =(sn)-[r:ACTED_IN]->(en) RETURN p LIMIT 25;")
  .then((result) => {
    result.records.forEach((record) => {
      p = record.get("p");
      // Nodes
      nodes.set(p.end.elementId, p.end);
      nodes.set(p.start.elementId, p.start);
      links.set(
        p.segments[0].relationship.elementId,
        p.segments[0].relationship
      );
    });
    nodes = Array.from(nodes, ([id, node]) => ({ id, node }));
    links = Array.from(links, ([id, relationship]) => ({
      id,
      source: relationship.startNodeElementId,
      target: relationship.endNodeElementId,
      properties: relationship.properties,
      type: relationship.type,
    }));
    console.log(links);
    draw();
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    session.close();
    driver.close();
  });

const submitQuery = () => {
  // contents of the query text field
  const cypherString = document.querySelector("#queryContainer").value;
};

const draw = () => {
  // Specify the dimensions of the chart.
  const width = 1000;
  const height = 600;

  // Specify the color scale.
  const color = d3.scaleOrdinal(d3.schemeCategory10);

  // Create a simulation with several forces.
  const simulation = d3
    .forceSimulation(nodes)
    .force(
      "link",
      d3.forceLink(links).id((d) => d.id)
    )
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

  // Create the SVG container.
  const svg = d3
    .create("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto;");

  // Add a line for each link, and a circle for each node.
  const link = svg
    .append("g")
    .attr("stroke", "#999")
    .attr("stroke-opacity", 0.6)
    .selectAll()
    .data(links)
    .join("line")
    .attr("stroke-width", 2);

  link
    .append("text")
    .attr("font-family", "Arial, Helvetica, sans-serif")
    .attr("fill", "#000000")
    .style("font", "normal 12px Arial")
    .attr("text-anchor", "middle")
    .text((d) => d.type);

  const node = svg
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .selectAll()
    .data(nodes)
    .join("circle")
    .attr("r", 8)
    .attr("fill", (d) => color(d.node.labels[0]));

  node
    .append("text")
    .attr("fill", "#000000")
    .attr("font-size", "10px")
    .attr("pointer-events", "none")
    .attr("text-anchor", "middle")
    .attr("y", "4px")
    .text((d) => d.node.properties.title);

  node.append("title").text((d) => d.node.properties.title);

  // Add a drag behavior.
  node.call(
    d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended)
  );

  // Set the position attributes of links and nodes each time the simulation ticks.
  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    node
      .select("text")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y);
  }

  // Reheat the simulation when drag starts, and fix the subject position.
  function dragstarted(event) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    event.subject.fx = event.subject.x;
    event.subject.fy = event.subject.y;
  }

  // Update the subject (dragged node) position during drag.
  function dragged(event) {
    event.subject.fx = event.x;
    event.subject.fy = event.y;
  }

  // Restore the target alpha so the simulation cools after dragging ends.
  // Unfix the subject position now that it’s no longer being dragged.
  function dragended(event) {
    if (!event.active) simulation.alphaTarget(0);
    event.subject.fx = null;
    event.subject.fy = null;
  }

  // When this cell is re-run, stop the previous simulation. (This doesn’t
  // really matter since the target alpha is zero and the simulation will
  // stop naturally, but it’s a good practice.)

  d3.select("body").append(() => svg.node());
  responsiveCanvasSizer();
};

function responsiveCanvasSizer() {
  const canvas = document.querySelector("svg");
  const rect = canvas.getBoundingClientRect();
  // ratio of the resolution in physical pixels to the resolution in CSS pixels
  const dpr = window.devicePixelRatio;

  // Set the “actual” size of the canvas
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  // Set the “drawn” size of the canvas
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
}
