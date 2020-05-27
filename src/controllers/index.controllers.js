const { Pool } = require('pg');

/*
//Prueba de parámetros de conexión externa
const pool = new Pool({
    host : 'ec2-54-246-85-151.eu-west-1.compute.amazonaws.com',
    user: 'ssdkdbybqdqfib',
    password: '988aca7b4b7692da8d35f6c5f77842341f79472d57e3ba38c7fefe23c5c4e800',
    database: 'd4lo7am4kln29m',
    port: '5432'
});
*/

// Parámetros de conexión local
const pool = new Pool({
    host     : 'localhost',
    user     : 'postgres',
    password : 'Lunes35.',
    database : 'fun_sca',
    port     : '5432'
});

// SECCIÓN TRABAJADORES

// Ver lista de Trabajadores JSON
const getTrabajadores = async (req, res)=>{
    const response = await pool.query('SELECT * FROM vista_trabajadores');
    res.json(response.rows);
};

// Insertar un Trabajador
const postTrabajadores = async (req, res)=>{
    const { cedula_trabajador, np, nombre_completo, id_empresa_publica } = req.body;
    const response = await pool.query('INSERT INTO sca_trabajadores(cedula_trabajador, np, nombre_completo, id_empresa_publica) values($1, $2, $3, $4)', [cedula_trabajador, np, nombre_completo, id_empresa_publica]);
    res.send('Trabajador añadido');
};

// Consulta trabajadores por cédula
const getTrabajadoresCedula = async (req, res) =>{
    const { cedula_trabajador } = req.body;
    const response = await pool.query('Select * FROM vista_trabajadores WHERE cedula_trabajador=$1',[cedula_trabajador]);
    res.json(response.rows);
};

//acualiza trabajadores usando id la cédula
const putTrabajadores = async (req, res) =>{
    const cedula_trabajador = req.params.id;
    const { np, nombre_completo, id_empresa_publica } = req.body;
    const response = await pool.query('UPDATE sca_trabajadores SET np=$1, nombre_completo=$2, id_empresa_publica=$3 where cedula_trabajador=$4', [np, nombre_completo, id_empresa_publica, cedula_trabajador]);
    res.json('Usuario Actualizado');
}

module.exports = {
    getTrabajadores,
    getTrabajadoresCedula,
    postTrabajadores,
    putTrabajadores
}