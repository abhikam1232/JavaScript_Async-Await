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


// Async and Await basic :- 

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
};

async function demo() {
    let num1 = await getNum();
    let num2 = await getNum();
    let num3 = await getNum();
    let num4 = await getNum();
    console.log(num1, num2, num3,);
}

demo();

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(" Color has been changed");
        }, delay)
    });
};

async function demo2() {
    await changeColor("red", 1000);
    await changeColor("purple", 1000);
    await changeColor("yellow", 1000);
}

demo2();