const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

app.use(express.json())

const db = mysql.createConnection({
    host: '103.145.51.250',
    user: 'HalaHomeUsr',
    password: 'Nypl08$06',
    database: 'test'
})

app.get('/userdata', (req,res) => {
    const q = "SELECT * FROM userdata;";
    db.query (q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/userdata', (req,res) => {
    const q = "INSERT INTO userdata (name,profile,category,description) VALUES (?);";
    const values = [
        req.body.name,
        req.body.profile,
        req.body.category,
        req.body.description,
    ];

    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("poted succesfully")
    })
})

app.listen(8000, ()=> {
    console.log("listening");
})
