let catUrl = "https://catfact.ninja/fact";
let dogUrl = "https://dog.ceo/api/breeds/image/random";
let jokeUrl = "https://api.chucknorris.io/jokes/random";

async function multipleFetch() {
    try {
        let res1 = await fetch(catUrl);
        let data1 = await res1.json(); // .json() is used because it has an api endpoit
        console.log("Data 1 is printed", data1);

        let res2 = await fetch(dogUrl);
        let data2 = await res2.json(); // .json() is used when apiend point is there 
        console.log("Data 2 is printed", data2);

        let response3 = await fetch(jokeUrl);
        let data3 = await response3.json();
        console.log(" Data 3 is printed", data3);
    } catch (error) {
        console.log(" unfortunalety it is an error", error);
    }


}

multipleFetch();