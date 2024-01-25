const Logo = require("./logo")


class Triangle extends Logo {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor)
    }

    renderTriangle(){
    return '<polygon points="150, 18 244, 182 56, 182"'
    }
}

module.exports = Triangle