// import React from 'react';
// import './Footer.css'; // Import the CSS for the footer
// import ng from '../Assets/nglogo.png';
// import nic from '../Assets/niclogo.png';
// // import di from '../assets/dilogo.png';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-left">
//         <div className="footer-contact">
//           <h3>Contact Us</h3>
//           <ul className="admin-details">
//             <li>Name: Sachin kumar, Yash sahu, Somda </li>
//             <li>Post/designation :Searvice Officer's  (Protocol Officer)</li>
//             <li>Mobile number : +91 6260012978, +91 6265490184</li>
//             <li>Email: support@dantewada-tourism.com</li>
//             {/* <li>Email: admin@example.com</li> */}
//           </ul>
//         </div>
//       </div>
//       <div className="footer-right">
//         <div className="ownership">
//           <p>
//             © Dantewada, Chhattisgarh This Website Is Designed And Developed By 
//             <a href="https://navgurukul.org/" target="_blank" rel="noopener noreferrer"> NavGurukul Dantewada </a>
//             And Managed By 
//             <a href="https://nic.in/" target="_blank" rel="noopener noreferrer"> National Informatics Centre </a>, 
//             Ministry Of Electronics & Information Technology, Government Of India.
//           </p>
//           <p>Last Updated: <strong>Dec 20, 2024</strong></p>
//           <div className="logos">
//             <a href="https://www.navgurukul.org/" target="_blank" rel="noopener noreferrer">
//               <img src={ng} alt="NavGurukul Logo" />
//             </a>
//             <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer">
//               <img src={nic} alt="NIC Logo" />
//             </a>
//             <a href="https://www.digitalindia.gov.in/" target="_blank" rel="noopener noreferrer">
//               {/* <img src={di} alt="Digital India Logo" /> */}
//             </a>
//           </div>
//         </div>
//         <div className="social-icons">
//           <p>Connect with us on:</p>
//           <a href="https://www.facebook.com/Dantewadadist" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="https://www.instagram.com/dantewada_district/" target="_blank" rel="noopener noreferrer">
//             <i className="fab fa-instagram"></i>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import './Footer.css'; // Import the CSS for the footer
import ng from '../Assets/nglogo.png';
import nic from '../Assets/niclogo.png';
// import di from '../assets/dilogo.png';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-left">
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <ul className="ad-details">
          <li>Name: Sachin Kumar, Yash Sahu, Somda</li>
          <li>Post/Designation: Service Officer's (Protocol Officer)</li>
          <li>Mobile Number: +91 6260012978, +91 6265490184</li>
          <li>Email: support@dantewada-tourism.com</li>
        </ul>
      </div>
    </div>
  
    <div className="footer-right">
      <div className="ownership">
        <p>
          © Dantewada, Chhattisgarh This Website Is Designed And Developed By 
          <a href="https://navgurukul.org/" target="_blank" rel="noopener noreferrer"> NavGurukul Dantewada </a>
          And Managed By 
          <a href="https://nic.in/" target="_blank" rel="noopener noreferrer"> National Informatics Centre </a>, 
          Ministry Of Electronics & Information Technology, Government Of India.
        </p>

        <div className="logos">
        <a href="https://www.navgurukul.org/" target="_blank" rel="noopener noreferrer">
          <img src={ng} alt="NavGurukul Logo" />
        </a>
        <a href="https://www.nic.in/" target="_blank" rel="noopener noreferrer">
          <img src={nic} alt="NIC Logo" />
        </a>

       {/* <div className="social-icons"> */}
        <a href="https://www.facebook.com/Dantewadadist" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/dantewada_district/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      {/* </div>  */}
      </div>

        

      </div>
    </div>
  
    <hr className="hr-line" />
  
    <div className="footer-center">
    <p>Last Updated: <strong>Dec 20, 2024</strong></p>
      <p>© Dantewada, Chhattisgarh</p>
      
     
    </div>
  </footer>
  
  
  
  );
};

export default Footer;