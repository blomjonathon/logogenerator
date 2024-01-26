
const Square = require('../lib/square');

describe('square class', () => {
  it('renders a square correctly', () => {
    const square = new Square('text', 'blue', 'square', 'red');
    const newSquare = square.renderSquare();

    expect(newSquare).toEqual('<rect x="90" y="40" width="120" height="120"');
  });
});
