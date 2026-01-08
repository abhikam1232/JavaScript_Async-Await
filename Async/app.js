async function greet() {
    throw "Slow Connectivity";
    return "hello World!!";
}

greet()
    .then((result) => {
        console.info(" Promise was basically Resolved");
        console.info(" result of the promise", result);
    })
    .catch((err) => {
        console.info(" Promise Showed Errr ", err);
    })