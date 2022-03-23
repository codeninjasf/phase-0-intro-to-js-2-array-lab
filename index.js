//data structures
// arrays lab

    const cats = ["Milo", "Otis", "Garfield"]; // define cats array
    
    
// appends "Ralph" to the end of cats array

function destructivelyAppendCat(cuteCats){
    cats.push("Ralph");
    console.log(cats);
        return cuteCats
}

//  add an element to cats array "Bob"

function destructivelyPrependCat(meow){
    cats.unshift("Bob");
    console.log(cats);
        return meow
}

//  removes last element "Garfield"

function destructivelyRemoveLastCat(){
    cats.pop();
    console.log(cats);
        return
}

//  removes first element "Milo"

function destructivelyRemoveFirstCat(){
    cats.shift();
    console.log(cats);
        return
}

// appends a cat to cats array and returns a new array cutieCats, cats array left unchanged

function appendCat(name){
    const cutieCats = [...cats, "Broom"];
    console.log(cutieCats);
    console.log(cats);
        return cutieCats
}

//  prepends(beginning) a cat to cats array and returns a new array houseCats, cats array left unchanged

function prependCat(name){
    const houseCats = ["Arnold", ...cats];
    console.log(houseCats);
    console.log(cats);
        return houseCats
}

// removes last element from cats array "Garfield", returns a new array copyOfCats, cats array left unchanged

function removeLastCat(){
    const copyOfCats = [...cats];
    copyOfCats.pop();
    console.log(copyOfCats);
    console.log(cats);
        return copyOfCats
}

// removes the first element from cats array "Milo", returns a new array pets, cats array left unchanged

function removeFirstCat(){
    const pets = [...cats];
    pets.shift();
    console.log(pets);
    console.log(cats);
        return pets
}

