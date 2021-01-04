var view = document.querySelectorAll(".view");
var modal = document.querySelector(".modal-bg");
var leave = document.querySelector(".leave")

view.forEach(v=>{
    v.addEventListener("click", function() {
        console.log("me clicking noob");
        const parentNode = this.parentNode.parentNode;
        const imgProduct = parentNode.childNodes[1].src;
        console.log(imgProduct);
        picture(imgProduct);
    })
})

leave.addEventListener("click",function(){
    modal.classList.toggle("modal-active");
});

function picture(imgG) {
    const imgModal = document.querySelector(".modal-bg");
    let imgPicture = imgModal.childNodes[1].childNodes[1].childNodes[1];
    let newPic = imgPicture.setAttribute("src", imgG);
    console.log(newPic);
    modal.classList.toggle("modal-active");

}


