
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



function App() {

  const [amount,setAmount]=useState(0);
  const [year,setYear]=useState(0);
  const [rate,setRate]=useState(0);
  const [interest,setInterest]=useState(0);

  console.log(amount,year,rate);

  const calculate=(e)=>{
    const output=amount*year*rate/100;
    console.log(output);
    setInterest(output)
  }

 const reset=(e)=>{
  setAmount(0)
  setYear(0)
  setRate(0)
  setInterest(0)
  
 }



  return (
    <div className="App">
      <div className="container">
        <div className="Header">
     <h1>Simple Interest Calculator</h1>
     <p>Calculate your simple interest with us</p>
     
 </div>
 <div className="total">
  <h2>&#8377; {interest}</h2>
  <p>Your total Interest</p>
 </div>
 <div className="form">
  <form>
<div className='input'>
<TextField id="outlined-basic" label="Amount" value={amount||""} onChange={(e)=>setAmount(e.target.value)} variant="outlined" /><br />
<TextField id="filled-basic" label="Year" value={year||""} onChange={(e)=>setYear(e.target.value)} variant="outlined" /><br />
<TextField id="standard-basic" label="Rate" value={rate||""} onChange={(e)=>setRate(e.target.value)} variant="outlined" />
</div>
</form>


 </div>

<div className='button'><Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
<Button variant="outlined" onClick={e=>reset(e)}>Reset</Button></div>
 



      </div>
      
    </div>
  );
}

export default App;
