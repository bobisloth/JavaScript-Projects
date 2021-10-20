//Dictionary
function dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark"

    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
    


    delete Animal.Sound;  //deleting the key named Sound

    document.getElementById("deleted").innerHTML = Animal.Sound; //linking kvp to an html elem.
}

