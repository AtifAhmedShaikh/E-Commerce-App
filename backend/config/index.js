const dotenv=require("dotenv").config();

const port=process.env.PORT;
const connectionString=process.env.CONNECTION_STRING;
const appPath=process.env.FRONTEND_APP_PATH
module.exports={
    port,
    connectionString,
    appPath
}
