

const Todo= require("../models/Todo");
exports.getTodo= async(req, res)=>{
try{
const todo= await Todo.find({});
res.status(200)
.json({
    success:true,
    data:todos,
    message:"Entire Todo Data",
})
}
catch(err){
console.error(err);
res.status(500)
.json({
    success:false,
    error:err.message,
    message:"server error",
});

}


}
exports.getTodoById= async(req, res)=>{
    try{
 const id= res.param.id;
 const todo= await Todo.findById({_id: id})

 if(!todo){
    return res.status(404). json({
        success:false;
        message:" no"
    })
 }
 res
    }
    catch(err){

    }
}