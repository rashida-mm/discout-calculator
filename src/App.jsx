import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[amount,setAmount]=useState(0)
  const[discount,setDiscount]=useState(0)
  
  const[total,setTotal]=useState(0)

console.log(amount,discount);

const calc =(e)=>{
  if (isNaN(amount) || isNaN(discount)) {
    alert('Please enter valid numbers for amount and discount');
  } 
  else{
    const output = amount - (amount * discount) / 100;
  setTotal(output)
  }
}

const reset = (e)=>{
setTotal(0);
setAmount(0);
setDiscount(0)
}
  return (
    <div className="App">
<div className='row'>
    <div className="header">
          <h1>Discount Calculator</h1>
          </div>
      <div className="container-fluid col px-5">
      <img src="https://cdn.dribbble.com/users/2004171/screenshots/5646149/dribbble_canvas__calculator_.gif" alt="" />
      </div>
      <div className="container-fluid entry col px-5">
      <div className="form">
              <form>
                <div className="input">
                <TextField className='my-3' value={amount || ''} onChange={(e)=>setAmount(e.target.value)} id="outlined-basic" label="Price" variant="outlined" />
                <TextField className='my-3' value={discount || ''} onChange={(e)=>setDiscount(e.target.value)} id="filled-basic" label="Disocunt" variant="outlined" />
                  </div>
                <div className="button">
                <Button variant="contained" onClick={e=>calc(e)} >Discount</Button>
                  <Button variant="outlined" onClick={e=>reset(e)} >Reset</Button>
                 </div>
              </form>
            </div>
            <div className="total">
              <h2> Total Amount : &#8377;{total} </h2>
            </div>
      </div>
</div>
    </div>
  );
}

export default App;
