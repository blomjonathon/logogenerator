
const Triangle = require('../lib/triangle');

describe('Triangle class', () => {
  it('renders a triangle correctly', () => {
    const triangle = new Triangle('text', 'blue', 'triangle', 'red');
    const newTriangle = triangle.renderTriangle();

    expect(newTriangle).toEqual('<polygon points="150, 18 244, 182 56, 182"');
  });
});
