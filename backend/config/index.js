const dotenv=require("dotenv").config();


const port=process.env.PORT;
const connectionString=process.env.CONNECTION_STRING;
const appPath=process.env.FRONTEND_APP_PATH
const accessTokenKey=process.env.ACCESS_TOKEN_SECRET_KEY
const refreshTokenKey=process.env.REFRESH_TOKEN_SECRET_KEY
module.exports={
    port,
    connectionString,
    appPath,
    accessTokenKey,
    refreshTokenKey
}
