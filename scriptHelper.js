// // Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    const missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`; 
}

function validateInput(thing) {
    if (thing === "") {
        return "Empty"
    } else if (isNaN(thing)) {
        return "Not a Number"
    } else {
        return "Is a Number"
    }

    }

  


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
        let statusMain = document.getElementById("launchStatus");
        let status1 = document.getElementById("pilotStatus");
        let status2 = document.getElementById("copilotStatus");
        let status3 = document.getElementById("fuelStatus");
        let status4 = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty"  || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        list.style.visibility = "hidden"
        statusMain.innerHTML = 'Awaiting Information Before Launch'
        statusMain.style.color = "black"
        setTimeout(function() {
            alert("All Fields are Required");
        }, 50);
        

    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput (cargoLevel) === "Not a Number") {
        list.style.visibility = "hidden"
        statusMain.innerHTML = 'Awaiting Information Before Launch'
        statusMain.style.color = "black"
        setTimeout(function() {
            alert("Invalid Input");
        }, 50);
       

    } else {

        list.style.visibility = "visible"
        status1.innerHTML = `Pilot ${pilot} ready`
        status2.innerHTML = `Co-pilot ${copilot} ready`
        status3.innerHTML = `Fuel level is high enough for launch`
        status4.innerHTML = `Cargo mass is low enough for launch`
        statusMain.style.color = "green"
        statusMain.innerHTML = `Shuttle is ready for launch`

        let isReady = true
        
        if (pilot === "") {
            status1.innerHTML = `Pilot is not ready`
            isReady = false
        }
        if (copilot === "") {
            status1.innerHTML = `Co-pilot is not ready`
            isReady = false
        }

        if (fuelLevel < 10000) {
            status3.innerHTML = `Fuel level is too low for launch`
            isReady = false
            
        }

        if (cargoLevel > 10000) {
            status4.innerHTML = `Cargo mass is too high for launch`
            isReady = false
            } 
        
        if (!isReady) {
            statusMain.style.color = "red"
            statusMain.innerHTML = `Shuttle is not ready for launch`
        }

       

       
    

        }

    }
    




async function myFetch() {
    let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}




module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;