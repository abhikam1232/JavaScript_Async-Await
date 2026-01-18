let url = "https://catfact.ninja/fact";


let btn = document.querySelector("button");
let par = document.querySelector("#fact");


async function getFacts() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    } catch (err) {
        console.log(err);
    }

    par.innerText = response.data.fact;
};

btn.addEventListener("click", async () => {
    let fact = await getFacts();
    console.log(fact);
    par.innerText = fact;

});