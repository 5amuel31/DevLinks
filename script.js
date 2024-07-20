function toggleMode(){
  const html = document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else{
  //  html.classList.add('light')
  //}

  // pegar a tag img
  // subistituir a imagem
  // se tiver light mode adicionar a iamgem light
  // se tiver dark mode adicionar a iamgem dark



  // pegar a imagem
  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt","Foto de Mike Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo")
  } else{
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt","Foto de Mike Brito sorrindo, usando óculos escuros e jaqueta preta e fundo grandiente azul")
  }
}
