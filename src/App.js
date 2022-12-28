import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Reacttask.css';
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
import Form from './components/Form';
function App() {
  return (
    <div className="App">

      
      {/* <body>
        <div>
          <form className="form">
            <h1>NEW BUSINESS</h1>
            <div>
              <label for="name">Name: </label>
              <input type={"text"} placeholder="Enter the Name..." id="username" className="name" name="Name" />
            </div>
            <div>
              <label for="emailid">Email-Id: </label>
              <input type={"email"} placeholder="Enter the Email-Id..." id="useremail" className="emailid" name="Email-Id" />
            </div>
            <div>
              <label for="phonenumber">Phone-Number: </label>
              <input type={"tel"} maxLength="10" placeholder="Enter the PhoneNumber..." id="userphonenumber" className="phonenumber" name="Phone-Number" />
            </div>
            <div>
              <label form="website">Website: </label>
              <input type={"text"} placeholder="Enter the Link..." id="userwebsite" className="website" name="Website" />
            </div>
            <div>
              <label for="contactname">Contact Name: </label>
              <input type={"text"} placeholder="Contact Name..." id="usercontactname" className="contactname" name="Conatact-Name" />
            </div>
            <div>
              <label for="contactemailid">Contact Email-id: </label>
              <input type={"email"} placeholder="Contact-Mail..." id="usercontactemail" className="contactemail" name="Contact Email-Id" />
            </div>
            <div>
              <label for="contactnumber">Contact Number: </label>
              <input type={"tel"} maxLength="10" placeholder="Contact-Number..." id="usercontactnumber" className="contactnumber" name="Contact number" />
            </div>
            <div>
              <label fro="notes">Notes: </label><br />
              <textarea cols={15} rows={5} placeholder="Fill the Notes..." id="usernotes" className="notes" name="Notes" />
            </div>
            <div>
              <label for="types">Types: </label><br />
              <input type="radio" required id="types" className="types" value="Small Business" name="Types" />Small Business<br />
              <input type="radio" required id="types" className="types" value="Enterprise" name="Types" />Enterprise<br />
              <input type="radio" required id="types" className="types" value="Entrepreneur" name="Types" />Entrepreneur<br />
            </div>
            <div>
              <label for="category">Category: </label><br />
              <select id="usercategory" multiple size="5">
                <option name="category" value="Colthes">Colthes</option>
                <option name="category" value="Toys">Toys</option>
                <option name="category" value="Groceries">Groceries</option>
                <option name="category" value="Electronics">Electronics</option>
                <option name="category" value="Digital">Digital</option>
              </select>
            </div>
            <div>
            </div>
            <label>Commission Percentage:</label>
            <input type={"number"} max="100" min="0" id="usercomissionpercentage" className="comissionpercentage" name="ComissionPercentage" />
            <div>
              <label for="activeform">Active-Form:</label>
              <input type={"date"} id="useractiveform" className="userform" name="Active-Form" />
            </div>
            <div>
              <label for="criticalaccount">Critical-Account: </label>
              <input type={"checkbox"} id="usercriticalaccount" className="criticalaccount" name="Critical-Account" />
            </div>
            <div>
              <label for="paymentoptions">Payment-Options: </label><br />
              <select id="userpaymentoptions" multiple size="3">
                <option name="paymentoptions" value="Cash on Delievery">Cash on Delievery</option>
                <option name="paymentoptions" value="UPI">UPI</option>
                <option name="paymentoptions" value="Card Payment">Card Payment</option>
              </select>
            </div>
            <div>
              <button type="submit" id="userbutton" className="button" name="Submit">Submit</button><br />
              <button type="reset" id="userreset" className="reset" name="Reset">Reset</button>
            </div>
          </form>
        </div>
      </body> */}

      {/* </form>/> */}
      {/* <MyReact name= "Sarathi" heroName="Superman" />
    <MyReact name= "Susee" heroName="Spiderman" /> */}
      {/* <Welcome name= "Kavin" heroName="Ironman"/> 
    <Welcome name= "Sarathi" heroName="Superman"/> 
    <Welcome name= "Susee" heroName="Spiderman"/>  
     <Hello/>
     <Message/> */}
     <Form/>
    </div>
  );
}

export default App;









