import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, buttonName) {
  const { total, next, operation } = obj;
  if (buttonName === 'AC') {
    return {
      total: '',
      next: '',
      operation: '',
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    if (obj.operation) {
      if (obj.next) {
        return { next: obj.next + buttonName };
      }
      return { next: buttonName };
    }
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return { next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { total: `${obj.total}.` };
    }
    return { total: '0.' };
  }
  if (buttonName === '+/-') {
    const newobj = {
      total: '',
      next: '',
      operation: buttonName,
    };

    if (isNumber(next) && isNumber(total)) {
      return {
        total: (-1 * parseFloat(total).toString()),
        next: (-1 * parseFloat(next).toString()),
        operation,
      };
    }
    if (isNumber(next)) {
      newobj.next = (-1 * parseFloat(next).toString());
    }

    if (isNumber(total)) {
      newobj.total = (-1 * parseFloat(total).toString());
    }

    return newobj;
  }
  if (buttonName === '=') {
    if (isNumber(total) && !isNumber(next)) {
      return {
        operation: buttonName,
      };
    }
    return {
      total: operate(total, next, operation),
      next: null,
      operation: '',
    };
  }

  return {
    total: next,
    next: null,
    operation: buttonName,
  };
}