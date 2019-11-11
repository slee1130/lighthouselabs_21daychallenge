const chooseStations = (stations) => {
    let selctedStations = [];

    for (let station of stations) {
        const name = station[0];
        const capacity = station[1];
        const type = station[2];

        if (capacity >= 20) {
            if (type === "school" || type === "community centre") {
                selctedStations.push(name)
            }
        }
    }
    return selctedStations;
}
