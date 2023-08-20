
function myClick(event){
    console.log('click');
    console.log("---------------------------------");
    console.log(event.target);
    console.log(event.currentTarget)
    console.log("---------------------------------");
    console.log(this)
    // console.log(event);
}

document.querySelector('#one').onclick = myClick;
// document.querySelector('body').onclick = myClick;
// document.querySelector('html').onclick = myClick;

document.onclick = function (event){
    // console.log(event);
    if(event.target.id === "one") console.log("Click to one")
}

document.querySelector("#two").onclick = function(){
    event.stopPropagation();
    console.log("Click!")
}
document.querySelector(".three").onclick = function(){
    this.style.display = "none"
}