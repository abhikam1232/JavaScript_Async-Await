let myurl = "https://api.agify.io/?name=abhishek";


fetch(myurl)
    .then((result) => {
        console.log(result);
        return result.json();
    })
    .then((info) => {
        console.log(info);
    })
    .catch((err) => {
        console.log(err);
    })