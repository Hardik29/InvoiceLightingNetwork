import './App.css';
import React,{useState} from 'react';
import {createInvoice} from './interact';

function App() {
  const [amount, setAmount] = useState(0)
  const [curr, setCurr] = useState("USD")
  const [id, setId] = useState("")
  const [address, setAddress] = useState("")

  const handleClick = async() => {
    const {id, address} = await createInvoice(amount,curr);
    setId(id);
    setAddress(address);
  }


  return (
    <div class="mt-10 flex justify-center items-center align-center">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">
        Amount
      </label>
      <input onChange={(e)=>setAmount(e.target.value)} type="number" pattern="[0-9]*" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Amount" />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="USD">
        Currency
      </label>
      <input onChange={(e)=>setCurr(e.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="USD" />
    </div>
    
    <div class="flex items-center justify-between">
      <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Generate Invoice
      </button>
    </div>
  </form>
 {id}{address}
</div>
  );
}

export default App;
