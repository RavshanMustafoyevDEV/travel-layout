const nav_opener = document.querySelector('.resp-nav-opener-btn'),
      nav_closer = document.querySelector('.resp-nav-closer-btn'),
      resp_nav = document.querySelector('.resp-navbar');


nav_opener.addEventListener('click', ()=>{
    resp_nav.classList.remove("close")
    resp_nav.classList.add("open")
})

nav_closer.addEventListener('click', ()=>{
    resp_nav.classList.remove("open")
    resp_nav.classList.add("close")
})



