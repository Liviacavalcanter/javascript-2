function carregar(){
var msg = document.getElementById('msg') //texto da section html
var img = document.getElementById('imagem')//imagem da section html
var data = new Date() //data atual
var hora = data.getHours()//hora atual
msg.innerHTML = `Agora são ${hora} horas` //escrevendo na div html

if(hora >= 0 && hora < 12){
    //bom dia
    img.src = 'manha.png'
    document.body.style.background ="#F2CC65"
} else if (hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'tarde.png'
    document.body.style.background ="#E76D1E"
} else {
    //boa noite
    img.src = 'noite.png'
    document.body.style.background ="#001140"
}
}

