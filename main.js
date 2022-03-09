'use strict'

//Async: diz para função ser executada paralelamente com outra
//Await: pede para o metódo esperar antes de ir para próxima linha
//fetch: funcço que pede uma url como parametro para fazer requisições
const pesquisarCep = async(cep)=>{
    const url =  `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    
    const data =  await response.json()
    console.log(data)
}

pesquisarCep('06655250')