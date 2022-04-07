//destructuracion de objetos es como hacer dos const
const {about , listaPlatos} = require('./info')

const mainController = {
  index: (req, res) => {
    res.render("index",{about: about , menu:listaPlatos});//llamo a los objetos para poder inyectarlos por template en el index
  },

  detalle: (req, res) => {
   let plato = listaPlatos.find((plato)=> plato.id == req.params.menuId)
    res.render("detalleMenu", {plato:plato});
  },
};

module.exports = mainController;
