
const mysql = require("mysql2");

// Configuración de la conexión a MySQL
const conexion = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "tienda",
    port: 3306
});

// Comprobar si la conexión fue exitosa
conexion.connect((error) => {
    if (error) {
        console.error("Error al conectar con MySQL:", error.message);
        return;
    }

    console.log("Conexión exitosa con MySQL");
});

// Exportar la conexión para reutilizarla en las rutas
module.exports = conexion;
