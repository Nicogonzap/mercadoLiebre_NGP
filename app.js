
const express = require('express');
const app = express ();
const path = require('path');
const port = 3000;

const pathViews = path.join (__dirname,'/views/')
app.use(express.static('public'));



app.listen (port, () => console.log ('Servidor corriendo en el puerto ' + port))

app.get('/', (req, res) => {
    res.sendFile(pathViews+'home.html')
})


/*
Caja de input copiada de Meli
<input id= "buscador" type="text" class="nav-search-input" aria-label="Ingresá lo que quieras encontrar" name="as_word" placeholder="Buscar productos, marcas y más…" maxlength="120" autofocus="" autocapitalize="off" autocorrect="off" spellcheck="false" autocomplete="off" tabindex="2">
*/