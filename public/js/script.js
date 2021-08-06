if(screen.width(500)){
    let idU = 0;
    function imagen(id){
        if (idU === id){
            let fG = document.getElementById("imgGde").innerHTML = `<img src="${img}">`;
        } else {
            fG = '';
            img = `images/${id}.jpg`;
            fG = document.getElementById("imgGde").innerHTML = `<img src="${img}">`;
        }
        idU = id;
        
    }
}  