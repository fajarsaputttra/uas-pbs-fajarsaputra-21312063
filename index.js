const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const db = require('./connection.js')
const response = require('./request.js')

app.use(bodyParser.json())

//MAHASISWA
// Route Get Data mahasiswa
app.get('/mahasiswa', (req, res) => {
    const sql = 'SELECT * FROM mahasiswa'
    db.query(sql, (error, result) => {
        response(200, result, 'data mahasiswa', res)
    })
})

// Route Detail Get Data mahasiswa
app.get('/mahasiswa/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM mahasiswa WHERE id_mahasiswa ='${id}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        response(200, result, "get detail mahasiswa", res)
    })
})

// Route Post Mahasiswa
app.post('/mahasiswa', (req, res) => {
    const { id_mahasiswa, nama, nim} = req.body
    const sql = `INSERT INTO mahasiswa (id_mahasiswa, nama, nim) VALUES ('${id_mahasiswa}', '${nama}', '${nim}')`

    db.query(sql, (error, fields) => {
        if (error) response(500, 'invalid', `mahasiswa ${nama} dengan npm ${npm} sudah ditambahkan`, res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Data berhasil disimpan", res)
        }
    })
})

// Route PUT Mahasiswa
app.put('/mahasiswa/edit/:id', (req, res) => {
    const id = req.params.id
    const { nama, nim} = req.body
    const sql = `UPDATE mahasiswa SET nama='${nama}', nim='${nim}' WHERE id_mahasiswa='${id}'`

    db.query(sql, (error, result) => {
        if (error) response(500, 'invalid', `Error updating pelanggan ${id}`, res)
        if (result.affectedRows) {
            response(200, { isSuccess: result.affectedRows }, "Data Mahasiswa berhasil diupdate", res)
        } else {
            response(404, null, "Mahasiswa tidak ditemukan", res)
        }
    })
})

// Route DELETE Mahasiswa
app.delete('/mahasiswa/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM mahasiswa WHERE id_mahasiswa='${id}'`

    db.query(sql, (error, result) => {
        if (error) response(500, 'invalid', `Error deleting pelanggan ${id}`, res)
        if (result.affectedRows) {
            response(200, { isSuccess: result.affectedRows }, "Data Mahasiswa berhasil dihapus", res)
        } else {
            response(404, null, "Mahasiswa tidak ditemukan", res)
        }
    })
})

//DOSEN
// Route Get Data dosen
app.get('/dosen', (req, res) => {
    const sql = 'SELECT * FROM dosen'
    db.query(sql, (error, result) => {
        response(200, result, 'data dosen', res)
    })
})

// Route Detail Get Data Detail Dosen
app.get('/dosen/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM dosen WHERE id_dosen ='${id}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        response(200, result, "get detail dosen", res)
    })
})

// Route Post Dosen
app.post('/dosen', (req, res) => {
    const { id_dosen, nama, nip} = req.body
    const sql = `INSERT INTO dosen (id_dosen, nama, nip) VALUES ('${id_dosen}', '${nama}', '${nip}')`

    db.query(sql, (error, fields) => {
        if (error) response(500, 'invalid', `dosen ${nama} dengan nip ${nip} sudah ditambahkan`, res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Data Dosen berhasil disimpan", res)
        }
    })
})

// Route PUT Dosen
app.put('/dosen/edit/:id', (req, res) => {
    const id = req.params.id
    const { nama, nip} = req.body
    const sql = `UPDATE dosen SET nama='${nama}', nip='${nip}' WHERE id_dosen='${id}'`

    db.query(sql, (error, result) => {
        if (error) response(500, 'invalid', `Error updating produk ${id}`, res)
        if (result.affectedRows) {
            response(200, { isSuccess: result.affectedRows }, "Data Dosen berhasil diupdate", res)
        } else {
            response(404, null, "Dosen tidak ditemukan", res)
        }
    })
})

// Route DELETE Dosen
app.delete('/dosen/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM dosen WHERE id_dosen='${id}'`

    db.query(sql, (error, result) => {
        if (error) response(500, 'invalid', `Error deleting Dosen ${id}`, res)
        if (result.affectedRows) {
            response(200, { isSuccess: result.affectedRows }, "Data Dosen berhasil dihapus", res)
        } else {
            response(404, null, "Dosen tidak ditemukan", res)
        }
    })
})

//MATA KULIAH
// Route Get Data matakuliah
app.get('/matakuliah', (req, res) => {
    const sql = 'SELECT * FROM matakuliah'
    db.query(sql, (error, result) => {
        response(200, result, 'data matakuliah', res)
    })
})

