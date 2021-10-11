var imgs=Array.from(document.querySelectorAll(".item img"))
var lightbox=document.querySelector(".lightbox")
var lightboxContainer=document.querySelector(".lightbox-container")
var close=document.getElementById("close")
var next=document.querySelector("#next")
var prev=document.querySelector("#prev")
var index=0;

for(var i=0;i<imgs.length;i++){
    
    imgs[i].addEventListener("click",function(e){
        lightboxContainer.style.display="flex"
        lightbox.style.backgroundImage=`url("${e.target.src}")`
        index=imgs.indexOf(this,0);
    })
}


close.addEventListener("click",function(){
    lightboxContainer.style.display="none"
})

next.addEventListener("click",function(){
    // index=;
    index++;
    if(index==imgs.length){
        index=0
    }
    var nextImg=imgs[index].src
    lightbox.style.backgroundImage=`url("${nextImg}")`
})

prev.addEventListener("click",function(){
    // index=;
    index--;
    if(index==0){
        index=imgs.length
    }
    var nextImg=imgs[index].src
    lightbox.style.backgroundImage=`url("${nextImg}")`
})