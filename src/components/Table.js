import {useState} from "react";

function isPrime(num) {
    if(num==0||num==1){return false}
    for(var i = 2; i < num; i++)
      if(num % i === 0) {return false};
      return true;
  }

const Table =({number})=>{
let [newNumber,setNewNumber]=useState(number)


return (
    <div className={isPrime(newNumber)?"prime":newNumber%2==0?"double":'odd'} 
    onClick={()=>setNewNumber(newNumber+=Math.floor(Math.random()*11))} >
        {newNumber}
    </div>
    )
}

 export  {Table};
