const express = require('express');
const { fork } = require('child_process');
const yargs = require('yargs/yargs')(process.argv.slice(2))
const args = yargs.argv

const port = args._[0] || 3000

const app = express();


app.get('/info', (req, res) => {
    res.send({
        directorio: process.cwd(),
        id: process.pid, version: process.version, titulo: process.title, OS: process.platform, "memory usage": process.memoryUsage()
    })
})

app.get('/bloq', (req, res) => {
    let cant = parseInt(req.query.cant) || 100000
    res.send(calculo(cant))
});


app.get('/unbloq', (req, res) => {
  const child = fork('./calculo.js');
  child.send('start');
  child.on('message', (data) => {
    res.send(data);
  });
});

app.listen(port, () => console.log('server on port: '+ port));


function calculo(num) {
    const object = {}
    for (i = 0; i < num; i++) {
        let a = Math.floor(Math.random() * 1000)
        if (object[a]) {
            object[a] += 1;
        } else {
            object[a] = 1;
        }
    }
    return object;
}

