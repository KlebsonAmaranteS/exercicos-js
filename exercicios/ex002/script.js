function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');

    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fSex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bb-menino.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-homem.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-homem.jpg');
            } else {
                img.setAttribute('src', 'imagens/idoso-homem.jpg');
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bb-menina.jpg');
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-mulher.jpg');
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-mulher.jpg');
            } else {
                img.setAttribute('src', 'imagens/idosa-mulher.jpg');
            }
        }

        res.style.textAlign = 'center';
        img.style.marginTop = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}
