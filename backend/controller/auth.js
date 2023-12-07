const User = require("../models/User");
const refreshTokenSchema = require("../models/Token")
const { hashedPassword, comparePassword } = require("../utils");
const authController = {
    async register(req, res, next) {
        const { name, username, email, password } = req.body;
        try {
            const isExistUser = await User.findOne({ username });
            if (isExistUser) {
                return res.status(401).json({ message: "username is not available !" })
            }
            const hashed = await hashedPassword(password);
            const user = new User({
                name,
                username,
                email,
                password: hashed
            });
            const newUser = await user.save();
            res.status(201).json({ user: newUser });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server Error !" })
        }
    },
    async login(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username }).select("-password")
            if (!user) {
                return res.status(401).json({ message: "Invalid username or password " })
            }
            const isValidPassword = await comparePassword(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({ message: "Invalid username or password " })
            }
            res.status(200).json({ user })
        } catch (error) {
            res.status(500).json({ message: "Internal Error!!!" })
        }
    },
    async logout(req, res, next) {
        //    delete refresh token from Database
        const { refreshToken } = req.cookies;
        try {
            await refreshTokenSchema.deleteOne({ token: refreshToken });
        } catch (error) {
            return next(error);
        }
        // delete cookies
        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        // 2. response
        res
            .status(200)
            .json({
                user: null,
                auth: false,
                message: "You have successfully Logout ",
            });
    },
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.status(200).json({ users });
        } catch (error) {
            res.status(500).json({ message: "Internal server Error " });
        }
    }
}
module.exports = authController;