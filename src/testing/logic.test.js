import calculate from '../logic/calculate';

describe('calculate functionality', () => {
  it('Button equal to AC return empty obj', () => {
    const k = calculate({ total: '1', next: '2', operation: '+' }, 'AC');
    expect(k).toStrictEqual({ total: '', next: '', operation: '' });
  });
  it('Button name equal to +/- return obj with next equal -1', () => {
    let l = calculate({ total: '1', next: '', operation: '' }, '+/-');
    expect(l).toStrictEqual({ total: '-1' });
    l = calculate({ total: '-1', next: '', operation: '' }, '+/-');
    expect(l).toStrictEqual({ total: '1' });
    l = calculate({ total: '', next: '-1', operation: '' }, '+/-');
    expect(l).toStrictEqual({ next: '1' });
    l = calculate({ total: '', next: '1', operation: '' }, '+/-');
    expect(l).toStrictEqual({ next: '-1' });
  });
  it('Button name equal to + return the sum of total and next', () => {
    const m = calculate({ total: '10', next: '22', operation: '+' }, '=');
    expect(m).toStrictEqual({ total: '32', next: null, operation: '' });
  });
  it('Button name equal to - return the difference of total and next', () => {
    const h = calculate({ total: '30', next: '22', operation: '-' }, '=');
    expect(h).toStrictEqual({ total: '8', next: null, operation: '' });
  });
  it('Button name equal to x return the product of total and next', () => {
    const j = calculate({ total: '30', next: '22', operation: 'X' }, '=');
    expect(j).toStrictEqual({ total: '660', next: null, operation: '' });
  });
  it('Button name equal to ÷ return the quotient of total and next returns error message if devide by zero', () => {
    let k = calculate({ total: '30', next: '2', operation: '÷' }, '=');
    expect(k).toStrictEqual({ total: '15', next: null, operation: '' });
    k = calculate({ total: '30', next: '0', operation: '÷' }, '=');
    expect(k).toStrictEqual({ total: 'error: cannot devide or mod by zero', next: null, operation: '' });
  });
  it('Button name equal to % return the percentage of total and next otherwise if next or total or operation are null then returns empty object ', () => {
    let k = calculate({ total: '30', next: '200', operation: '%' }, '=');
    expect(k).toStrictEqual({ total: '60', next: null, operation: '' });
    k = calculate({ total: '', next: '', operation: '%' }, '=');
    expect(k).toStrictEqual({});
    k = calculate({ total: '', next: '1', operation: '%' }, '=');
    expect(k).toStrictEqual({});
    k = calculate({ total: '1', next: '', operation: '' }, '=');
    expect(k).toStrictEqual({ });
  });
});
