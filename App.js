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
connection
    .sync({
        force: true
    })
    .then(() => {
        NewsLetter.bulkCreate([
            {
                index: '1',
                title: 'Article 1',
                body: 'varshini',
                dept: 'IT'
            },
            {
                index: '2',
                title: 'Article 2',
                body: 'surya',
                dept: 'MECH'
            },
            {
                index: '3',
                title: 'Article 5',
                body: 'kabii',
                dept: 'EEE'
            },
            {
                index: '4',
                title: 'Article 6',
                body: 'shrii',
                dept: 'AERO'
            }
        ])
    })


const Magazine = connection.define('Magazine', {
    title: sequelize.STRING,
})
connection
    .sync({
        force: true
    })
    .then(() => {
        Magazine.bulkCreate([
            {
                index: '1',
                title: 'm1'
            },
            {
                index: '2',
                title: 'm2'
            },
            {
                index: '3',
                title: 'm3'
            },
            {
                index: '4',
                title: 'm4'
            }
        ])
    })

