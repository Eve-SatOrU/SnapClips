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
import About from './components/about';
import Login from './components/LoginForm';
import Link from './components/link';


function App() {

   return (
    <>
      <div class="context">
        <Header/>
      <Main/>
      <About/>
      <Login/>
      <Link/>



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