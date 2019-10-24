let myTitle=document.querySelector(".title");
/*pour renommer un document ou console et creer un raccourci*/

document.querySelector(".title").addEventListener("click", function(){
    console.log("Mon EventListener a fonctionné");
    myTitle.classList.toggle("modified-title");
});

document.querySelector(".title").addEventListener("mouseover", function(){
    myTitle.classList.toggle("modified-title");
});

document.querySelector(".title").addEventListener("mouseout", function(){
    myTitle.classList.toggle("modified-title");
});

document.querySelector("button").addEventListener("click", function () {
    console.log(document.querySelector("input").value);
});

document.querySelector(".list").addEventListener("mouseover", function(){
    document.querySelector(".list").classList.toggle("modified-ul");
});

document.querySelector(".list").addEventListener("mouseout", function(){
    document.querySelector(".list").classList.toggle("modified-ul");
});





