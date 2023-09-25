import {Sequelize} from 'sequelize'

const db= new Sequelize('dabase_app', 'admin', 'root12345',{
    host:'database-1.cfjw3vrmvjex.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
})

export default db
