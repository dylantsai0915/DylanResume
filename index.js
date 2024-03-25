const btnHtml = document.querySelector(".btn_html")
const btnJs = document.querySelector(".btn_js")
const project1=document.querySelector(".project1")
const project2=document.querySelector(".project2")

btnHtml.addEventListener("click",function(e){
    e.preventDefault();
    btnHtml.classList.toggle("active");
    btnJs.classList.remove("active");
    project1.classList.toggle("project-open");
    project2.classList.remove("project-open")
});

btnJs.addEventListener("click",function(e){
    e.preventDefault();
    btnHtml.classList.remove("active");
    btnJs.classList.toggle("active");
    project1.classList.remove("project-open");
    project2.classList.toggle("project-open")
})

