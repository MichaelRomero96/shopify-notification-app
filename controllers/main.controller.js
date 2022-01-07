const clients = require('../db/clients')


const getProducts = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM products');
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(error);
        res.send(error);
    };
};