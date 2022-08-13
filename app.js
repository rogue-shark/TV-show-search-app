const form = document.querySelector("#searchform");
form.addEventListener("submit", async function (e) {
  e.preventDefault(); //to prevent the default reloading behavior when we click the button to submit the form
  const searchText = form.elements.query.value;
  const config = {params: {q: searchText}}
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows`, config);
  generateImages(response.data);
  form.elements.query.value = '';
  
});

const generateImages = (titles) => {
  for (title of titles) {
    if (title.show.image) { //if image is present
      const img = document.createElement("img");
      img.src = title.show.image.medium;
      document.body.append(img);
    }
  }
};

const reset = document.querySelector('.button-2')
const deleteImgs = () =>{
    const imgs = document.querySelectorAll('img')
    for(img of imgs){
        img.remove();
    }
}
reset.addEventListener('click', deleteImgs)
