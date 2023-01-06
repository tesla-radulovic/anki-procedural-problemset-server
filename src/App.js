import './App.css';
import { MathComponent } from "mathjax-react";
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'


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
        <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
      </p>
    </div>
  );
}




export default App;
