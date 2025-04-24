"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb://localhost:27017/user");
const db = mongoose_1.default.connection;
console.log(db);
const schma = new mongoose_1.default.Schema({
    name: String,
    password: String
});
exports.user = mongoose_1.default.model('User', schma);
