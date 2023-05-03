import React from "react";
import "./sign_up.css"

export default function Sign_up() {
    const [fornData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
  function handleSubmit(event) {
    event.preventDefault()
    if (fornData.password === fornData.passwordConfirm) {
        console.log("successfully signed up")
    } else {
        console.log("Password do not math")
    }
    if(fornData.joinedNewsletter) {
        console.log("Thanks for signing up our newletter!")
    }
  }
    
    return(
   <div className="form-container">
    <form className="form" onSubmit={handleSubmit}>
        <input
        type="email"
        placeholder="Email address"
        className="form-input"
        name="emaill"
        onChange={handleChange}
        value={FormData.email}
        />

<input
        type="password"
        placeholder="Password"
        className="form-input"
        name="password"
        onChange={handleChange}
        value={fornData.password}
        />

<input
        type="password"
        placeholder="Confirn password"
        className="form-input"
        name="passwordConfirm"
        onChange={handleChange}
        value={fornData.passwordConfirm}
        />

        <div className="form-marketing">
        <input
        id="okayToEmail"
        type="checkbox"
        onChange={handleChange}
        checked={fornData.joinedNewsletter}
       
        />
        <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button
          className="form-submit"
        >
            Sign up
        </button>
    </form>
   </div>
    )

}