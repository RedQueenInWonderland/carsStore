import logo from './logo.svg';
import './App.css';

// import Bannertop from './components/Bannertop';
import Bannertop from './components/Bannertop';
// import Bannertop from './components/bannertop';
import Contentinline from './components/Contentinline';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Besidetop from './components/Besidetop';
import BannerS from './components/BannerS';



function App() {
  return (
    <div className="App">
      {/* <Bannertop/> */}
      {/* <Nav/> */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-100 col-md-3 col-lg-3" >
            <Besidetop />

          </div>
          <div class="col-sm-100 col-md-9 col-lg-9" >
            {/* <BannerS /> */}

          </div>
        </div>
        {/* <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div> */}
</div>


    {/* <Contentinline/> */}
    {/* <Footer/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
