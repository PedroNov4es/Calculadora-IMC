const calcular = document.getElementById('calcular')

function imc(){
    const nome = document.getElementById('nome').value
    const altura= document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
       
        const valorIMC = (peso / (altura * altura)).toFixed(1);

          let classificacao = "";

          if(valorIMC < 18.5){
            classificacao = "Abaixo do peso"
          } else if (valorIMC < 25){
            classificacao = "com seu peso ideal. Parabens!!!"
          } else if(valorIMC < 30){
            classificacao = "levemente acima do peso."
          } else if(valorIMC < 35){
            classificacao = 'voce esta com obesidade grau I.'

          } else if (valorIMC < 40){
            classificacao = "com obesidade grau II."
          }
          else{
            classificacao = "com obesidade grau III. Cuidado!!!"
          }

          resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`

    }else {
         resultado.textContent = "PEDRO É MARAVILHOSO"
    }
}

calcular.addEventListener('click', imc)