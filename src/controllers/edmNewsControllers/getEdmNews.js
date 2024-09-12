const News = require("../../models/news"); // Asegúrate de que la ruta es correcta

const getEdmNews = async (req, res) => {
  try {
    // Obtener todas las noticias de la base de datos
    const news = await News.find(); 

    // Enviar la respuesta con las noticias obtenidas
        // ordenar  noticias por fecha de publicación la mas reciente a menos reciente

    news.sort((a, b) => b.date - a.date);


    res.status(200).json(news); 
  } catch (error) {
    // Manejo de errores
    console.error(error);
    res.status(500).send("Error al buscar noticias");
  }
};

module.exports = getEdmNews;
