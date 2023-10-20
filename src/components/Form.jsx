import './formstyle.css'
import { useState } from 'react';

function Form() {
//   const alert = () => {
//   alert("please open new account")
// }
  let [Vb, setVb] = useState("Sign Up");
  return ( <div className='ma'><div className='contain'>
<div className="form">
  <div className="head">
        <h3>{Vb }</h3>
      </div>
      <div className="main">
  <div className="User1">
          <input type="" className="User" placeholder="Name" />
        </div>
        {Vb === "Login" ? "" : <div className="User1">
          <input type="email" placeholder="E-mail" className='User' />
        </div>}
          <div className="User1">
        <input type="password" placeholder="Password" className='User' />
  </div>

  <div className="NUser">
    <p>New User?</p> <span >ClickHere</span>
        </div>
        <div className="but">
          <button type="submit" className={Vb === 'Login' ? 'login gray':'login' } onClick={()=>{setVb("Login")}}> Login </button>
          <button type="submit" className={Vb === 'Sign Up' ? 'login gray':'login' } onClick={() => { setVb("Sign Up") }}>Sign Up</button>
        </div>
      </div>
    </div>
  </div>  </div>)
}
export default Form;
