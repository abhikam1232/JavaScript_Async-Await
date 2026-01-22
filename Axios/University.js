let source = "http://universities.hipolabs.com/";

async function fetchUni() {
    try {
        const config = { headers: { Accept: "application/json" } };
        let result = await axios.get(source);
        console.log(source.name, config);
        return (source, config);
    } catch (err) {
        console.log(" An error has been Occured");
    }
}

fetchUni();