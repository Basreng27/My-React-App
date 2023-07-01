import React, { Component, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoadingApp from "../components/LoadingApp";
// import "../scss/style.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={<LoadingApp />}>
          <Routes>
            <Route path="*" name="dashboard" element={<LayoutDefault />} />
          </Routes>
        </Suspense>
      </HashRouter>
    );
  }
}

const LayoutDefault = React.lazy(() => import("../layout/LayoutDefault"));

export default App;
