const dataBase = {
    newId: 4,
    newIdAula: 2,
    instrutores: [
        {
            id: 1,
            name: "Gandara",
            email: "gandara@mail.com",
            status: true

        },
        {
            id: 2,
            name: "Gandara2",
            email: "gandara@mail.com2",
            status: true

        },
        {
            id: 3,
            name: "Gandara3",
            email: "gandara@mail.com3",
            status: true

        }
    ],
    aulas: [
        {
            id: 1,
            instrutores_id: 1,
            titulo: "Primeiro Servidor",
            descricao: "construinkdo o primeiro servidor"
        }
    ]

};

module.exports = dataBase;