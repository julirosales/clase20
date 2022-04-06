const mainController = {
  index: (req, res) => {
    res.render("index");
  },

  detalle: (req, res) => {
    console.log(plato);
    res.render("detalleMenu");
  },
};

module.exports = mainController;
