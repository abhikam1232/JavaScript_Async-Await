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

let url = ("https://catfact.ninja/fact");

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
    })

