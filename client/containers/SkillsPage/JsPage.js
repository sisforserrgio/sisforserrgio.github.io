import React from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux';

import MenuButton from '../../components/MenuButton/MenuButton.js';

import './JsPage.css';

class JsPage extends React.Component {
  render() {
    return (
      <div className="fizzBuzz">
        <Link to="menu">
          <MenuButton id={this.props.route.id} title={this.props.route.title} />
        </Link>
        <div className="fizzBuzz__main-text">
          <div className="fizzbuzz">
            <h1>1. FizzBuzz</h1>
            <pre>
                {`function fizzBuzz() {
                  let arr = [...Array(100).keys()].map(i => {
                    let num = i + 1;
                    switch (true) {
                      case (num%3 === 0 && num%5 === 0):
                      return ῾this is FizzBuzz $⦃num⦄῾;
                      case (num%3 === 0):
                      return ῾this is Fizz $⦃num⦄῾;
                      case (num%5 === 0):
                      return ῾this is Buzz $⦃num⦄῾;
                      default:
                      return ῾$⦃num⦄῾;
                    }
                  });
                }`}
            </pre>

            <h1>2. Замыкания</h1>
            <pre>
                {`function lol(x) {
                    return function lol2(y) {
                      return x + y;
                    };
                  };
                  console.log(lol(1)(2));
                `}
            </pre>

            <h1>2. this</h1>
            <pre>
                {`function lol(x) {
                    return function lol2(y) {
                      return x + y;
                    };
                  };
                  console.log(lol(1)(2));
                `}
            </pre>
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTimeOfDay: state.timeOfDay.time,
    store: state
  };
}

export default connect(mapStateToProps, null)(JsPage);
