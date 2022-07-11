import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './Products.json';


const root = ReactDOM.createRoot(document.getElementById('root'));


function Home(){
    console.log("products",Products);
  return <div>
    <App/>
    
    {
        Products.map((Products,index)=>
        <p key={index}>{Products.name}</p>)
    }
    

  </div>
}
root.render( <Home/> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
