import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainNavigation from "./component/navigation/mainNavigation";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

class App extends Component {
  state = {
    token: null,
    userId: null,
    tokenExpiration: null,
    hasError: false,
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }


  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <MainNavigation />
          <>
            <Routes>
              {this.state.hasError && (
                <Route
                  path="/home"
                  element={<Navigate to="/error" replace />}
                />
              )}
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" Component={Home} />
              <Route path="/error" Component={ErrorPage} />
            </Routes>
          </>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
