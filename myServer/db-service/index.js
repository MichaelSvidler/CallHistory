var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:tnhkh@localhost:5432/postgres');

var Account = sequelize.define('account', {
        user_id : {

            type: Sequelize.INTEGER,
            field: 'user_id' ,
            primaryKey: true,
            autoIncrement: true
        },
            username : {
            type: Sequelize.STRING,
            field: 'username'
        },
            password : {
            type: Sequelize.STRING,
            field: 'password'
        },
        phonenumber : {
            type: Sequelize.STRING,
            field: 'phonenumber'
        },
        }, {
        freezeTableName: true // Model tableName will be the same as the mo

        });

        Account.sync({force: false}).then(function () {
            Account.create({
                username:"Michael",
                password: "1",
                phonenumber: "0503004272"
            }) 
 });

 var Contacts = sequelize.define('contacts', {
    contact_id : {

        type: Sequelize.INTEGER,
        field: 'contact_id' ,
        primaryKey: true,
        autoIncrement: true
    },
        name : {
        type: Sequelize.STRING,
        field: 'name'
    },
        
    phonenumber : {
        type: Sequelize.STRING,
        field: 'phonenumber'
    },
    }, {
    freezeTableName: true // Model tableName will be the same as the mo

    });
    Contacts.belongsTo(Account);
    Contacts.sync({force: false}).then(function () {
        Contacts.create({
            name: 'Max',
            phonenumber: '0501234567',
            accountUserId: 1
        })
});

var callHistory = sequelize.define('callhistory', {
    callhistory_id : {

        type: Sequelize.INTEGER,
        field: 'callhistory_id' ,
        primaryKey: true,
        autoIncrement: true
    },
        
    calldate:{
        type: Sequelize.DATE,
        field: 'calldate',

    }    
    }, {
    freezeTableName: true // Model tableName will be the same as the mo

    });
    callHistory.belongsTo(Account);
    callHistory.belongsTo(Contacts);
    callHistory.sync({force: false}).then(function () {
        callHistory.create({
            calldate:new Date(),
            accountUserId: 1,
            contactContactId: 1
        })
});

 module.exports = {Account,Contacts,callHistory};