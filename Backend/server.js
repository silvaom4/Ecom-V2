const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express()
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'EcomV2',
    user: 'root',
    password: 'password'
})

app.get('/', (req, res) => {
    return res.json('Hello From the Backend')
})

app.get('/usersData', (req, res) => {
    const sql = 'SELECT * FROM customers';
    connection.query(sql, (err, data) => {
        if (err) throw err;
        return res.json(data)
    })
})

app.get('/productsData', (req, res) => {
    const sql = 'SELECT * FROM products';
    connection.query(sql, (err, data) => {
        if(err) throw err;
        return res.json(data)
    })
})



app.listen(7075, () => {
    console.log('Listening on port 7075');
})