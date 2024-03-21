const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const{getTodo}= require("../controllers/getTodo");
const { getTodoById } = require("./getTodo");
//define APi routes
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodos/:id" getTodoById);
module.exports = router;