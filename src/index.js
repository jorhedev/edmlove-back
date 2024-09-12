const app = require("./app");
const mongoose = require("mongoose");

const {
  config: { PORT, URI },
} = require("../src/config");

// Cadena de conexión a MongoDB mongouriedm
const uri = URI;

// Conéctate a MongoDB Atlas
mongoose
  .connect(uri)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error de conexión a MongoDB Atlas", err));

// Agrega tus rutas de API aquí
// app.use('/api/usuarios', require('./routes/usuarios'));

// Inicia el servidor

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
