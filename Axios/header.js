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


