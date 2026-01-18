/** let url = ("https://catfact.ninja/fact");

fetch(url)
    .then((Response) => {
        console.log(" Response has been Initiated", Response);
        return Response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(" Request has Failed");
    }); **/

/** let url = ("https://catfact.ninja/fact");

fetch(url)
    .then((output) => {
        console.log("Response has initiated", output);
        return output.json();
    })
    .then((data) => {
        console.log(data.fact);
        return fetch(url)
    })
    .then((output) => {
        console.log(output);
        return output.json();
    })
    .then((data2) => {
        console.log(data2.fact);
    })
    .catch((error) => {
        console.log(error);
    }) **/

let url = "https://api.chucknorris.io/jokes/random";

fetch(url)
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
    })

console.log(" My name is Abhi");