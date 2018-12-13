function byTagName(node, string) {
    
    var tag = string.toUpperCase();
    var results = [];
    
    function recSearch( node1 ) {
        for ( let c in node1.childNodes ) {
            var child = node1.childNodes[c];
            
            if( child.nodeType == document.ELEMENT_NODE ) {
                if( child.nodeName == tag ) {
                    results.push(child);
                }
            recSearch( child, tag );
            }
        }
    }
    recSearch( node );
    
    return results;
}

var result = document.createElement("p");

document.body.appendChild( result );

//change to h1, span, p or div to show in Tutorium
var nodes = byTagName(document.body, "p");

result.textContent = "#elements with given tag found: " + nodes.length.toString();
result.style.border = "3px solid black"
result.style.fontSize = "14pt";
result.style.width = "260px";
result.style.padding = "5px";
