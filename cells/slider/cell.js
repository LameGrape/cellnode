function pushed(direction){
    console.log("Hello world!")
    var nextSpace = grid.at(direction)
    if(nextSpace.pushed || nextSpace.type == null){
        move(direction)
        nextSpace.pushed(direction)
    }
}