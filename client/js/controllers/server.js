var events = '';
var filterlocation = ''; 
var Http = new XMLHttpRequest();

function returnJSON(){
    
events = document.getElementById("userEvent").value;
filterlocation =  document.getElementById("userLocation").value;
url=('https://www.eventbriteapi.com/v3/events/search/?token=I6X37F6VPV73GLG2SA4F&q=' + events + '&location.address=' + filterlocation);
req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', url, true);
req.onload  = function() {
   var jsonResponse = JSON.parse(req.responseText);
   // do something with jsonResponse
   console.log(jsonResponse);
   outputJSON(jsonResponse);

};
req.send(null);
}

function outputJSON(jsonResponse){
    var object = {};
    var name;
    var description;
    var logo;
    var singleObject = {};
    var objectArray = [];
    var string = "";
    for (var i = 0; i < jsonResponse.events.length; i++){
        object = jsonResponse.events[i];
        name = object.name.text;
        description = object.description.text;
        //logo = object.logo.url;
        singleObject = {name:name, description:description};
        objectArray[i] = singleObject;
    }
    singleObject = objectArray[1];
    document.getElementById("InsertName").innerHTML = singleObject.name;
    document.getElementById("InsertDescription").innerHTML = singleObject.description;
    
}