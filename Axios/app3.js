let url = "https://api.thecatapi.com/v1/images/search";
let btn = document.querySelector(".btn");


async function getCatPic() {
    try {
        let response = await axios.get(url);
        return response.data[0].url;
    } catch (err) {
        console.log("Error has been Occured", err);
    }
}

btn.addEventListener("click", async () => {
    let link = await getCatPic();
    console.log(link);
    let image = document.querySelector("#myImg");
    image.setAttribute("src", link);
})

