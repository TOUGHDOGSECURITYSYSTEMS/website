// flowController.js
export function parseDrawioXml(drawioXml) {
    // Your XML parsing logic here
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(drawioXml, "application/xml");

    // Example: Log the parsed XML document
    console.log(xmlDoc);
    const mxCells = xmlDoc.documentElement.querySelectorAll("mxCell");
    console.log("MX Cells Hows it look", mxCells);

    const sqlData = makeNodes(mxCells);
    // Return the parsed data or perform further processing
    return xmlDoc;
}

function makeNodes(data) {
    const arrows = [];
    const nodes = [];
    const links = [];

    data.forEach((cell) => {
        if (cell.attributes.length >= 5) {
            var currentCell = {
                id: null,
                question: null,
                type: null,
                source: null,
                target: null,
            };
            const nodemap = cell.attributes;
            currentCell.id = nodemap.id.value.match(/-(\d+)/)[1];

            var type = nodemap.style.value.match("shape=document");
            if (type != null) {
                //This means it is a link/array of links that I need to save for the specific source
                //This is to be built later on.

            } else {
                //we know its either an arrow or a nod
                if (nodemap.length > 5) {
                    //we know its an arrow
                    currentCell.type = "arrow";
                    currentCell.source = nodemap.source.nodeValue.match(/-(\d+)/)[1];
                    currentCell.target = nodemap.target.nodeValue.match(/-(\d+)/)[1];
                }

                if (nodemap.getNamedItem('value')){
                    currentCell.question = nodemap.value.nodeValue;
                }

                if (currentCell.type == "arrow") {
                    arrows.push(currentCell);
                } else {
                    nodes.push(currentCell);
                }
            }
        }
    });

    console.log(nodes);
    console.log(arrows);


    arrows.forEach((arrow) => {
        const sourceNode = nodes.find(node => node.id == arrow.source);
        console.log("working here isthe SourceNode: ", sourceNode);
    });


    //After it gets all of the nodes, convert it into usable data



    return "worksfinefornow";
}
