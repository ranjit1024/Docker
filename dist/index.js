"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.status(200).json({
        msg: "Server Healthy"
    });
});
app.post("/", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    db_1.user.create({
        name: name,
        password: password
    });
    res.status(200).json({
        mag: "User Created"
    });
});
app.listen(3000, () => {
    console.log("listing on port number 3000");
});
