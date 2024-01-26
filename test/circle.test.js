
const Circle = require('../lib/circle');

describe('Circle class', () => {
  it('renders a circle correctly', () => {
    const circle = new Circle('text', 'blue', 'circle', 'red');
    const newCircle = circle.renderCircle();

    expect(newCircle).toEqual('<circle cx="150" cy="100" r="80"');
  });
});
