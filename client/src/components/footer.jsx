import React from 'react'

function Footer() {
  return (
    <>
    <footer class="py-3 " style={{backgroundColor:'#4e54c8' ,margin:'0px',padding:'0px'}}>
      <ul class="nav justify-content-center border-bottom pb-2 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      </ul>
      <p class="text-center text-body-secondary">© 2023 SnapClip, Inc</p>
    </footer>
  </>
  )
}

export default Footer