const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./shapes/circle");
const Square = require("./shapes/square");
const Triangle = require("./shapes/triangle");

class Logo {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }
}
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo. (Must not be more than 3 characters)",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter text color:",
      },
      {
        type: "input",
        name: "shape",
        message: "Enter a shape for the logo",
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a shape color",
      },
  ])
  .then((response) => {
    fs.writeFile(
      "logo2.svg",
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${response.shape} fill="${response.shapeColor}"    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">SVG</text>
  </svg>`, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('File written successfully: user-info.txt');
    }
  });
})
.catch(error => {
  console.error('Error:', error);
});
