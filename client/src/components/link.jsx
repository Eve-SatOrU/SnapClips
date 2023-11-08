import { React, useState } from 'react';

function Link() {
        const [LinkUrl, setLinkUrl] = useState({
          link: ''
        });
        
  return (
    <><div class="position-relative p-5 text-center text-muted  " style={{margin:'80px'}}>
        <p class="col-lg-6 mx-auto mb-4">
     Put the link of the video that you want to remove the Watermark from here:
    </p>
    <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
    <input type="search" class="form-control form-control-dark text-bg-dark"  placeholder="Search..." aria-label="Search"  value={LinkUrl.link}
              onChange={(e) => setLinkUrl({ ...LinkUrl, link: e.target.value })}/>
  </form>
  <button style={{margin:'20px'}} class="btn btn-primary px-5 mb-5" type="button">
      generate
    </button></div></>
  )
}

export default Link