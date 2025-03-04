
import './App.css';
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.bundle.min.js'

import Bannertop from './components/Bannertop';
import Contentinline from './components/Contentinline';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Besidetop from './components/Besidetop';
import BannerS from './components/BannerS';
import Besidebottom from './components/Besidebottom.js';
import BesideR from './components/BesideR.js';
import ContentCenter from './components/ContentCenter.js';

function App() {
  return (
    <div className="App">

      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" >

            <Bannertop />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" >

            <Nav />
          </div>
        </div>


        <div className="row mb-2 ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3" >
            <Besidetop />

          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-9 pl-0" >
            <BannerS />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
            <Contentinline />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 same-height" >
            <Besidebottom />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 same-height" >
            <ContentCenter />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-3 same-height" >
            <BesideR />
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12" >
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
