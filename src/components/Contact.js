import React from 'react';
import Insta from './pranitivakharia_qr.png';
import LinkedIn from './linkedin.png'
import github from './github.png'


const Contact = (props) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  return (
    <div>
      <div>Hello, this is {props.page} page</div>
      <div>Phone number: +1(437)9876178</div>
      <div>My Instagram QR Code: </div>
      <img src={Insta} alt="Insta" style={{ width: 200, height: 200 }} />
      <img src={LinkedIn} alt="LinkedIn" style={{ width: 200, height: 200 }} onClick={() => openInNewTab('https://linkedin.com/in/pranitivakharia')} />
      <img src={github} alt="github" style={{ width: 200, height: 200 }} onClick={() => openInNewTab('https://github.com/PranitiV')} />
      {/* <BsLinkedin style={{ width: 50, height: 50 }} onClick={() => openInNewTab('https://github.com/PranitiV')} />
      <SocialIcon url="https://github.com/PranitiV " style={{ color: "black" }} /> */}
    </div>
  )
}

export default Contact