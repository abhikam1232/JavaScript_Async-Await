// Async functions:- 
async function greet() {
    throw "Some Weak connection in the Network";
    return "hello Sir";

}

greet()
    .then((result) => {
        console.log(" Promise was resolved");
        console.info("promise was:- ", result);
    })
    .catch((err) => {
        console.log(" promise was rejected", err);
    })