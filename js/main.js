var btnTop = document.getElementById("topBtn"); 

window.onscroll = function () { 

    if (document.documentElement.scrollTop > 200) { 
        btnTop.style.display = "block"; 
    } else { 
        btnTop.style.display = "none"; 
    } 

} 

btnTop.addEventListener("click", function () { 
        window.scroll({  
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        }); 
}); 