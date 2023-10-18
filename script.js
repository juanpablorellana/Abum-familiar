for (let i = 0; i < 21; i++) {
    let foto = document.createElement('img')
    foto.setAttribute('class', 'fotoSeleccionada')
    foto.setAttribute('src', `./img/img${i}.png`)
    fotos.appendChild(foto)
}
fotos.addEventListener('click', (e) => {
    if (e.target.classList.contains('fotoSeleccionada')) {
        let src = e.target.getAttribute('src')
        claseGrande.classList.add('block')
        grande.setAttribute('src', src)
    }
})
equis.addEventListener('click', () => {
    claseGrande.classList.remove('block')
})
