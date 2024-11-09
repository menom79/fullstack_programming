const express = require('express') 
const app = express()
const port = 3000

app.use(express.json());

let users = 
[
  { 'id':'1', 'name':'Kirsi Kernel' },
  { 'id':'2', 'name':'Matti Mainio' }
];
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get("/users",(req,res)=>{
    console.log(users)
    res.send(users);
})
app.post("/createUser",(req,res)=>{
    console.log(req.body)
    const data=req.body;
    users.push(data);
    // console.log(data)
    return res.send({
        status:200,
        message:"new user is created",
    })
})
app.get("/user/:id",(req,res)=>{
    const {id}=req.params;
    const result= users.find(user=>user.id===id);
    res.send(result)
})
app.put("/user/:id",(req,res)=>{
    const {id}=req.params;
    const {name}= req.body;
    const user= users.find(user=>user.id===id);
    if(user){
        user.name=name;
        res.send({
            message:"user name updated",
            status:302
        })
    }else{
        res.send({
            message:"user not found",
            status:401
        })
    }
    // console.log(user);

})
app.delete("/user/:id",(req,res)=>{
    const {id}=req.params;
    users = users.filter(user=>user.id!==id);
    res.send({
        message:"user is deleted",
        status:204
    });
})
app.listen(port, () => {
  console.log('Example app listening on port 3000')
})