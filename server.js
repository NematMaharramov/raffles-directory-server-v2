const express = require('express');
const fs      = require('fs');
const path    = require('path');

const app       = express();
const PORT      = 47291;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(express.json({ limit: '10mb' }));
app.use(express.static(__dirname));

function readData() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch (e) {
    return { contacts: [], departments: [], subdepartments: [], password: '' };
  }
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

app.get('/api/data', function(req, res) {
  res.json(readData());
});

app.post('/api/save', function(req, res) {
  try {
    const incoming = req.body;
    if (!Array.isArray(incoming.contacts)) {
      return res.status(400).json({ ok: false, error: 'contacts must be an array' });
    }
    const current = readData();
    writeData({
      contacts:       incoming.contacts,
      departments:    Array.isArray(incoming.departments)    ? incoming.departments    : current.departments,
      subdepartments: Array.isArray(incoming.subdepartments) ? incoming.subdepartments : current.subdepartments,
      password:       typeof incoming.password === 'string'  ? incoming.password       : current.password
    });
    res.json({ ok: true });
  } catch (e) {
    res.status(500).json({ ok: false, error: e.message });
  }
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', function() {
  console.log('Raffles Directory running on port ' + PORT);
});
