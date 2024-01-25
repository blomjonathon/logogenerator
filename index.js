const inquirer = require("inquirer");
const fs = require("fs");
const Circle = require("./shapes/circle");
const Square = require("./shapes/square");
const Triangle = require("./shapes/triangle");

const shapeOptions = ['circle', 'triangle', 'square']

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
      type: "list",
      name: "shape",
      message: "Enter a shape for the logo",
      choices: shapeOptions
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a color for the shape",
    },
  ])
  .then((response) => {

    const newCircle = new Circle(response.text, response.textColor, response.shape, response.shapeColor)
    const newTriangle = new Triangle(response.text, response.textColor, response.shape, response.shapeColor)
    const newSquare = new Square(response.text, response.textColor, response.shape, response.shapeColor)

    let newShape

    if(response.shape === 'circle') {
      newShape = newCircle.renderCircle()
    } else if (response.shape === 'triangle'){
      newShape = newTriangle.renderTriangle()
    } else if (response.shape === 'square'){
      newShape = newSquare.renderSquare()
    } 
  
    fs.writeFile(
      "logo2.svg",
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${newShape} fill="${response.shapeColor}" />    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textColor}">${response.text}</text>
  </svg>`,
      (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        } else {
          console.log("File written successfully");
        }
      }
    );
  })
  .catch((error) => {
    console.error("Error:", error);
  });