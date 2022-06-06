import React from "react"

export default function App(){
    return(
        <div className="container">
            <div className="content--container">
              <img src="./images/logo.svg" className="logo--img"></img>
              <h1><span className="we-are">WE'RE</span><br></br>
              <span className="coming">COMING</span><br></br> SOON</h1>
              <h2>Hello fellow shoppers! We're currently building our new fashion store. 
                  Add your email below to stay up-to-date with announcements and our launch deals.
              </h2>
              
              <div className="form">
                  <form action="#" id="imput-form">   
                    <input name="email" type="email" placeholder="Email Address"/>
                    <button> <img src="images/icon-arrow.svg" alt="arrow"/></button>
                  </form>
              </div>
            </div>
            <div className="img--container"/>
        </div>
    )
}