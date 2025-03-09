const express = require("express");
const mysql = require("mysql2");
const body= require("body-parser");
const app = express();
app.use(body.json());
app.use(express.json());

const port = 4000;
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "ISEPDBE",
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("connecte a la base de données");
});

app.get("/", (req, res) => {
  res.write("hello word");
  res.end();
});

app.get("/livres", (req, res) => {
  db.query("select * from livre ", (err, rows, fields) => {
    if (err) {
      res.status(400).json({ message: "erreur" });

      throw err;
    } else {
      res.json(rows);
    }
  });
});

app.post("/livres",(req,res)=>{  
  const {titre, description, nombre_page, auteur, date_publication}= req.body;
  
  const insert= 'insert into livre (titre, description, nombre_page, auteur, date_publication)values (?, ?, ?, ?,?)';
  db.query(insert, [titre, description, nombre_page, auteur, date_publication], (err)=>{
    if(err){ 
          //throw(err);
     return res.status(500).json(err);
    }
    else{
       return res.json({message: "livre bien ajouté"});
    }
    
  });
  
});
app.delete('/livres/:id',(req,res)=>{
  const id = req.params.id;

  db.query('DELETE FROM LIVRE WHERE ID = ?',[id], (err) =>{ 
  if (err)
    return res.status(500).json (err);
  else 
      return res.json({message: "Element supprimé =" +id})
    
    }  )
});


app.listen(port, () => {
  console.log("serveur en cours d'execution sur le port " + port);
});

