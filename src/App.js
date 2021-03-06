import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div>
          <h1 className={'text-white mt-4'}>1Pako</h1>
        </div>
        <div className="d-flex justify-content-center h-100">

          <div className="card">

            <div className="card-header">

              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fab fa-facebook-square"/></span>
                <span><i className="fab fa-google-plus-square"/></span>
                <span><i className="fab fa-twitter-square"/></span>
              </div>
            </div>
            <div className="card-body">
              <form>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"/>
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="username"/>

                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"/>
                    </span>
                  </div>
                  <input type="password" className="form-control" placeholder="password"/>
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox"/>Remember Me
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn float-right login_btn"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
