import React from 'react'

function Header() {
  return (
    <>
    <header class="p-2 " >
    <div class="container" style={{marginLeft:'0px', marginRight:'0px'}}>
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <h4 style={{paddingRight:'10px'}}>SnapClips</h4>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-white">Home</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Video</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Image</a></li>
          <li><a href="#" class="nav-link px-2 text-white">Contact</a></li>
          <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2">Login</button>
          <button type="button" class="btn btn-light">Sign-up</button>
        </div>
      </div>
    </div>
  </header></>
  )
}

export default Header