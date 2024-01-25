const Logo = require("./logo")


class Circle extends Logo {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor)
    }

    renderCircle(){
    return '<circle cx="150" cy="100" r="80"'
    }
}

module.exports = Circle