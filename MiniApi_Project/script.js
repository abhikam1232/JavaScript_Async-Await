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
    par1.style.color = "maroon";
    par1.style.margin = "auto";
    par1.style.fontSize = "1.5em";
});