const News = require("../../models/news"); // Asegúrate de que la ruta es correcta

const getEdmNewsById = async (req, res) => {
  try {
    const id = req.params.id;
    const news = await News.findOne({ id: id });

    if (!news) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getEdmNewsById; // Exporta la función para que pueda ser utilizada en
