let getXMLFile = function (path, tag, callback) {
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

getXMLFile('v8cscdsc.xml', 'v8u:version', function (xml) {
    console.log(xml.getElementsByTagName('v8u:version'));
    let versions = Array.prototype.slice.call(xml.getElementsByTagName('v8u:version'));
    versions.map((item) => {
        if(item.attributes.platform && item.attributes.platform.nodeValue) {
            console.log(item.innerHTML + ' '  + item.attributes.platform.nodeValue);
        }
    })
});
