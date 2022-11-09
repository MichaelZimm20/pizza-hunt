const { Pizza } = require('../models');

const pizzaController = {
  
    // get all pizzas
    // GET, all pizzas
  getAllPizza(req,res) {
    Pizza.find({})
    .populate({
        path: 'comments',
        select: '-__v'
    })
        .select('-__v')
        .sort({ _id: -1 })
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
  },

  // get one pizza by id 
  // GET, single pizza by ID 
  getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
    .populate({
        path: 'comments',
        select: '-__v'
    })
        .select('-__v')
        .then(dbPizzaData => {
            // IF no pizza is found, send 404
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this id!' });
                return;
            }

            res.json(dbPizzaData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
  },

  // create Pizza
  // POST, create a new pizza POST /api/pizzas
  createPizza({ body }, res) {
    Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
  },

  // updating a  pizza by id when we make a request 
  // PUT, updating a pizza by id, PUT /api/pizzas/:id
  updatePizza({ params, body }, res) {
    Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
    .then(dbPizzaData => {
        if (!dbPizzaData) {
            res.status(404).json({ message: 'No pizza gound with this id!'});
            return;
        }
        res.json(dbPizzaData);
    })
    .catch(err => res.status(400).json(err));
  },

  // delete a pizza from the database
  // DELETE /api/pizzas/:id
  deletePizza({ params }, res) {
    Pizza.findOneAndDelete({ _id: params.id })
        .then(dbPizzaData => {
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No Pizza found with this id!' });
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
  }




};

module.exports = pizzaController;