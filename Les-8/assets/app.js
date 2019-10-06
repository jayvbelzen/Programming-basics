let me = {
    name: "Jay",
    age: 18,
    previousDiploma: "HAVO",
    favouriteVehicle: {
        wheels: 4,
        brand: "Ferrari",
        Model: "488"
    },
    importantPeople: ["Lianne", "Mandy", "Jasmijn", "Tore", "Pedro"]
   
};

console.log("Mijn favoriete vervoersmiddel is de " + me.favouriteVehicle.brand + " " + me.favouriteVehicle.Model + " en die heeft " + me.favouriteVehicle.wheels + " wielen.");

for(i = 0; i < me.importantPeople.length; i++) {
    console.log(me.importantPeople[i]);
}


