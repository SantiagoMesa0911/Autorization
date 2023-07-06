require('dotenv').config();

const config = {

    clientId:process.env.CLIENTID,
    clientSecret:process.env.CLIENTSECRET,
    authority:process.env.AUTHORITY,
    scope:process.env.SCOPE

};
module.exports = config;