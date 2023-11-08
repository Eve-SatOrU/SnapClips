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
import React from 'react';
import "../src/components/background/styleb.css";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';


function App() {

   return (
    <>
      <div class="context">
        <Header/>
      <Main/>
      </div>

      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <Footer/>

    </>
    //<>
  //   <Background/>
  // <UserProfilePage/></>
    // <Router>
    //   <div>
    //     <Route path="/register" component={RegistrationForm} />
    //   </div>
    // </Router>

    
  );
}

export default App;