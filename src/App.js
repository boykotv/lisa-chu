import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
       <div className="App">
      {/* //    <header className="App-header">
      //      <img src={logo} className="App-logo" alt="logo" />
      //      <p>
      //        Edit <code>src/App.js</code> and save to reload.
      //      </p>
      //      <a
      //        className="App-link"
      //        href="https://reactjs.org"
      //        target="_blank"
      //        rel="noopener noreferrer"
      //      >
      //        Learn React
      //      </a>
      //    </header>
      // </div> */}

        <header>
          <a class="main-logo" href="/"></a>
          <div class="main-slogan">DESIGN  &  ILLUSTRATION </div>
          <nav class="navbar">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="true" aria-controls="navbar">
                <span class="">MENU</span>
              </button>
            </div>
            <div id="navbar" class="navbar-collapse collapse" aria-expanded="true">
              <ul class="nav navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Shop</a>
                </li>
                <span class="separator">•</span>
                <li class="nav-item">
                  <a class="nav-link" href="#">Projects</a>
                </li>
                <span class="separator">•</span>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <span class="separator">•</span>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section class="gallery-wrap">
          <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            {/* <!-- Wrapper for slides --> */}
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="assets/img/1.png" alt="..."/>
                <div class="carousel-caption"></div>
              </div>
              <div class="item">
                <img src="assets/img/2.png" alt="..."/>
                <div class="carousel-caption"></div>
              </div>
              {/* <!-- <div class="item">
                <img src="assets/img/3.png" alt="...">
                <div class="carousel-caption"></div>
              </div> --> */}
            </div>
          
            {/* <!-- Controls --> */}
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
    </section>
    <section class="info-wrap">
      <div class="photo-wrap">

      </div>  
      <span class="info-text">Hello! My name is Lisa, and I'm designer and illustrator.</span>
      <span class="info-text">I'll help you realize your ideas!</span>  
    </section>
    <section class="links-wrap">
      <div class="row no-gutter">
          <div class="col-xs-12 col-md-12 col-lg-8 col-lg-offset-2">
            <div class="col-xs-12 col-md-3 col-lg-3 link-item">
                <a class="link-wrap" href="#">
                    <div class="ico logo"></div>
                    <div class="separator"></div>
                    <span class="link-text">Logo</span>
                </a>
            </div>  
            <div class="col-xs-12 col-md-3 col-lg-3 link-item">
                <a class="link-wrap" href="#">
                        <div class="ico illustration"></div>
                        <div class="separator"></div>
                        <span class="link-text">Illustration</span>
                </a>
            </div>
            <div class="col-xs-12 col-md-3 col-lg-3 link-item">
                <a class="link-wrap" href="#">
                        <div class="ico postcards"></div>
                        <div class="separator"></div>
                        <span class="link-text">Postcards</span>
                </a>
            </div>
            <div class="col-xs-12 col-md-3 col-lg-3 link-item">
                <a class="link-wrap" href="#">
                        <div class="ico watercolor"></div>
                        <div class="separator"></div>
                        <span class="link-text">Watercolor</span>
                </a>
            </div>
          </div>
      </div>  
    </section>
    <section class="instagram-wrap">
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="instagram-content">
                        {/* <!-- <h3>Latest Photos</h3> --> */}
                        <div class="row photos-wrap">
                        {/* <!-- Instafeed target div --> */}
                        <div id="instafeed" class="no-gutter"></div>
                            {/* <!-- The following HTML will be our template inside instafeed
                            <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                                <div class="photo-box">
                                    <div class="image-wrap">
                                        <img src="images/test_img.jpg">
                                        <div class="likes">309 Likes</div>
                                    </div>
                                    <div class="description">
                                        Fantastic Architecture #architecture #testing
                                        <div class="date">September 16, 2014</div>
                                    </div>
                                </div>
                            </div> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="social">
            <a class="instagram" href="https://www.instagram.com/l.i.s.a.c.h.u">Instagram</a>
            <a class="facebook" href="https://www.facebook.com/lisa.chubyr.1">Facebook</a>
            <a class="behance" href="https://www.behance.net/lisa4chu3062">Behance</a>
        </div>
    </footer>
    <section class="footer-bottom">
        2018 &copy; Lisa Chu & ItBay. All rights reserved.
    </section>
   </div>
    );
  }
}

export default App;
