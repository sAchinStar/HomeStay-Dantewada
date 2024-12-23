import React from 'react';
import "./SidebarSocial.css"
const Sidebar = () => {
  return (
    <div className='float-end'>
      <div className="d-none d-lg-flex flex-column align-items-center justify-content-center  " style={{ width: '113px', height: '744px' }}>
        <a href="https://wa.me/6260012978" target="_blank" rel="noopener noreferrer">
          <div className="p-2 rounded-circle d-flex align-items-center justify-content-center transition-transform bg-success-hover">
            <img
              className="rounded-circle"
              src="/whatsapp.gif"
              alt="WhatsApp Logo"
              height={40}
              width={40}
            />
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61570083880734" target="_blank" rel="noopener noreferrer">
          <div className="p-2 rounded-circle d-flex align-items-center justify-content-center transition-transform bg-primary-hover">
            <img
              src="/facebook.svg"
              alt="Facebook Logo"
              height={40}
              width={40}
            />
          </div>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <div className="p-2 rounded-circle d-flex align-items-center justify-content-center transition-transform bg-primary-hover">
            <img
              src="/linkedin.svg"
              alt="LinkedIn Logo"
              height={40}
              width={40}
            />
          </div>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <div className="p-2 rounded-circle d-flex align-items-center justify-content-center transition-transform bg-danger-hover">
            <img
              src="/insta.svg"
              alt="Instagram Logo"
              height={40}
              width={40}
            />
          </div>
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <div className="p-2 rounded-circle d-flex align-items-center justify-content-center transition-transform bg-info-hover">
            <img
              src="/twitter.svg"
              alt="Twitter Logo"
              height={40}
              width={40}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;




// // import img from 'next/img'
// import {Link} from 'react-router-dom'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div>
//       <div className="hidden lg:flex w-[113px] h-[744px]">
//         <div className="flex flex-col justify-center items-center w-full gap-3">
//           <Link to="https://wa.me/916265761531">
//             <div className="hover:scale-110 hover:bg-[#34c358] p-2 rounded-full transition-all duration-300 ease-in-out">
//               <img  className="rounded-full"
//                 src="/whatsapp.gif"
//                 alt="WhatsApp Logo"
//                 height={40}
//                 width={40}
//                 priority
//               />
//             </div>
//           </Link>
//           <Link to="https://www.facebook.com/profile.php?id=61570083880734">
//             <div className="hover:scale-110 hover:bg-blue-500 p-2 rounded-full transition-all duration-300 ease-in-out">
//               <img
//                 src="/facebook.svg"
//                 alt="Facebook Logo"
//                 height={40}
//                 width={40}
//                 priority
//               />
//             </div>
//           </Link>
//           <Link to="/">
//             <div className="hover:scale-110 hover:bg-blue-700 p-2 rounded-full transition-all duration-300 ease-in-out">
//               <img
//                 src="/linkedin.svg"
//                 alt="LinkedIn Logo"
//                 height={40}
//                 width={40}
//                 priority
//               />
//             </div>
//           </Link>
//           <Link to="/">
//             <div className="hover:scale-110 hover:bg-pink-500 p-2 rounded-full transition-all duration-300 ease-in-out">
//               <img
//                 src="/insta.svg"
//                 alt="Instagram Logo"
//                 height={40}
//                 width={40}
//                 priority
//               />
//             </div>
//           </Link>
//           <Link to="/">
//             <div className="hover:scale-110 hover:bg-sky-400 p-2 rounded-full transition-all duration-300 ease-in-out">
//               <img
//                 src="/twitter.svg"
//                 alt="Twitter Logo"
//                 height={40}
//                 width={40}
//                 priority
//               />
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
