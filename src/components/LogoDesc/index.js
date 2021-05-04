import React from 'react'

const LogoDesc = ({ logo, desc }) => (
    <div id="LogoDesc" className="logoDescContainer">
    <img className="box" src={logo}></img>
    <div
        className="align-self"
        dangerouslySetInnerHTML={{ __html: desc }}
    />
   </div>
)

export default LogoDesc
