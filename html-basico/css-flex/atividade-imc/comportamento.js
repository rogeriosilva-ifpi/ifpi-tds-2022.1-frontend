function app(){
    console.log('App iniciada')

    // me conectar com os elementos(inputs, button) lá do HTML
    const btn_calcular_imc = document.getElementById('btn_calcular')
    const input_peso = document.getElementById('peso')
    const input_altura = document.getElementById('altura')
    const show_imc = document.getElementById('show_imc')
    const show_classificacao = document.getElementById('show_classificacao')

    // associar um comportamento ao evento clicar
    // btn_calcular_imc.onclick = clicou_no_botao
    
    // arrow(seta) function
    btn_calcular_imc.onclick = () => {
        const peso = Number(input_peso.value)
        const altura = Number(input_altura.value)

        const imc = peso / (altura * altura)
        const classificao = classificar_imc(imc)

        show_imc.innerText = 'IMC ' + imc.toFixed(1)
        show_classificacao.innerText = classificao
    } 
    
}

function classificar_imc(imc){
    if (imc < 18.9){
        return 'Abaixo do Peso'
    }else if (imc > 24.9){
        return 'Sobrepeso'
    }else{
        return 'Peso normal'
    }
}

function clicou_no_botao(){
    alert('Clicou!')
}


app()