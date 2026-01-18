let url = "https://dog.ceo/api/breeds/image/random";

fetch(url)
    .then((res) => {
        console.log("Response has been initiated", res);
        return res.json();
        console.log(" dog img loaded");
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })