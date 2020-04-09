// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
       response.json().then(function(json) {
           const destination = document.getElementById("destination");
               destination.innerHTML = `
               <ol>
                  <li>Name: ${json[4].name}</li>
                  <li>Diameter: ${json[4].diameter}</li>
                  <li>Star: ${json[4].star}</li>
                  <li>Distance from Earth: ${json[4].distance}</li>
                  <li>Number of Moons: ${json[4].moons}</li>
               </ol>
               <img src=${json[4].image}>`;
      });
   });
});

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      if (isNaN(fuelLevel.value || cargoMass.value)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
      if (!isNaN(pilotName.value || copilotName.value)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      }
   });
});

window.addEventListener("submit", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (fuelLevel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById(launchStatus).innerHTML= 
          `Shuttle Not Ready for Launch`;
          document.getElementById(pilotStatus).innerHTML=
          `Pilot ${pilotName} is ready for launch`;
          document.getElementById(copilotStatus).innerHTML=
          `Co-pilot ${copilotName} is ready for launch`;
          document.getElementById(fuelStatus).innerHTML=
          `Fuel level too low for launch`;
          document.getElementById(cargoStatus).innerHTML=
          `Cargo mass low enough for launch`
      }  
   });
});
