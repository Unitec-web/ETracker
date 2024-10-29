const express = require('express')
const cors = require('cors')
const axios =require('axios')
const mysql = require('mysql')
const app = express()
const PORT =2010
app.use(cors())
app.use(express.json())
const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fullstack'
})
app.get('/', (req,res)=>{
const query = ("SELECT * FROM keeperapp")
    db.query(query, (err, result)=>{
        if(err) console.log(err)
        res.json(result)
    })
})
app.post('/createNote',(req,res)=>{
    const sql =("insert into keeperapp (`title`,`content`) values (?)")
    const values =  [req.body.title, req.body.content]
    db.query(sql,[values],(err,result)=>{
        if(err) console.log(err) 
    })
})
app.listen(PORT,()=>{
    console.log('listening on port '+PORT)
})