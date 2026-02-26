let users = []

const loginModel = {
    //função para salvar novo user 
    create: (data) => {
        const newUser = {
            id: users.length + 1, //gera um id
            username: data.username,
            email: data.email,
            password: data.password
        }

        users.push(newUser) //Salva no array
        return newUser
    },

    findByEmail: (email) => {
        return users.find(user => user.email === email)
    },

    getAll: () => {
        return users;
    }
}

module.exports = loginModel


