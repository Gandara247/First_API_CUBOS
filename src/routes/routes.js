const {Router} = require("express");
const {
    getAllInstrutores, 
    getInstrutoresById
} = require("../controller/InstrutoresController")

const routes = Router()

routes.get("/instrutores", getAllInstrutores);
routes.get("/instrutores/:id", getInstrutoresById)
routes.post("/instrutores")

module.exports = routes;