const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res) => {
    let { last_name, first_name, phone, password } = req.body;
    phone=Number(phone);
    try {
        
        const checkuser = await User.findOne({ phone });
        if (checkuser) {
            return res
                .status(401)
                .send({ errors: [{ msg: "Number already exist" }] });
        }
        const user = new User({
            last_name,
            first_name,
            phone,
            password
        });
        console.log(user)
        user.password = await bcrypt.hash(password, 10);
        await user.save();

        const payload = {
            id: user._id,
        };
        const token = jwt.sign(payload, process.env.secret_key, {
            expiresIn: "7d",
        });

        res.cookie("token", token, {
            httpOnly: true,
        })
            .status(201)
            .send({ user, msg: "user craeted", token });
    } catch (error) {
        res.status(500).send("server error");
    }
};

exports.signIn = async (req, res) => {
    const { phone, password } = req.body;
    try {
        const user = await User.findOne({ phone });
        if (!user) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credentials" }] });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .send({ errors: [{ msg: "bad credentials" }] });
        }

        const payload = {
            id: user._id,
        };
        const token = jwt.sign(payload, process.env.secret_key, {
            expiresIn: "7d",
        });

        res.cookie("token", token, {
            httpOnly: true,
        })
            .status(200)
            .send({ msg: "Login with success", user, token });
    } catch (error) {
        res.status(500).send("server error");
    }
};

exports.current = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.send(user);
    } catch (error) {
        res.status(500).send("server error");
    }
};
