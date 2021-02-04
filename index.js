const { response } = require('express');
const express = require('express')
const fs=require ("fs");
const app = express();
app.use(express.json())

const server = app.listen('8080',()=>{
    console.log(`Servidor en puerto ${server.address().port}`)
})
server.on ("error", error=> console.log(`Error en servidor ${error}`))

app.get('/items',(req,res)=>{
    (async ()=>{
        visitas.items++
        try{
            let productos=JSON.parse(await fs.promises.readFile('./productos.txt','utf-8'))
            res.json(artCant(productos))
        } 
        catch (err){
            console.log([])
        }
    })()
})
app.get('/item-random',(req,res)=>{
    (async ()=>{
        try{
            visitas.item++;
            let productos=JSON.parse(await fs.promises.readFile('./productos.txt','utf-8'))
            res.json(randomProd(productos).next().value)
        } 
        catch (err){
            console.log(error)
        }
    })()
})
app.get('/visitas',(req,res)=>{
    res.json(visitas)
})
var visitas={items:0, item:0};
function artCant(array){
    let lista={
        items:[],
        cantidad:null,
    }
    for(let i=0;i<array.length;i++){
        lista.items[i]=array[i].title
    }
    lista.cantidad=array.length;
    
    return lista
}
function* randomProd(array){  
    let rand= Math.random()*(array.length-1)
    yield array[rand.toFixed(0)].title
}