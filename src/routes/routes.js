const {Router} = require("express");
const {
    getAllInstrutores, 
    getInstrutoresById,
    addNewInstrutor,
    updateInstrutor,
    updateStatus,
    deleteInstrutor
} = require("../controller/InstrutoresController")

const routes = Router()

routes.get("/instrutores", getAllInstrutores);
routes.get("/instrutores/:id", getInstrutoresById)
routes.post("/instrutores", addNewInstrutor)
routes.put("/instrutores/:id", updateInstrutor)
routes.patch("/instrutores/:id/status", updateStatus)
routes.delete("/instrutores/:id", deleteInstrutor)
module.exports = routes;