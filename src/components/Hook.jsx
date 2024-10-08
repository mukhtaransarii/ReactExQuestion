import React, { useState, useEffect, useRef } from 'react';

export default function Hook() {
  // 01. Counter function
  const [counter, setCounter] = useState(0);
  // 02. BackgroundColor Changer function
  const [color, setColor] = useState("white");

  // 03. Password Generator function
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password generation useEffect
  useEffect(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+[]{}|;:,.<>?';

    let pass = '';
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  // Copy button state
  const [copy, setCopy] = useState("Copy");
  const [copiedPasswords, setCopiedPasswords] = useState([]); // Initialize as an empty array

  // Ref for password input
  const inputpass = useRef(null);
   
  // Reset 'Copy' to 'Copy' when length, numAllowed, or charAllowed change
  useEffect(() => {
    setCopy("Copy"); // Reset to 'Copy' when any of these dependencies change
  }, [length, numAllowed, charAllowed]);
  
  // Copy to clipboard function
  function clipboard() {
   window.navigator.clipboard.writeText(password);
   inputpass.current?.select();
   setCopy('Copied');
   setCopiedPasswords((prevPasswords) => [...prevPasswords, password]);
  }
  
  function deletePassword(index) {
   setCopiedPasswords((prevPasswords) => prevPasswords.filter((_, i) => i !== index));
  }


  return (
  <div className="bg-[#CDEA68] p-5 flex flex-col gap-5">
    <h5>01 useState && useEffect Method</h5>
      <div className="card">
        <p className="text-zinc-400 text-[8px] mb-2">Counter</p>
        <button onClick={() => setCounter(counter + 1)}>Increase: {counter}</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease: {counter}</button>
        <button onClick={() => setCounter(0)}>Reset Counter</button>
      </div>

      <div className="card" style={{ backgroundColor: color }}>
        <p className="text-zinc-400 text-[8px] mb-2">Background Color Changer</p>
        <button className="bg-red-500 hover:bg-red-500" onClick={() => setColor("red")}>Red</button>
        <button className="bg-green-500 hover:bg-green-500" onClick={() => setColor("green")}>Green</button>
        <button className="bg-yellow-500 hover:bg-yellow-500" onClick={() => setColor("yellow")}>Yellow</button>
        <button className="bg-blue-500 hover:bg-blue-500" onClick={() => setColor("blue")}>Blue</button>
        <button className="bg-white text-black border border-black border-solid hover:bg-white hover:text-black" onClick={() => setColor("white")}>White</button>
      </div>

      <div className="card">
        <p className="text-zinc-400 text-[8px] mb-2">Password Generator</p>
        <div className="flex items-center gap-2 flex-wrap">
          <input 
            ref={inputpass}
            type="text" 
            value={password} 
            readOnly 
            className="pl-2 border-black border-2 border-solid rounded"
          /> 
          <button onClick={clipboard}>{copy}</button>
          <input 
            type="range" 
            min="6" 
            max="30" 
            value={length}  
            onChange={(e) => setLength(e.target.value)} 
          /> 
          <label>Length: {length}</label>
          <input 
            type="checkbox" 
            id="numinput"
            defaultChecked={numAllowed} 
            onChange={() => setNumAllowed((prev) => !(prev))}
          /> 
          <label htmlFor="numinput">Number</label>
          <input 
            type="checkbox" 
            id="charinput"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !(prev))}
          /> 
          <label htmlFor="charinput">Character</label>
        </div>
     
        {/* Append and Delete Copide Password */}
        {copiedPasswords.map((pass, index) => (
         <div key={index} className="max-w-[300px] flex items-center justify-between py-2 gap-2">
           <p className="bg-zinc-200 text-zinc-600 rounded text-[12px] px-1  flex-1">Copied Password: {pass}</p>
           <button onClick={() => deletePassword(index)} className="text-[10px] px-1 py-[2px]"> Delete</button>
         </div>
        ))}
      </div>
    </div>
  );
}
