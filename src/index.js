import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card';
import Collapse from './components/Collapse';

import reportWebVitals from './reportWebVitals';


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group w-100">
          <div className="col">
            <Collapse href="collapseExample1">
              <Card
               
                cardText="Lorem Ipsum Text I"
                updatedTime="Last updated 1 min ago"
                image="https://picsum.photos/id/1/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample2">
              <Card
                cardTitle="Card Title II"
                cardText="Lorem Ipsum Text II"
                updatedTime="Last updated 2 min ago"
                image="https://picsum.photos/id/2/200/300"
              />
            </Collapse>
          </div>
          <div className="col">
            <Collapse href="collapseExample3">
              <Card
                cardTitle="Card Title III"
                cardText="Lorem Ipsum Text III"
                updatedTime="Last updated 3 min ago"
                image="https://picsum.photos/id/4/200/300"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
