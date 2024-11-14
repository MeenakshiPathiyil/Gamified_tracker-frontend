import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/apiService';
import './lgn.css';

function W0() {
  const [step, setStep] = useState(1); 
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const items0 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const items1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const items2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const items3 = ['.', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '_','@'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const keyd = (item) => {
    if (step === 1) {
      setFormData((prev) => ({ ...prev, username: prev.username + item.toLowerCase() }));
    } else if (step === 2) {
      setFormData((prev) => ({ ...prev, email: prev.email + item }));
    } else if (step === 3) {
      setFormData((prev) => ({ ...prev, password: prev.password + item }));
    }
  };

  const handleBackspace = () => {
    if (step === 1) {
      setFormData((prev) => ({ ...prev, username: prev.username.slice(0, -1) }));
    } else if (step === 2) {
      setFormData((prev) => ({ ...prev, email: prev.email.slice(0, -1) }));
    } else if (step === 3) {
      setFormData((prev) => ({ ...prev, password: prev.password.slice(0, -1) }));
    }
  };

  const handleNext = async () => {
    if (step === 3) {
      console.log('Submitting form data: ', formData);

      try {
        const result = await registerUser(formData); 
        console.log('Server response: ', result); 
        
        if(result.sessionActive) {
          navigate('/home');
        }
      } 
      catch (error) {
        console.error("There was an error submitting the data!", error);
      }
    } 
    else {
        setStep(prevStep => prevStep + 1); 
      }
  };

  return (
    <div className="body">
      
      <img src="/images/player.png" alt="Player" className="player-img" />

      {step === 1 && (
        <div className="uname">
          <input 
            type="text" 
            name="username"
            required
            placeholder="Username" 
            value={formData.username} 
            onChange={handleChange}
          />
        </div>
      )}

      {step === 2 && (
        <div className="eml">
          <input 
            type="email" 
            name="email"
            required
            placeholder="Email ID" 
            value={formData.email} 
            onChange={handleChange}
          />
        </div>
      )}

      {step === 3 && (
        <div className="pw">
          <input 
            type="password" 
            name="password"
            required
            minLength={8}
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange}
          />
        </div>
      )}

      <div className="row0">
        {items0.map((item, index) => (
          <button key={index} className="btn0" onClick={() => keyd(item)}>{item}
          <img 
            src={`/images/keys/${item}.png`} 
            alt={`Key ${item}`} 
            className="key-img" />
          </button>
        ))}
      </div>

      <div className="row1">
        {items1.map((item, index) => (
          <button key={index} className="btn1" onClick={() => keyd(item)}>{item}
          <img 
          src={`/images/keys/${item}.png`} 
          alt={`Key ${item}`} 
          className="key-img" />

          
          </button>
        ))}
      </div>

      <div className="row2">
        {items2.map((item, index) => (
          <button key={index} className="btn2" onClick={() => keyd(item)}>{item}
          <img
            src={`/images/keys/${item}.png`} 
            alt={`Key ${item}`} 
            className="key-img" 
          
          />
          </button>
        ))}
      </div>

      <div className="row3">
        {items3.map((item, index) => (
          <button key={index} className="btn3" onClick={() => keyd(item)}>{item}
          <img
            src={`/images/keys/${item}.png`} 
            alt={`Key ${item}`} 
            className="key-img" 
          
          />
          
          </button>
        ))}
      </div>

      <div className="bsp">
        <button className="btn4" onClick={handleBackspace}>
        <img src="/images/delete.png" alt="delete" className="delete-img" />
        </button>
        <button className="lnk1" onClick={handleNext}>
        <img src="/images/next1.png" alt="next" className="next-img" />
          </button> 
      </div>
    </div>
  );
}

export default W0;
