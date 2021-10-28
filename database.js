const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

(async() => {
    try {
        await sequelize.authenticate();
        console.log('Deu bom, segue o baile 😎');
    }catch(error) {
        console.error('Deu ruim chefe 🥺')
    }
})();