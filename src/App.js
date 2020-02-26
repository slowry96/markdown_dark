import React, { Component } from 'react';

import MarkdownIt from 'markdown-it';

import './index.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rawMdText: "paste markdown here",
      convertedHtmlMd: ""
    }
  }

  updateState() {
    console.log('current state: ', this.state);
    this.setState ((prevState) => {
      return {convertedHtmlMd: prevState.rawMdText}
    });
  }

  render() {
    console.log(this)
    return (
      <React.Fragment>
        
        <section>
            <textarea id="getm" 
            onChange={this.updateState}
            value={this.state.rawMdText}/>
        </section>
        <section>
          <textarea id="convertedMarkDown"
          value={this.state.convertedHtmlMd}
          />
        </section>
      </React.Fragment>
    );
  }
    
}

export default App;
