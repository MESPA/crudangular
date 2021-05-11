const express = require('express');
const cors = require('cors');
//creamos el servidor
const app = express();

//conectandome al archivo de la base de datos


//usar formato json para inserta
app.use(express.json());
app.use(cors());

app.use('/', require('./router'));

//conectarme con el archivo de routes/productos

app.get('/',function(req,res) 
{
res.send('Ruta de Inicio');
});

//puerto de salida de la api
app.listen(4000, ()=>{

    console.log('server ok')
})