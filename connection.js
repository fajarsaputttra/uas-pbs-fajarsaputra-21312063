//Request library mysql 
const mysql = require('mysql2')

//Variable konesksi untuk database
const db = mysql.createConnection ({
    host:'103.196.152.28',
    user:'pbs_teknokrat_2',
    password:'@pbs2023Teknokrat',
    database:'pbs_teknokrat_2',
})

//kirimkan variable keluar untuk digunakan diluar file
module.exports =db