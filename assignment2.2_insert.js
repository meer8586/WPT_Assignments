const url="";
let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"ali",
    port:3306
};
let itemno=1;
let itemname="mobile";
let price=10000;
let category="Device";
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
con.query("insert into item (itemno,itemname,price,category) values(?,?,?,?)",[itemno,itemname,price,category],(err,res1)=>{
    if(err){
        console.log("Error ");
    }else{
        console.log("Successful "+res1.affectedRows);
    }

});