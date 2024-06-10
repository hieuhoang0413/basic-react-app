import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyComponent name="John">
          <p>This is a child element</p>
        </MyComponent>
      </div>
    );
  }
}

export default App;
