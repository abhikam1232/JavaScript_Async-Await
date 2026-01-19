// Now I will access all the buttons and paragraphs:- 
let catBtn = document.querySelector(".btnOne");
let dogBtn = document.querySelector(".btnTwo");
let qBtn = document.querySelector(".btnThree");

// Now Access all the paras:- 
let par1 = document.querySelector("#cats");
let par2 = document.querySelector("#dogs");
let par3 = document.querySelector("#Quote");

// Access all the Api's:- 
let url1 = "https://catfact.ninja/fact";
// This was the part for geretaing catFact Api text:- 

async function catFact() {
    try {
        let res1 = await axios.get(url1);
        return res1.data.fact;
    } catch (err) {
        console.log(" Unfortunately it was an error", err);
    }
}

catBtn.addEventListener("click", async () => {
    let fact = await catFact();
    console.log(fact);
    par1.innerText = fact;
    par1.style.marginBottom = "10px";
    par1.style.color = "#0C2C55";
    par1.style.margin = "auto";
    par1.style.fontSize = "1.5em";
    par1.style.fontWeight = "550";
});

// Now we will be working for the second part :- 

let url2 = "https://dog.ceo/api/breeds/image/random";

async function dogType() {
    try {
        let res2 = await axios.get(url2);
        console.log(res2.data.message);
        return res2.data.message;
    } catch (err) {
        console.log(err);
    }
}

dogBtn.addEventListener("click", async () => {
    let link = await dogType();
    console.log(link);
    let image = document.querySelector("#dogs");
    image.setAttribute("src", link);


    /** par2.innerText = type;
    par2.style.margin = "auto";
    par2.style.color = "#0C2C55";
    par2.style.fontSize = "1.5em";
    par2.style.fontWeight = "550";

    par2.innerText = url2;
    par2.style.cursor = "pointer";
    par2.style.color = "#0C2C55";
    par2.onclick = () => {
        window.open(url2, "_blank");
    }; **/

})

// Now we will be working on the third part:- 

let url3 = "https://icanhazdadjoke.com/";

async function jokeFetch() {
    try {

        const config = { headers: { Accept: "application/json" } };
        let res3 = await axios.get(url3, config);
        return res3.data.joke;
    } catch (err) {
        console.log(" Error initiated", err);
    }
}

qBtn.addEventListener("click", async () => {
    let joker = await jokeFetch();
    console.log(joker);
    par3.innerText = joker;
    par3.style.margin = "auto";
    par3.style.color = "#0C2C55";
    par3.style.fontSize = "1.5em";
    par3.style.fontWeight = "550";
});


