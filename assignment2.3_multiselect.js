let datab={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"ali",
    port:3306
};
const mysql=require("mysql2");
const con=mysql.createConnection(datab);
let category="Office";
con.query("select itemno,itemname,price,category from item where category=?",[category],(err,rows)=>{
    if(err){
        console.log("Select query failed");
    }else{
        if(rows.length>0){
            for(let i=0;i<rows.length;i++){
                console.log(rows[i].itemno+" "+rows[i].itemname+" "+rows[i].price+" "+rows[i].category);
            }
        }else{
            console.log("No rows found with this category: "+category);
        }
    }
});