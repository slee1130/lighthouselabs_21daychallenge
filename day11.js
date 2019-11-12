const busTimes = buses => {
    for (let dest in buses) {
        buses[dest] = (buses[dest].distance / buses[dest].speed)
    }
    return (buses);
};