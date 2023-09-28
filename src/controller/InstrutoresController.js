const { intrutores } = require("../dataBase");

const getAllInstrutores = (req, res) => {
    return res.status(200).json(intrutores);
};

const getInstrutoresById = (req, res) => {
    const { id } = req.params;

    const instrutor = intrutores.find((element) => {
        return element.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ msg: "instrutor não enconstrado" });
    };

    return res.status(200).json(instrutor);
};


module.exports = {
    getAllInstrutores,
    getInstrutoresById
}