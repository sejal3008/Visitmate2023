const { INTEGER, STRING, ENUM } = require('sequelize');
const {seq} = require('../config/database');

const loginTable = seq.define("login",{
    userid:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    username:{
        type:STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:STRING,
        allowNull:false
    },
    role: {
        type:ENUM('student','admin','industrialowner'),
        allowNull: true
    }

},{
    timestamps:false,tableName:'login'
});

module.exports = {loginTable};