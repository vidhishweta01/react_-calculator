import React from 'react';
import ButtonPanel from '../buttonPanel';
import Display from '../Display';
import calculate from '../../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = (buttonName) => {
      // eslint-disable-next-line react/no-access-state-in-setstate
      const res = calculate(this.state, buttonName);
      this.setState({ total: res.total, next: res.next, operation: res.operation });
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display total={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}
export default App;
