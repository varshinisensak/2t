var sequelize = require('sequelize')

const connection = new sequelize('Student', 'root', 'Varshini1998@', {
    host: 'localhost',
    dialect: 'mysql'
});
const NewsLetter = connection.define('NewsLetter', {
    title: sequelize.STRING,
    body: sequelize.TEXT,
    dept: sequelize.TEXT,
})




const Magazine = connection.define('Magazine', {
    title: sequelize.STRING,
})


