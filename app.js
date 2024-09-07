function buscaDeResultado(link2) {
    open(link2, '_self');
}


function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

if(!campoPesquisa){
    section.innerHTML = "<p>^ Por favor digite algo ^</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()
    
let resultados = "";
let time = "";
let descricao = "";
let tags = "";


for(let dado of times){
    time = dado.time.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (time.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>
               ${dado.esporte} 
            </h2>
            <p class="time-clube"> ${dado.time}
            <p class="descricao-meta"> ${dado.descricao}
            </p>   
            <button class="btnMais" onclick="buscaDeResultado('${dado.link2}')">></button>
                <a href="${dado.link}"target="_blank">Se liga na história:...</a>
        </div>
    `;
    }
}

if (!resultados){
    resultados = "<p>Nada foi encontrado :/</p>"
}

section.innerHTML = resultados;
}


function criarResultadosBas(dados, seletor) {
    const section = document.querySelector(seletor);
    let resultbas = '';
  
    dados.forEach(dado => {
      resultbas += `
        <div class="item-resultado">
          <h2>${dado.time} - ${dado.numero}</h2>
          <p>${dado.nome} (${dado.posicao})</p>
          <a href="${dado.linkjogadorBasquete}" target="_blank">Estatísticas...</a>
        </div>
      `;
    });
  
    section.innerHTML = resultbas;
  }
  
  // Chamar a função após o DOM estar carregado
  document.addEventListener('DOMContentLoaded', () => {
    criarResultadosBas(jogadoresBasquete, '#resultados-doBasquete');
  });



  function criarResultados(dados, seletor) {
    const section = document.querySelector(seletor);
    let resultado = '';
  
    dados.forEach(dado => {
      resultado += `
        <div class="item-resultado">
          <h2>${dado.time} - ${dado.numero}</h2>
          <p>${dado.nome} (${dado.posicao}, ${dado.nacionalidade})</p>
          <a href="${dado.linkjogador}" target="_blank">Estatísticas...</a>
        </div>
      `;
    });
  
    section.innerHTML = resultado;
  }
  
  // Chamar a função após o DOM estar carregado
  document.addEventListener('DOMContentLoaded', () => {
    criarResultados(jogadoresFutebol, '#resultadosDoFut'); // Assumindo que seus dados estão em um array chamado 'jogadores'
  });

////////////////////////////////
//
//ERA PARA PESQUISAR NO INDEX2 E INDEX 3 COM ESSE COMANDO NO HTML: 
//'''HTML
// \\input type="search" placeholder="TUDO!!!!!!!!!!" id="campo-pesquisa2">\\
//  \\button onclick="pesquisarFut()">Navegar\\
//'''
//
// E ESTE EM JS
//
//'''JS
//
// function pesquisar2(dados, campoPesquisa2, seletor) {
//  const section = document.getElementById(seletor);
//   const termoPesquisa2 = campoPesquisa2.toLowerCase();

//   const resultados2 = dados.filter(item => {
//     return Object.values(item)
//       .some(valor => typeof valor === 'string' && valor.toLowerCase().includes(termoPesquisa2));
//   });

//   section.innerHTML = resultados2.length
//     ? resultados2.map(dado => {
//         return `
//           <div class="item-resultado">
//             <h2>${dado.time} - ${dado.numero}</h2>
//             <p>${dado.nome} (${dado.posicao})</p>
//             <a href="${dado.linkjogadorBasquete}" target="_blank">Estatísticas...</a>
//           </div>
//         `;
//       }).join('')
//     : '<p>Nada foi encontrado :/</p>';

//     function pesquisarbas() {
//       const campoPesquisa2 = document.getElementById("campo-pesquisa2").value;
//       pesquisar2(jogadoresBasquete, campoPesquisa2, "resultados-doBasquete");
//     }
    
// '''
//eu passei muitas horas nisso, e eu simplesmente n consegui.
//
///////////////////////////////////////