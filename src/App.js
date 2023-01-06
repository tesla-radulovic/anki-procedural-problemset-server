import './App.css';
import { MathComponent } from "mathjax-react";
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'


const eqs = {
  integral_y: () =>{ return String.raw`\int_0^1 y^2\ dy`} ,
  integral_x: () =>{ return String.raw`\int_0^1 x^2\ dx`}
}

function App() {

  let location = useLocation();
/*
  React.useEffect(() => {
    // Google Analytics
    console.log(location)
  }, [location]);
*/
  const values = queryString.parse(location.search);
  console.log(values)
  return (
    <div className="App">
      <p>
        <MathComponent tex={eqs[values.eq]()} />
      </p>
    </div>
  );
}




export default App;
