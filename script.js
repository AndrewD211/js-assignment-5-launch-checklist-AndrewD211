// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");
// ^^^ WTF IS UP WITH THIS? ^^^^



window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
          // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        // 
        let planet = (pickPlanet(listedPlanets));
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
            

        })

   
   const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const myList = document.querySelectorAll("input")
        const pilot = myList[0].value
        const copilot = myList[1].value
        const fuelLevel = myList[2].value
        const cargoLevel = myList[3].value

        const list = document.getElementById("faultyItems")



        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);



       
        


        
        event.preventDefault();
    });

});
