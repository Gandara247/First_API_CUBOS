let { aulas, newIdAula, instrutores } = require("../dataBase");

const createAula = (req, res) => {
    const { idinstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idinstrutor)
    });

    if (!instrutor) {
        return res.status(404).json({ msg: "Instructor Not Found" })
    };

    if (!titulo) {
        return res.status(400).json({ msg: "Missing title property" });
    }

    if (!descricao) {
        return res.status(400).json({ msg: "Missing description property" });
    }

    const aula = {
        id: newIdAula++,
        instrutores_id: Number(idinstrutor),
        titulo,
        descricao
    }
    aulas.push(aula);

    return res.status(201).json(aula)

};

const getAllAulas = (req, res) => {
    return res.status(200).json(aulas)
};

const getAulasById = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((element) => {
        return element.id === Number(id)
    });
    if (!aula) {
        return res.status(404).json({ msg: "Class not found" });
    }

    return res.status(200).json(aula)

};

const getAllAulasByInstrutor = (req, res) => {
    const { idinstrutor } = req.params;
    console.log(req.params);
    const instrutor = instrutores.find((element) => {
        return element.id === Number(idinstrutor);
    });
    console.log(instrutor);
    if (!instrutor) {
        return res.status(404).json({ msg: "Instructor not found" });
    };

    const aulas2 = aulas.filter((element) => {
        return element.instrutores_id === instrutor.id;
    });

    console.log(aulas2);

    return res.status(200).json(aulas2)
}


module.exports = {
    createAula,
    getAllAulas,
    getAulasById,
    getAllAulasByInstrutor
}