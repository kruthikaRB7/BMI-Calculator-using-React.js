import React,{useState} from 'react';
import "./index.css"





function App() {
//making state of our application
const[weight,setWeight] = useState();
const[height,setHeight] = useState();
const[bmi,setBmi] = useState('');
const[message,setMessage] = useState('');

//Logic
let calcBmi = (e) => {
  e.preventDefault()  
  if(weight===0 || height===0)
  {
    alert("Please Enter a Valid Weight and Height")
  }

  else {
    let bmi =(weight/(height*height)*10.85)
    setBmi(bmi.toFixed(1))

    //
    if(bmi<17) {
      setMessage("You are Underweight")
    }
    else if(bmi>=17.1 && bmi<25) {
       setMessage("You are a Healthy Person")
    }
    else {
      setMessage("You are Overweight")
    }
  }
}

let reload = () => {
  window.location.reload();
}

  return (
    <div className="App">

      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div className='weight'>
            <label>Weight (kg)</label>
            <input type="text" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className='height'>
            <label>Height (foot)</label>
            <input type="text" placeholder="Enter your height" value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>


          <div className="buttons">
            <button className="reload" onClick={reload} type="submit">Reload</button>
            <button className="submit" type="submit">Submit</button>
          </div>
  
          <div className="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>

      </div>
    </div>

  );

}
export default App;

