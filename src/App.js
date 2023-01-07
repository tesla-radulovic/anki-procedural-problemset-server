import './App.css';
import { MathComponent } from "mathjax-react";
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'




const eqs = {
  integral_y: () =>{ return <MathComponent tex={String.raw`\int_0^1 y^2\ dy`} />} ,
  integral_x: () =>{ return <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />}
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
  return eqs[values.eq]()
}




export default App;
