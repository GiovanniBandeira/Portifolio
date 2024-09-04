function topScroll(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

function sobreScroll(){
    window.scrollTo({
        top: 950,
        behavior: 'smooth'
    })
}

function projetosScroll(){
    window.scrollTo({
        top: 1800,
        behavior: 'smooth'
    })
}

function contatoScroll(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    })
}

function linksClick(){
    if(document.getElementById('linkedin')){
        window.open("https://www.linkedin.com/in/giovanni-bandeira", '_black')
    }
    else if(document.getElementById('gits')){
        window.open()
    }
    else if(document.getElementById('email')){
        window.open("mailto:giovanni.bandeira.sousa@gmail.com")
    }
}