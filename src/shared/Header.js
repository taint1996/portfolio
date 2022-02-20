import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="d-flex justify-content-start">
            <a className="navbar-brand" href="#">Nguyen Trung Tai - TJ</a>
          </div>

          <div className="d-flex justify-content-end">
            <div className="p-2 bd-highlight">Work</div>
            <div className="p-2 bd-highlight">About Me</div>
            <div className="p-2 bd-highlight">Experience</div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header