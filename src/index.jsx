// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <h1>Hello, world!!</h1>,
//   document.getElementById('root')
// )

import React from 'react';
import { render } from 'react-dom';
class App extends React.Component {
  //super キーワードは、オブジェクトの親の関数を呼び出すために使用できます。
  constructor(props) {
    super(props)
    console.log(props);
    this.state = {message: 'something'}
  }

  onChange(e) {
    this.setState({message: e.target.value})
  }

  render() {
    // return <p>Hello React !!</p>;
    return (
      <div>
        <input type="text" onChange={this.onChange.bind(this)} />
        {/* bind(this)でnewされてthis.setStateでセッターが呼ばれる */}
        <p>{this.state.message}</p>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));