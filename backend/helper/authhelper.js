const bcrypt = require("bcrypt");

 const hashedPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }catch (error) 
    {
        console.log(error);
    }
};

 const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword)
}
module.exports = {hashedPassword ,comparePassword };