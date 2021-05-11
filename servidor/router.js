const express = require('express');
const router = express.Router();
const conexion = require('./conexiondb')
 
router.get('/api/productos', (req,res) =>{

        conexion.query('select * from productos',(error,result) =>{
                if (error) {
                        
                    throw error;
                        
                } else {
                        res.send(result)
                }
        })
        //res.send('Contacto');
});

//mostrar un solo articulo
router.get('/api/productos/:id', (req,res)=> {
        conexion.query('select * from productos where id= ?',[req.params.id], (error,result)=>{
            if (error) {
                throw error
            } else {
                //traer todas las datos
                res.send(result);
                //traer fila especifica
               // res.send(fila[0].descripcion);
    
            }
        })
    } );

    //crear articulo por post
router.post('/api/productos',(req,res)=>{
        let data= {
            productos: req.body.productos,
            categoria:req.body.categoria,
            ubicacion:req.body.ubicacion,
            precio:req.body.precio
        };
        let sql = "INSERT INTO productos SET ?";
        conexion.query(sql,data,function(error , results){
    
            if (error) {
                throw error
            } else {
                //traer todas las datos
                res.send(results);
                //traer fila especifica
               // res.send(fila[0].descripcion);
    
            }
        });
    });
//editar por put
router.put('/api/productos/:id',(req,res)=>{
        let id= req.params.id;
        let productos= req.body.productos;
        let categoria= req.body.categoria;
        let ubicacion=req.body.ubicacion
        let precio=req.body.precio;
      
        let sql = "UPDATE productos SET productos=?,categoria=?,ubicacion=?,precio=?"
        conexion.query(sql ,[productos,categoria,ubicacion,precio],function(error,results){
    
            if (error) {
                throw error
            } else {
                res.send(results)
                
            }
        });
    });
//eliminar
    router.delete('/api/productos/:id', (req,res)=>{
        conexion.query('delete from productos where id=?',[req.params.id],function(error,results){
    
            if (error) {
                throw error
            } else {
                res.send(results)
                
            }
        })
    })
module.exports = router;