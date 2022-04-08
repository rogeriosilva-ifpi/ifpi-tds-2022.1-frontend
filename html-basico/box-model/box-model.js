function setup(){
    const botao = document.getElementById('saudacao')
    const caixa_nome = document.getElementById('nome')
    

    botao.addEventListener('click', ()=>{
      const nome = caixa_nome.value
      alert(`Oi ${nome}`)
    })

}

setup()