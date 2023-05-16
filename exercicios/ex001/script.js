function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img-manha')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        img.src = 'imagens/manha.jpg'
        document.body.style.background  = '#e2cd9f'
    }else if(hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagens/tarde.jpg'
        document.body.style.background  = '#C3590F'
    }else{
        //BOA NOITE
        img.src = 'imagens/noite.jpg'
        document.body.style.background  = '#0A2A50'
    }
}