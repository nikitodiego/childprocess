require('dotenv').config();
let param = process.env.CANT;

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

process.on('message', (message) => {
    if (message == 'start') {
        const obj = calculo(param);
        process.send(obj);
    }
});