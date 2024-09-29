import React from 'react'
import '../Pages/signup-page/SignUp.css'
function ButtonSignUP({img,title}) {
  return (
    <div className="sign-with-thirdPart">
      <button className="btn-google">
              <img src={img} alt="" />
            {title}
            </button>
    </div>
  )
}

export default ButtonSignUP
