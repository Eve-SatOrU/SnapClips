// import React from 'react'

// function Header() {
//   return (
//     <>
//     <header class="p-2 " >
//     <div class="container" style={{marginLeft:'0px', marginRight:'0px'}}>
//       <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//         <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//           <h4 style={{paddingRight:'10px', marginRight:'100px'}}>SnapClips</h4>
//         </a>

//         <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//           <li><a href="/" class="nav-link px-2 text-white">Home</a></li>
//           <li><a href="/tiktok-download" class="nav-link px-2 text-white">Video</a></li>
//           <li><a href="/image-download" class="nav-link px-2 text-white">Image</a></li>
//           <li><a href="/contact" class="nav-link px-2 text-white">Contact</a></li>
//           <li><a href="/about" class="nav-link px-2 text-white">About</a></li>
//         </ul>

//         <div class="text-end">
//           <button type="button" href="/login" class="btn btn-outline-light me-2">Login</button>
//           <button type="button" href="/register" class="btn btn-light">Sign-up</button>
//         </div>
//       </div>
//     </div>
//   </header></>
//   )
// }

// export default Header


import React from 'react';

const Header = () => {
  return (
    <header className="p-2">
      <div className="container" style={{ marginLeft: '0px', marginRight: '0px' }}>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h2 style={{ fontSize: '2rem', paddingRight: '10px', marginRight: '100px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>SnapClips</h2>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" className="nav-link px-2 text-white">Home</a></li>
            <li><a href="/tiktok-download" className="nav-link px-2 text-white">Video</a></li>
            <li><a href="/image-download" className="nav-link px-2 text-white">Image</a></li>
            <li><a href="/contact" className="nav-link px-2 text-white">Contact</a></li>
            <li><a href="/about" className="nav-link px-2 text-white">About</a></li>
          </ul>

          <div className="text-end">
            <button type="button" href="/login" className="btn btn-outline-light me-2" style={{ fontSize: '1.2rem', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Login
            </button>
            <button type="button" href="/register" className="btn btn-light" style={{ fontSize: '1.2rem', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
