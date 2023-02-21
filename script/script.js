/*fetch("https://api.imgflip.com/get_memes")
.then((response) => {console.log(response.json())}); MODO RAIZ JS */ 



$.getJSON('https://api.imgflip.com/get_memes', (objectJS) => 
    {
        for (const get_memes of objectJS.data.memes) {
            document.getElementById("memes").innerHTML +=
            
            `
             <div class="card m-auto p-3 pt-1 mt-3" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${get_memes.name}</h5>
                </div>
                <img class="card-img-top shadow rounded" src="${get_memes.url} " alt="Card image cap">
             </div>
        
            ` 
        }
    }
); // modo jquery

/*Faz a requisicao e o JSON retorna um ((objectJS) poderia ser qualquer outro nome
para esta variavel) em seguida um metodo FOR OF para percorrer todos os objetos 
e armazenalo na CONST get_memes
Inserçao de HTML com backtick e ${get_memes.atributo}  nos locais para mostrar 
as informaçoes desejadas no documento*/
