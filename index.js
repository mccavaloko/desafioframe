//Requisitando todas as bibliotecas 
import express, { response } from "express";
const app = express();
import handlebars from "express-handlebars";
import fetch from "node-fetch";
import path,{ dirname } from "path"
import { fileURLToPath } from 'url';

//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout:"main"}));
    app.set("view engine","handlebars");
    //Public folder
    const __dirname = dirname(fileURLToPath(import.meta.url));
    app.use(express.static(path.join(__dirname, '/public/')));

//abrindo página inicial
app.get("/", (req,res)=>{
    res.render("pagina_inicial");
});

//abrindo albums
app.get("/albums", (req,res)=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(response=> response.json())
    .then(data=>{
        res.render("albums", {albums:data})
    })
});

//abrindo posts
app.get("/posts", (req,res)=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=> response.json())
    .then(data=>{
        res.render("posts", {posts:data})
    })
});

//abrindo to-dos
app.get("/to-dos", (req,res)=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response=> response.json())
    .then(data=>{
        res.render("todos", {todos:data})
    })
});

//Inicializando aplicação
app.listen(8080, ()=>{
    console.log("Rodando na porta 8080");
});
