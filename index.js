import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    const d=new Date();
    const day=d.getDay();
    let type=" a weekday";
    let adv= "work hard";
    if (day==0||day==6){
         type="weakEnd";
        adv="enjoy";
    }

    res.render("index.ejs",{datatype:type,advice:adv});
});
app.listen(port,()=>{
    console.log(`running on ${port}`);
});