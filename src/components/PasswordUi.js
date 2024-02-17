import React from 'react'
import { useState,useEffect } from 'react'

const PasswordUi = () => {
  const[password,setPassword] = useState("");
  const[isCapital,setIsCapital] = useState(true);
  const[isLower,setIsLower] = useState(true);
  const[isNumber,setIsNumber] = useState(true);
  const[isSpecialChar,setIsSpecialChar] = useState(true);
  const[length,setLength] = useState(15)
useEffect(()=>{
  generatePassword();
},[length]
)
function passwordLogic(){
  let UPP="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let LOW= "abcdefghijklmnopqrstuvwxyz";
  let number= "0123456789";
  let spChar = "!@#$%^&*()?/~";
let str = "";
if(isCapital) str+=UPP;
 if(isLower) str+=LOW; 
 if(isNumber) str+= number;
 if(isSpecialChar) str+=spChar;
  let newPassword="";
  for(let i=0; i<length; i++){
   newPassword += str.charAt(Math.floor(Math.random()*str.length));
  }
  return newPassword;
}

function generatePassword(){
  
  setPassword(passwordLogic());
  
}
function handleCopyPassword(){
  navigator.clipboard.writeText(password);
  alert("password copied on clipboard")
}



  return (
    <div  className='w-3/4 h-max p-8 bg-cyan-500  flex justify-center items-center shadow-lg' >
        <div className='w-3/4 h-3/4 bg-white rounded-lg shadow-lg m-1 p-2'>
          <div className='flex justify-center'>
            <img className='w-12 h-14' src='https://cdn-icons-png.flaticon.com/512/3043/3043717.png' alt='password-logo'/>
          </div>
          <h1 className='flex justify-center text-3xl'>Password Generator</h1>
          <p className='flex justify-center'>create strong and secure passwords to keep your account safe online</p>

          <div className='flex justify-center mt-6'>
            <input className='border border-black mr-3 p-2 w-3/4 rounded-lg' value={password}/>
            <button className='m-2 bg-slate-300' onClick={()=>generatePassword()}><img className='w-6 h-6' src='https://cdn0.iconfinder.com/data/icons/glyphpack/41/refresh-512.png' alt='reaload-icon'/></button>
            
            <button className='bg-cyan-500 p-2  rounded-lg text-center' onClick={handleCopyPassword}>Copy</button> 
          </div>

          <div className='ml-10 mt-6'>
          <label  >Password Length:{length}</label><br/> 
          <input className='mt-4 w-10/12' type='range' min="8" max="30" value={length} onChange={(e)=>setLength(e.target.value)}/>
          </div>
          <div className='ml-6 mr-6'>
          <div className='flex place-content-between'>
            <p>Uppercase</p>
            <input className=' w-4  ' type='checkbox' checked ={isCapital} onClick={(e)=>setIsCapital(e.target.checked)}/>
          </div>
          <div className='flex place-content-between'>
          <p>Lowercase</p>
            <input className='w-4' type='checkbox'  checked ={isLower} onClick={(e)=>setIsLower(e.target.checked)}/>
          </div>
          <div className='flex place-content-between'>
          <p>Numbers</p>
            <input className=' w-4' type='checkbox' checked ={isNumber} onClick={(e)=>setIsNumber(e.target.checked)}/>
          </div>
          <div className='flex place-content-between'>
          <p>Special Charecters</p>
            <input className='w-4' type='checkbox'  checked ={isSpecialChar} onClick={(e)=>setIsSpecialChar(e.target.checked)}/>
          </div>
          </div>
          
        </div>
   </div>
  )
} 

export default PasswordUi