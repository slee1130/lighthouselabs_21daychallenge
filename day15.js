const finalPosition = (moves) => {
    // Code here!
    x = 0;
    y = 0;

    for (const move of moves) {
        switch (move) {
            case "north":
                y++;
                break;
            case "south":
                y--;
                break;
            case "east":
                x++;
                break;
            case "west":
                x--;
                break;
        }
    }


    return [x, y];
}