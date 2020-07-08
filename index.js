/*var pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  function getAge(pet) {
    return new Date().getFullYear() - pet.bornOn;
  }
  

*/
/**---------------------------------------------------------------------------------------------------- */
let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }] 



    const  getAge = (pet) => {
      return new Date().getFullYear() - pet.bornOn;
    }
    



    pets.forEach((pet)=>{ pet.age = getAge(pet)} )


  
    console.log(pets)

/**
  var  petsWithAge = [];
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    pet.age = getAge(pet);
  
    petsWithAge.push(pet);
  }
  console.log(petsWithAge);*/




const dogs =pets.filter(pets => pets.type === "dog" )


  console.log(dogs)


const Jasper =pets.find(pets => pets.name === "Jasper" )


  console.log(`jasper is ${Jasper.age} years old`)

 
 
 
 
 
 
 
  /* 
  var jasper;
  for (var i = 0; i < pets.length; i++) {
    var pet = pets[i];
    if (pet.name === "Jasper") {
      jasper = pet;
    }
  }
  console.log("Jasper is " + jasper.age + " years old");*/