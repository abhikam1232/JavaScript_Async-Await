let url = "https://api.chucknorris.io/jokes/random";

/** fetch(url)
    .then((res) => {
        console.log("Response 1 has been initiated SuccessFully", res);
        return res.json();
    })
    .then((info) => {
        console.log(info.value);
        return fetch(url) // Again fetch is used for chaining:- 
    })
    .then((res) => {
        console.log("Response 2 has been initiated SuccessFully", res);
        return res.json();
    })
    .then((info2) => {
        console.log(info2.value);
        return fetch(url);
    })
    .then((res) => {
        console.log("Response 3 has been initiated", res);
        return res.json();
    })
    .then((info3) => {
        console.log(info3.value);
    })
    .catch((error) => {
        console.log("error");
    }) **/

async function Retrieve() {
    try {
        let res1 = await fetch(url);
        let data1 = await res1.json();
        console.log(data1.value);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.value);

        let res3 = await fetch(url);
        let data3 = await res3.json();
        console.log(data3.value);
    } catch (err) {
        console.log(err);
    }
    console.info("program ended");
}

Retrieve();
