const bcrypt = require('bcryptjs');


const hashedPassword=async (password)=>{
    const hashed=await bcrypt.hash(password,10);
    return hashed;
}
const comparePassword=async(password,hash)=>{
    const isValidPassword=await bcrypt.compare(password,hash)
    return isValidPassword;
}
module.exports={
    hashedPassword,
    comparePassword
}