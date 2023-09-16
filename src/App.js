import React from 'react';
import './App.css';

function App() {

  // states for setting a input values , error, result, and whether user has made any click to the buttons
  const [values, setValues] = React.useState({val1:0, val2:0})
  const [error, setError] = React.useState('');
  const [result, setResult] = React.useState(0);
  const [click, setClick] = React.useState(false);

  // this changes input 1 value
  const changeNum1Values = (e) => {
    userClick(false);
    setValues({...values, val1: e.target.value});
  }


  // this changes input 1 value
  const changeNum2Values = (e) => {
    userClick(false);
    setValues({...values, val2: e.target.value});
  }

// this function does the function based on the user 
  const doCalculation = (e) => {

    if(e.target.value=='+'){
        setResult(+values.val1 + +values.val2);
    }
    if(e.target.value=='-'){
        setResult(values.val1 - values.val2);
    }
    if(e.target.value=='*'){
        setResult(values.val1 * values.val2);
    }
    if(e.target.value=='/'){
        setResult(values.val1 / values.val2);
    }
  }

  // checking validation of error in 2 parts 
  
  const checkValidation = (e) => {
    // to set the clicked state to true
    userClick(true);

    // 1st validation if either of fields are empty
    if(values.val1=="" || values.val2==""){
      setError("Both input are required");
    }

    // 2nd if either of the fields contains not a number value
    else if(isNaN(values.val1)  && isNaN(values.val2)){
      setError("Both fields should be strictly Numbers")
    }
    else{
      doCalculation(e);
    }
  }


// this sets the resullt =it returns succeess or error components 
  const showResults = () => {
    // this sets the success messege it checks if error state is empty 
    if(error==""){
      return (
        <div>
          <p style={{color: "green"}}>Success!</p>
          <h3>{result}</h3>
        </div>
      )
    }

    // error condition component
    return (
      <div>
        <p style={{color: "red"}}>Error!</p>
        <h3>{error}</h3>
      </div>
    )
  }

// this sets click state : - true/false
  const userClick = (res) => {
    setClick(res);
  }

  return (
    <div className="App">
        <p>React Calculator</p>
        <input type='text' placeholder='Num 1' name='num1' onChange={changeNum1Values}/>
        <input type='text' placeholder='Num 2' name='num2' onChange={changeNum2Values}/>
        <br />
        <div className='buttons'>
          <button type="submit" onClick={checkValidation} value="+">+</button>
          <button type="submit" onClick={checkValidation} value="-">-</button>
          <button type="submit" onClick={checkValidation} value="*">*</button>
          <button type="submit" onClick={checkValidation} value="/">/</button>
        </div>
      {click && showResults()}
    </div>
  );
}

export default App;
