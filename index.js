const app = require('./src/config/app');
const db = require('./src/config/db');


const main = () => {
db.connect((err) =>{
    if(err) throw err;
    console.log('Base de datos conectada');
    });

    app.listen(3000, ()=>{
        console.log('Servidor escuchando puerto 3000');
    });
};
main()