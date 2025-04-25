"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usreRoutes_1 = __importDefault(require("./routes/usreRoutes"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api/user', usreRoutes_1.default);
app.get('/', (req, res) => {
    res.status(200).json({
        msg: "halthy server"
    });
});
(0, db_1.default)().then(() => {
    app.listen(port, () => {
        console.log(`listing on port number ${port}`);
    });
});
