// import './App.css';


// function App() {
//   return (
//     <div className="App">

//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';

function App() {
  return (
    <Router>
      <div>
        <Route path="/register" component={RegistrationForm} />
      </div>
    </Router>
  );
}


export default App;
