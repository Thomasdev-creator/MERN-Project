const express = require("express")
const mysql = require("mysql")
const port = process.env.PORT || 4000

const app = express();

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database:  'node',
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
    
    connection.connect((err) => {
        if(err){
            console.error("Erreur de connexion: "+err.stack)
            return;
        }
        console.log("Connexion réussi à la base de donnée !")
    });

    connection.query("SELECT * FROM utilisateurs", (err, rows, fields) => {
        if(err) throw err;
        console.log("Les données sont: ", rows)
    })

app.listen(port, () => {
    console.log("Serveur est en ligne !");
})