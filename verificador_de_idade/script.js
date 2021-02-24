function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = "homem"
            if (idade >= 0  && idade < 3) {
                //bebê
                img.setAttribute('src', 'mas0-3.webp')
            } else if (idade < 15) {
                //adolescente
                img.setAttribute('src', 'mas3-15.webp')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'mas16-30.webp')
            } else if (idade < 55) {
                // adulto
                img.setAttribute('src', 'mas31-55.webp')
            } else {
                // idoso
                img.setAttribute('src', 'mas55+.webp')
            }
        } else if (fsex[1].checked) {
            gênero = "mulher"
            if (idade >=0  && idade <3) {
                //bebê
                img.setAttribute('src', 'fem0-3.webp')
            } else if (idade < 15) {
                //adolescente
                img.setAttribute('src', 'fem3-15.webp')
            } else if (idade < 30) {
                // jovem
                img.setAttribute('src', 'fem16-30.webp')
            } else if (idade < 55) {
                // adulto
                img.setAttribute('src', 'fem31-55.webp')
            } else {
                // idoso
                img.setAttribute('src', 'fem55+.webp')
            }          
        } else {
            gênero = "outro gênero"
            img.setAttribute('src', 'nonbinary.webp')
            
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} ano(s).`
        res.appendChild(img)
    }


}