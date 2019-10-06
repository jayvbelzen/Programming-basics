const teachers = [ //Teacher object
    {
        name: "Loek",
        profession: "Teacher",
        brand: "Linux",
        hoursPerWeek: 40,
        salary: 875,
        salaryPerHour: function() { //function that calculates hourly salary
            return this.salary / this.hoursPerWeek; //returns the hourly salary ("this" refers to the object that owns the key)
        }
    },
    {
        name: "Daan",
        profession: "Teacher",
        brand: "Arduino",
        hoursPerWeek: 35,
        salary: 500,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        }
    },
    {
        name: "Rimmert",
        profession: "Teacher",
        brand: "Apple",
        hoursPerWeek: 3,
        salary: 300000,
        salaryPerHour: function() {
            return this.salary / this.hoursPerWeek;
        }
        
    }
]

function writeSentence() { //function to write sentence

    for(i = 0; i < teachers.length; i++) {
        console.log("I have a " + teachers[i].profession + " named " + teachers[i].name +" and he likes to work on a " + teachers[i].brand +  " computer." ); //outputs sentence
        console.log(teachers[i].salaryPerHour()); //outputs hourly salary
    }
}

writeSentence(); //calls function


