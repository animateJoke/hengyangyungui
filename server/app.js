const express=require("express");
const router = express.Router();
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json());
<<<<<<< HEAD
app.use("/job",require("./router/job"));
app.use("/login",require("./router/login"));
=======

app.use(express.static(__dirname + '/files'));
app.use(express.static('uploads'));
>>>>>>> a866b0f3fe047731916aed8d863a099c39d37f93

app.use("/job",require("./router/job"));
app.use("/person",require("./router/charu"));
app.listen(9090);
console.log("开启服务器");