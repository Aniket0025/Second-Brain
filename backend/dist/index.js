import express from "express";
import jwt from "jsonwebtoken";
const JWT_PASSWORD = "!123456789";
import { UserModel } from "./db.js";
const app = express();
app.use(express.json());
app.post("/api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        await UserModel.create({
            username: username,
            password: password
        });
        res.json({
            message: "User Signed up"
        });
    }
    catch (e) {
        res.status(411).json({
            message: "User Already exist"
        });
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        username
    });
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD);
        res.json({
            token
        });
    }
    else {
        res.status(403).json({
            message: "Incoorect Credentials"
        });
    }
    try {
        await UserModel.create({
            username: username,
            password: password
        });
        res.json({
            message: "User Signed up"
        });
    }
    catch (e) {
        res.status(411).json({
            message: "User Already exist"
        });
    }
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
app.listen(3000);
//# sourceMappingURL=index.js.map