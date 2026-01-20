let url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let response1 = await axios.get(url, config);
        console.log(response1.data.joke);
        return response1.data;
    } catch (err) {
        console.log(" Unfortunately an error has occured", err);
    }
}


let url2 = "https://catfact.ninja/fact";

async function getfact() {
    try {
        const config2 = { headers: { Accept: "text/plain" } };
        let result = await axios.get(url2, config2);
        console.log(result.data);
    } catch (err) {
        console.log(" Error has been caught");
    }
}