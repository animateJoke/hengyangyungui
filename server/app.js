const express=require("express");
const router = express.Router();
const bodyParser=require("body-parser");


const app=express();
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json());

app.use(express.static(__dirname + '/files'));
app.use(express.static('uploads'));

app.use("/job",require("./router/job"));
app.use("/person",require("./router/charu"));
app.listen(9090);
console.log("开启服务器");