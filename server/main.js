const express = require('express')
const session = require('express-session')
const mysql = require('mysql2');
const app = express()
const bcrypt = require('bcrypt');
const path = require('path');
const { PORT } = require('./config.js');
const { clave_sesion } = require('./config.js');


// Middlewares globales
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// // Configuración de express-session
app.use(
    session({
        secret: clave_sesion,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: 30 * 60 * 1000, // 30 minutos en milisegundos 
        },
    })
);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//  permite que los archivos dentro de /Client sean accesibles desde el navegador
app.use(express.static(path.join(__dirname, '../Client')));


// Middleware para procesar JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/resources', express.static(path.join(__dirname, '../Client/Resources')));

// Conexión a la base de datos
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'actividad_5_pwd',
    port: 3306
});



app.get('/', (req, res) => {
    res.render("index")
    
})

app.post('/registrar', async (req, res) => {
    try {
        const { nombreEstudiante, apellidoEstudiante, año, carrera, emailPersonal, nombreProyecto,docenteACargo,area} = req.body;


      
        const insert_usuario = "INSERT INTO `users_proyects`(`nombre`, `apellido`, `año_actual`, `carrera`, `email`, `nombre_proyecto`, `nombre_docente`, `area_proyecto`) VALUES (?,?,?,?,?,?,?,?)";

        connection.query(insert_usuario, [nombreEstudiante, apellidoEstudiante, año, carrera, emailPersonal, nombreProyecto,docenteACargo,area], (err, result) => {
            if (err) {
                console.error('Error al registrarse ', err);
                res.status(500).send('Error al registrarse ');
            } else {
                
                res.redirect('/');
            }
        })

    } catch (err) {
        console.error('Error en la consulta:', err);
        res.render('register', { error: 'Ocurrio un error al monento de registrase' });
    }


})

// Encender servidor
app.listen(PORT, () => {
    console.log(`PAGINA: localhost: ${PORT}`)
})