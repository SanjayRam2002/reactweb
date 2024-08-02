import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Newcomp from './component/Newcomp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Indepth from './component/Indepth';

export class App extends Component {
  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
<Indepth></Indepth>
          <Routes>
            <Route exact path="/general" element={<Newcomp key="general" pageSize={this.pageSize} country="in" cateogory="general" />} />
            <Route exact path="/business" element={<Newcomp key="business" pageSize={this.pageSize} country="in" cateogory="business" />} />
            <Route exact path="/entertainment" element={<Newcomp key="entertainment" pageSize={this.pageSize} country="in" cateogory="entertainment" />} />
            <Route exact path="/technology" element={<Newcomp key="technology" pageSize={this.pageSize} country="in" cateogory="technology" />} />
            <Route exact path="/sports" element={<Newcomp key="sports" pageSize={this.pageSize} country="in" cateogory="sports" />} />
            <Route exact path="/health" element={<Newcomp key="health" pageSize={this.pageSize} country="in" cateogory="health" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
