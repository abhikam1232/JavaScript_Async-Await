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


// 2nd operation for async and await:-

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 5) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function Demo() {
    let num1 = await getNum();
    console.log(num1);

    let num2 = await getNum();
    console.log(num2);      // these operations are executing all at a time so Now I will use await:

    let num3 = await getNum();
    console.log(num3);
}

Demo();

// Assignmnet Question 2:- 

function getRandomEvent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let event = Math.floor(Math.random() * 10) + 1;
            if (event % 2 == 0) {
                resolve(" Congratulations it was an Even one", event);
            } else {
                reject(" Unfortunately It was Rejected an odd one");
                console.log(event);
            }
        }, 1000);
    });
}


async function runTask() {  // This is used so that I can use await:- 
    await getRandomEvent()
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err)
        });

};

// Using Async and Await I will change the heading title:- 
let h1 = document.querySelector("h1");

function colorChanger(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve(" Color was changes Successfully");
        }, delay);
    })
}

async function modifiedColor() {
    await colorChanger("purple", 1000);
    await colorChanger("pink", 1000);
    await colorChanger("blue", 1000);
    await colorChanger("maroon", 1000);
}

modifiedColor();