/*fetch("https://api.imgflip.com/get_memes")
.then((response) => {console.log(response.json())}); MODO RAIZ JS */ 



$.getJSON('https://api.imgflip.com/get_memes', (Response) => console.log(Response)); // modo jquery