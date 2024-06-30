var express = require('express'); 
var bodyParser = require('body-parser'); 
var mangoose = require('mangoose');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

mangoose.connect('mongodb://localhost:8080/Moneylist')
var db = mangoose.connection 
db.on('error', ()=>
    console.log("error in connecting to database")
)
db.onjce('open', ()=> console.log("connected to database"))

app.post("/add", (req, res)=> {
var category 
})
app.get('/', (req, res) =>{
    // res.send("successfully connected to 5000")
}).listen(5000)

console.log("listening on port 5000")