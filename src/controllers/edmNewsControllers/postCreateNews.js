const News = require("../../models/news"); // Asegúrate de ajustar la ruta si es necesario

// Controlador para manejar solicitudes POST y crear una nueva noticia
const postCreateNews = async (req, res) => {
  try {
    // Desestructuración de los datos del cuerpo de la solicitud
    const {
      id,
      title,
      description,
      introduction,
      climax,
      conclusion,
      author,
      image,
      date,
    } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (
      !id ||
      !title ||
      !description ||
      !introduction ||
      !climax ||
      !conclusion ||
      !author ||
      !image
    ) {
      return res.status(400).json({ error: "Todos los campos son requeridos" });
    }

    // Convertir la cadena de fecha a un objeto Date si se proporciona
    const formattedDate = date ? new Date(date) : new Date();

    // Crear una nueva instancia del modelo News
    const news = new News({
      id,
      title,
      description,
      introduction,
      climax,
      conclusion,
      author,
      image,
      date: formattedDate || new Date(),
    });

    // Guardar el documento en la base de datos
    const savedNews = await news.save();

    // Enviar una respuesta con el documento guardado
    res.status(201).json(savedNews);
  } catch (error) {
    // Manejo de errores
    console.error(error);
    res
      .status(500)
      .json({ error: error.message || "Error al crear la noticia" });
  }
};

module.exports = {
  postCreateNews,
};
