function imagen(id){
    let img = document.createElement("img");
    let imgSrc = `images/${id}.jpg`;
    img.setAttribute("src",imgSrc);
    document.getElementsByClassName("imgGde").innerHTML += img;
}