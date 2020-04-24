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
      event.preventDefault();
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
      } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) || isNaN(pilotName.value) === false || isNaN(copilotName.value) === false) {
         alert("Make sure to enter valid information for each field!");
      } else if (fuelLevel.value < 10000 && cargoMass.value <= 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML= 
          `Shuttle Not Ready for Launch`;
          document.getElementById("pilotStatus").innerHTML=
          `Pilot ${pilotName.value} is ready for launch`;
          document.getElementById("copilotStatus").innerHTML=
          `Co-pilot ${copilotName.value} is ready for launch`;
          document.getElementById("fuelStatus").innerHTML=
          `Fuel level too low for launch`;
          document.getElementById("cargoStatus").innerHTML=
          `Cargo mass low enough for launch`
      } else if (cargoMass.value > 10000 && fuelLevel.value >= 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML= 
          `Shuttle Not Ready for Launch`;
          document.getElementById("pilotStatus").innerHTML=
          `Pilot ${pilotName.value} is ready for launch`;
          document.getElementById("copilotStatus").innerHTML=
          `Co-pilot ${copilotName.value} is ready for launch`;
          document.getElementById("fuelStatus").innerHTML=
          `Fuel level high enough for launch`;
          document.getElementById("cargoStatus").innerHTML=
          `Cargo mass too high for launch`
      } else if (cargoMass.value > 10000 && fuelLevel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML= 
          `Shuttle Not Ready for Launch`;
          document.getElementById("pilotStatus").innerHTML=
          `Pilot ${pilotName.value} is ready for launch`;
          document.getElementById("copilotStatus").innerHTML=
          `Co-pilot ${copilotName.value} is ready for launch`;
          document.getElementById("fuelStatus").innerHTML=
          `Fuel level too low for launch`;
          document.getElementById("cargoStatus").innerHTML=
          `Cargo mass too high for launch`
      } else if (cargoMass.value <= 10000 && fuelLevel.value >= 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("launchStatus").style.color = "green";
         document.getElementById("launchStatus").innerHTML= 
          `Shuttle Ready for Launch`;
          document.getElementById("pilotStatus").innerHTML=
          `Pilot ${pilotName.value} is ready for launch`;
          document.getElementById("copilotStatus").innerHTML=
          `Co-pilot ${copilotName.value} is ready for launch`;
          document.getElementById("fuelStatus").innerHTML=
          `Fuel level high enough for launch`;
          document.getElementById("cargoStatus").innerHTML=
          `Cargo mass low enough for launch`
      }
   });
});
