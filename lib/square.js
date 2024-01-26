const Logo = require("./logo")


class Square extends Logo {
    constructor(text, textColor, shape, shapeColor){
        super(text, textColor, shape, shapeColor)
    }

    renderSquare(){
    return '<rect x="90" y="40" width="120" height="120"'
    }
}

module.exports = Square