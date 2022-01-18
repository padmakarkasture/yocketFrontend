import React from 'react'
import logo from '../yocket_logo.png'

export function Navbar() {
    return (
   <>
   <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid ">
    <a className="navbar-brand " href="/"><img className='logo' src={logo} ></img> <span className='orange'>Yocket</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Explore</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">College Finder</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/">Connect</a>
        </li>
        <li className="nav-item ">
        <a className="nav-link active " href="/">
        <svg aria-hidden="true" focusable="true" data-prefix="fas " data-icon="crown" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="text-lg  svg-inline--fa fa-crown fa-w-20" data-v-4a0bd666=""><path fill="currentColor" d="M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z" data-v-4a0bd666="" className="orange"></path></svg>
         </a>
        </li>
        <li className="nav-item ">

          <a className=" nav-link active " href="/"><span className='orange'>Premium</span></a>
        </li>
      </ul>
  <button className=' login'>Login</button>

    </div>
  </div>
</nav>
   </>
    )
}

