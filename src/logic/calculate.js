import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

let j = {
  total: '',
  next: '',
  operation: '',
};
/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:s      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    j = {
      total: '',
      next: '',
      operation: '',
    };
    return j;
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // If there is an operation, update next
    if (obj.operation) {
      if (obj.next) {
        j.next = obj.next + buttonName;
        return j;
      }
      j.next = buttonName;
      return j;
    }
    // If there is no operation, update next and clear the value
    if (j.next) {
      j.next = obj.next + buttonName;
      j.total = null;
      return j;
    }
    j.next = buttonName;
    j.total = null;
    return j;
  }

  if (buttonName === '.') {
    if (j.next) {
      if (j.next.includes('.')) {
        return j;
      }
      j.next = `${obj.next}.`;
      return j;
    }
    if (j.operation) {
      j.next = '0.';
      return j;
    }
    if (j.total) {
      if (j.total.includes('.')) {
        return {};
      }
      j.next = `${obj.total}.`;
      j.total = '';
      return j;
    }
    j.total = '0.';
    return j;
  }

  if (buttonName === '=') {
    if (j.next && j.operation && j.total) {
      const h = j;
      j = {
        total: '',
        next: '',
        operation: '',
      };
      j.total = operate(h.total, h.next, h.operation);
      return {
        total: operate(h.total, h.next, h.operation),
        next: null,
        operation: '',
      };
    }

    // '=' with no operation, nothing to do
    return {};
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return { next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (j.operation) {
    if (j.total && !(j.next)) {
      j.operation = buttonName;
      return j;
    }
    const r = j;
    j = {
      total: '',
      next: '',
      operation: '',
    };
    j.total = operate(r.total, r.next, r.operation);
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!obj.next) {
    j.operation = buttonName;
    return j;
  }
  j.total = obj.next;
  j.next = null;
  j.operation = buttonName;
  // save the operation and shift 'next' into 'total'
  return j;
}
