let url = "https://dog.ceo/api/breeds/image/random";
// Access btn:- 
let btn = document.querySelector(".btn");


async function getImage() {
    try {
        let res = await axios.get(url);
        return res.data;
    } catch (err) {
        console.info(" Unfortunately No image found");
    }
};

btn.addEventListener("click", async () => {
    let link = await getImage();
    console.log(link);
    let img = document.querySelector(".result")
    img.setAttribute("src", link);
})

