const {Router} = require("express");
const {
    getAllInstrutores, 
    getInstrutoresById,
    addNewInstrutor,
    updateInstrutor
} = require("../controller/InstrutoresController")

const routes = Router()

routes.get("/instrutores", getAllInstrutores);
routes.get("/instrutores/:id", getInstrutoresById)
routes.post("/instrutores", addNewInstrutor)
routes.put("/instrutores/:id", updateInstrutor)
module.exports = routes;