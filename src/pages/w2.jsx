import React, { useState } from 'react'; 
import './lgn.css';
import { useNavigate } from 'react-router-dom';

function Email() {
  const items0 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const items1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const items2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const items3 = ['.', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '_'];
  
  const [eml, setEmail] = useState(''); 
  const navigate = useNavigate(); // Hook to navigate

  const keyd = (item) => {
    setEmail((prev) => prev + item);
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setEmail(value);
  };

  const handleBackspace = () => {
    setEmail((prev) => prev.slice(0, -1)); 
  };

  const handleNext = () => {
    navigate('/password'); // Navigate to password component
  };

  return (
    <div>
      <h1 className="ttl">Enter Player Details</h1>
      <div className="eml">
        <input 
          type="email" 
          required
          placeholder="Email ID" 
          value={eml} 
          onChange={handleChange} 
        />
        <h1>  </h1>
      </div>

      <div className="row0">
        {items0.map((item, index) => (
          <button key={index} className="btn0" onClick={() => keyd(item)}>{item}</button>
        ))}
      </div>

      <div className="row1">
        {items1.map((item, index) => (
          <button key={index} className="btn1" onClick={() => keyd(item)}>{item}</button>
        ))}
      </div>

      <div className="row2">
        {items2.map((item, index) => (
          <button key={index} className="btn2" onClick={() => keyd(item)}>{item}</button>
        ))}
      </div>

      <div className="row3">
        {items3.map((item, index) => (
          <button key={index} className="btn3" onClick={() => keyd(item)}>{item}</button>
        ))}
      </div>

      <div className="bsp">
        <button className="btn4" onClick={handleBackspace}>DEL</button>
        <button className="lnk2" onClick={handleNext}>Next</button> {/* Updated to navigate */}
      </div>
    </div>
  );
}

export default Email;
