// import React, { useState } from 'react';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// function Login() {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
    // const [isLoading, setIsLoading] = useState(false);

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
        
//         const loginData = { email, password };

//         try {
//             // Update this URL to your Render backend
//             const response = await fetch('https://script.google.com/macros/s/AKfycbxuR3R3Bg4W3AHcNvh6jgIo39RAUs0e3NSDN-xh1n0mta501lTKmaXViSz2FJRFDHus/exec', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(loginData),
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();

//             if (data.status === 'success') {
//                 navigate('/adminpage'); // Navigate to admin panel on successful login
//             } else {
//                 setErrorMessage(data.message); // Show error message if login fails
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             setErrorMessage('An error occurred. Please try again.');
//             alert("try again")
//         }

//         // Clear email and password fields
//         setEmail('');
//         setPassword('');
//     };

//     return (
//         <div className="login-ner">
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <h2>Admin Login</h2>
//                 <div className="form-group">
//                     <label>Email:</label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <div className="password-wrapper">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <span className="eye-icon" onClick={togglePasswordVisibility}>
//                             <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                         </span>
//                     </div>
//                 </div>
//                 <button type="submit" className='button-login'>
//                 {isLoading ? "Loging...." : "Login"}
//                 </button>
//                 {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}
//             </form>
//         </div>
//     );
// }

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import './BookRoom.css';
// import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const LoginForm = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message
    setIsLoading(true);
    try {
      // Send a POST request to the Google Apps Script endpoint
      const response = await fetch('https://script.google.com/macros/s/AKfycbzFDeFHR5Y1SNOdeVrizpI_42KnNBXrZMQ5fNfr9hVwRyXW2QltKbvdGJFbBARK8l8aQg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          email,
          password,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setMessage(`Login successful! Row number: ${result.row}`);
                navigate('/adminpage'); // Navigate to admin panel on successful login
      } else {
        setMessage('Login failed. Please check your credentials.');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="add-booking-container">

<div className="add-booking-flex">
       
    <div style={styles.cont}>
      <form className="book-room-form" onSubmit={handleSubmit} style={styles.form}>
        <h2 className='h2'> Admin Login</h2>
        <div style={styles.inputGroup}>
          <label className='label' htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='input'
          />
        </div>
        <div style={styles.inputGroup}>
          <label className='label' htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             className='input'
            required
          />
        </div>
        <button className='bt-buton' type="submit" style={styles.button}>
        {isLoading ? "Loging...." : "Login"}
        </button>
        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
    <div className="image-container">
            <img src="/loginimage.svg" alt="Room Booking" className="booking-image" />
        </div>
    </div>
    </div>
  );
};

const styles = {
  cont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
  },
  form: {
    padding: '20px',
    // border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    // width: '400px',
    width:"300px",
    height:"100vh",

    // boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  inputGroup: {
    marginBottom: '15px',
  },
 
  message: {
    marginTop: '15px',
    color: 'green',
  },

  
};

export default LoginForm;

