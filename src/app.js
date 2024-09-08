
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum agente ou mapa encontrado. Digite algo no campo de pesquisa.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-card">
                    <div class="conteudo-card">
                 <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                 <p class="descricao-meta">${dado.descricao}</p>
                 <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum agente ou mapa encontrado.</p>"
    }

    section.innerHTML = resultados;
    document.getElementById("campo-pesquisa").value = "";
    }