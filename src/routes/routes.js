const { Router } = require("express");
const {
    getAllInstrutores,
    getInstrutoresById,
    addNewInstrutor,
    updateInstrutor,
    updateStatus,
    deleteInstrutor
} = require("../controller/InstrutoresController")
const {
    createAula,
    getAllAulas,
    getAulasById,
    getAllAulasByInstrutor
} = require("../controller/aulasController")
const routes = Router()

routes.get("/instrutores", getAllInstrutores);
routes.get("/instrutores/:id", getInstrutoresById);
routes.post("/instrutores", addNewInstrutor);
routes.put("/instrutores/:id", updateInstrutor);
routes.patch("/instrutores/:id/status", updateStatus);
routes.delete("/instrutores/:id", deleteInstrutor);
//exercises
routes.post("/instrutores/:idinstrutor/aulas", createAula);
routes.get("/aulas", getAllAulas);
routes.get("/aulas/:id", getAulasById);
routes.get("/instrutores/:idinstrutor/aulas", getAllAulasByInstrutor)
module.exports = routes;