const { instrutores } = require("../dataBase");
let { newId } = require("../dataBase")

const getAllInstrutores = (req, res) => {
    return res.status(200).json(instrutores);
};

const getInstrutoresById = (req, res) => {
    const { id } = req.params;

    const instrutor = instrutores.find((element) => {
        return element.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ msg: "instrutor não enconstrado" });
    };

    return res.status(200).json(instrutor);
};

const addNewInstrutor = (req, res) => {

    console.log(req.body);
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ msg: "Missing name property" });
    }

    if (!email) {
        return res.status(400).json({ msg: "Missing email property" });
    }

    const instrutor = {
        id: newId++,
        name,
        email,
        status: status || true,
    };

    instrutores.push(instrutor);

    return res.status(201).json(instrutor);
};

const updateInstrutor = (req, res) => {
    const { id } = req.params;
    const { name, email, status } = req.body;

    if (!name) {
        return res.status(400).json({ msg: "Missing name property" });
    }

    if (!email) {
        return res.status(400).json({ msg: "Missing email property" });
    }
    // if (!status) {
    //     return res.status(400).json({ msg: "Missing status property" });
    // }

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ msg: "Instructor not found" })
    };

    instrutor.name = name;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(203).send()

}

module.exports = {
    getAllInstrutores,
    getInstrutoresById,
    addNewInstrutor,
    updateInstrutor
}