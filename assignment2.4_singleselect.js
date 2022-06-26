let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"ali",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
let itemno=50;
con.query("select itemno,itemname,price,category from item where itemno=?",[itemno],(err,rows)=>{
    if(err){
        console.log("Select Query failed");
    }else{
        if(rows.length>0){
            console.log("Select Succeeded");
            console.log(rows[0].itemno+" "+rows[0].itemname+" "+rows[0].price+" "+rows[0].category);
        }else{
            console.log("Failed");
        }

    }
});