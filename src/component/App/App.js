import React from 'react';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
import calculate from '../../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',  // eslint-disable-line
    };
  }

  handleClick = (buttonName) => {
    this.setState((prevState) => calculate(prevState, buttonName));
  };

  render() {
    const { total, next } = this.state;
    return (
      <>
        <Display total={total} next={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
export default App;
