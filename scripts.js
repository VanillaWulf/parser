// import from '/v8cscdsc.xml';
//
// if (window.DOMParser)
// {
//     parser = new DOMParser();
//     xmlDoc = parser.parseFromString(txt, "application/xml");
//     console.log(xmlDoc);
// }
// else // Internet Explorer
// {
//     xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
//     xmlDoc.async = false;
//     xmlDoc.loadXML(txt);
// }

let getXMLFile = function (path, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', path);
    request.setRequestHeader('Content-Type', 'text/xml');
    request.onreadystatechange = function () {
        if (request.readyState === 4 &&
        request.status === 200) {
            callback(request.responseXML);
        }
    };
    request.send();
};

getXMLFile('v8cscdsc.xml', function (xml) {
    console.log(xml);
});
