/**
 * Project: FitbitAir
 * File name: getPagesSource
 * Created by:  joshbenner on 2/10/18.
 *
 * Outside references:
 *
 * Purpose:
 */
'use strict';

// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
        // var stuff = $("span[itemprop*='calories']")[0].innerHTML.split(" ")[0];

        var food = {
            name: document.title,
            calories: $("span[itemprop*='calories']")[0].innerHTML.split(" ")[0],
            fat: $("span[itemprop*='fatContent']")[0].innerHTML,
            carbs: $("span[itemprop*='carbohydrateContent']")[0].innerHTML,
            protein: $("span[itemprop*='proteinContent']")[0].innerHTML,
            sodium: $("span[itemprop*='sodiumContent']")[0].innerHTML,
        };
        return food;
        // var stuff = $("nutrition-info").innerHTML;
        // var stuff = document_root.getElementById("nutrition-info").innerHTML;
    // while (node) {
    //     switch (node.nodeType) {
    //         case Node.ELEMENT_NODE:
    //             html += node.outerHTML;
    //             break;
    //         case Node.TEXT_NODE:
    //             html += node.nodeValue;
    //             break;
    //         case Node.CDATA_SECTION_NODE:
    //             html += '<![CDATA[' + node.nodeValue + ']]>';
    //             break;
    //         case Node.COMMENT_NODE:
    //             html += '<!--' + node.nodeValue + '-->';
    //             break;
    //         case Node.DOCUMENT_TYPE_NODE:
    //             // (X)HTML documents are identified by public identifiers
    //             html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
    //             break;
    //     }
    //     node = node.nextSibling;
    // }
    // return html;
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});