// Route Detail Get Data Mata Kuliah
app.get('/matakuliah/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM matakuliah WHERE id_matakuliah ='${id}'`
    db.query(sql, (err, result) => {
        if (err) throw err
        response(200, result, "get detail mata kuliah", res)
    })
})

// Route Post Mata Kuliah
app.post('/matakuliah', (req, res) => {
    const { id_matakuliah, nama_matakuliah, kode_matakuliah} = req.body
    const sql = `INSERT INTO matakuliah (id_matakuliah, nama_matakuliah, kode_matakuliah) 
                VALUES ('${id_matakuliah}', '${nama_matakuliah}', '${kode_matakuliah}')`

    db.query(sql, (error, fields) => {
        if (error) response(500, 'invalid', `matakuliah ${nama_matakuliah} dengan kode ${kode_matakuliah} sudah ditambahkan`, res)
        if (fields?.affectedRows) {
            const data = {
                isSuccess: fields.affectedRows,
                id: fields.insertId,
            }
            response(200, data, "Data Mata Kuliah berhasil disimpan", res)
        }
    })
})

// Route PUT mata kuliah
app.put('/matakuliah/edit/:id', (req, res) => {
    const id = req.params.id
    const { id_matakuliah, nama_matakuliah, kode_matakuliah} = req.body
    const sql = `UPDATE matakuliah SET id_matakuliah='${id_matakuliah}', nama_matakuliah='${nama_matakuliah}', kode_matakuliah='${kode_matakuliah}' WHERE id_matakuliah='${id}'`

    db.query(sql, (error, result) => {
        if (error) response(500, 'invalid', `Error updating matakuliah ${id}`, res)
        if (result.affectedRows) {
            response(200, { isSuccess: result.affectedRows }, "Data Mata Kuliah berhasil diupdate", res)
        } else {
            response(404, null, "Mata Kuliah tidak ditemukan", res)
        }
    })
})

// Route DELETE Mata Kuliah
app.delete('/matakuliah/:id', (req, res) => {
    const id = req.params.id
    const sql = `DELETE FROM matakuliah WHERE id_matakuliah='${id}'`

    db.query(sql, (error, result) => {
        if (error) response(500, 'invalid', `Error deleting matakuliah ${id}`, res)
        if (result.affectedRows) {
            response(200, { isSuccess: result.affectedRows }, "Data Mata Kuliah berhasil dihapus", res)
        } else {
            response(404, null, "Mata Kuliah tidak ditemukan", res)
        }
    })
})

// JOIN Table
// Route Get Data mahasiswa beserta mata kuliah yang diambil dan dosen pengampu
app.get('/mahasiswa/matakuliah', (req, res) => {
    const sql = `
        SELECT 
            mahasiswa.id_mahasiswa,
            mahasiswa.nama AS nama_mahasiswa,
            matakuliah.id_matakuliah,
            matakuliah.nama_matakuliah,
            dosen.id_dosen,
            dosen.nama AS nama_dosen
        FROM 
            mahasiswa
        JOIN 
            krs ON mahasiswa.id_mahasiswa = krs.id_mahasiswa
        JOIN 
            matakuliah ON krs.id_matakuliah = matakuliah.id_matakuliah
        JOIN 
            dosen_matakuliah ON matakuliah.id_matakuliah = dosen_matakuliah.id_matakuliah
        JOIN 
            dosen ON dosen_matakuliah.id_dosen = dosen.id_dosen
    `;

    db.query(sql, (error, result) => {
        if (error) {
            return response(500, 'invalid', `Error fetching data: ${error.message}`, res);
        }
        response(200, result, 'data mahasiswa beserta mata kuliah dan dosen pengampu', res);
    });
});

app.post('/krs', (req, res) => {
    const { id_mahasiswa, id_matakuliah } = req.body;

    const sql = `INSERT INTO krs (id_mahasiswa, id_matakuliah) VALUES (?, ?)`;

    db.query(sql, [id_mahasiswa, id_matakuliah], (error, result) => {
        if (error) {
            return response(500, 'invalid', `Error adding data to KRS: ${error.message}`, res);
        }
        if (result.affectedRows) {
            response(200, { isSuccess: result.affectedRows, id: result.insertId }, 'Data KRS berhasil disimpan', res);
        } else {
            response(400, null, 'Failed to add data to KRS', res);
        }
    });
});

app.listen(port, () => {
    console.log(`Running in port ${port}`)
})
