import React from "react";
import mrfrog from './mr_frog2.jpg'; // Import your image
import frogData from "./mr_frog_object";



export default function Generator() {
  //const [memeImage, setMemeImage] = React.useState(""); 
  const[isGoingOut, trueValue] = React.useState(true);
  const[memeGoingOut, memeValue] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: getFrog()
  })
  function getFrog(){
    const randomIndex = Math.floor(Math.random() * frogData.length);
    const randomFrog = frogData[randomIndex]
    return randomFrog.img
  }
  React.useEffect(function(){
  console.log("Effect Worked")
  },[memeGoingOut])
    
  

  function finalFrog(){
    memeValue(prevState =>({
      ...prevState,
      randomImage:getFrog()
    })
  )}
  function truthyDetermine(){
    trueValue(prevState => !prevState)
    }
    function mrFrogText(){
      if(isGoingOut){
        return "The one and only mr frog!";
      }
    }

    const[formData, setFormData] = React.useState(
      {Email:"", Password: "", confirmPassword: "", checkbox: false}
    )

    function handleChange(event){
      setFormData(prevFormData =>{
        return{
          ...prevFormData,
          [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value}
      })
    }

    function handleSubmit(event) {
      event.preventDefault();
      console.log(formData);
    
      if (formData.checkbox) {
        console.log("doo");
      }
    
      if (formData.Password === formData.confirmPassword) {
        console.log("we did it!");
      } else {
        console.log("it's joever");
      }
    }
    

  

  return (
    <div>
      <header className="memeHead">
        <img src={mrfrog} className="mrFrog" alt="Mr. Frog" />
        <div className="leftText">Mr Frog!</div>
        <div className="rightText">CDC project</div>
      </header>
      <main>
        <div className="form">
          <div className="inputContainer">
            <input type="text" className="Input" placeholder="Input 1" />
            <input type="text" className="Input" placeholder="Input 2" />
          </div>
          <button onClick={finalFrog} className="theButton" >Get Mr Frog!</button>
        </div>
        <p className="imageContainer">
        <img src={memeGoingOut.randomImage} className="memeImage"/>
        </p>
      </main>
      <button onClick = {truthyDetermine}>{isGoingOut ? "Yes" : "No"}</button>
      {isGoingOut && <p> {mrFrogText()}</p>}
      <form onSubmit ={handleSubmit}>
        <input
          type = "text"
          placeholder="Email" 
          name = "Email"
          onChange={handleChange}
          value ={formData.Email}
        />
        <input
          type = "text"
          placeholder="Password" 
          name = "Password"
          onChange={handleChange}
          value ={formData.Password}
        />
        <input
        type = "text"
        placeholder="Confirm password" 
        name = "confirmPassword"
        onChange={handleChange}
        value ={formData.confirmPassword}
      />
      <label>
     Sign up for doo doo feces
      <input
      type = "checkbox"
      name = "checkbox"
      onChange={handleChange}
      checked ={formData.checkbox}
    />
    </label>
        <button> Sign up</button>
      </form>
    </div>
  );
}
