
const express = require('express');
const router = express.Router();

let mahasiswaList = [
  { Nama: 'Nama Kamu', Nim: '23111040' },
  { Nama: 'Teman A', Nim: '23111040' },
  { Nama: 'Teman B', Nim: '23111040' }
];

router.get('/', (req, res) => {
  res.json(mahasiswaList);
});

router.get('/:index', (req, res) => {
  const i = parseInt(req.params.index);
  if (i >= 0 && i < mahasiswaList.length) {
    res.json(mahasiswaList[i]);
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});

router.post('/', (req, res) => {
  const { Nama, Nim } = req.body;
  if (!Nama || !Nim) {
    return res.status(400).send('Data tidak lengkap');
  }
  mahasiswaList.push({ Nama, Nim });
  res.status(201).send('Mahasiswa sukses ditambahkan');
});

router.delete('/:index', (req, res) => {
  const i = parseInt(req.params.index);
  if (i >= 0 && i < mahasiswaList.length) {
    mahasiswaList.splice(i, 1);
    res.send('DELETE COMPLETE');
  } else {
    res.status(404).send('Mahasiswa not found');
  }
});

module.exports = router;