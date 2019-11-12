const whereCanIPark = (spots, vehicle) => {

    for (let y = 0; y < spots.length; y++) {
        for (let x = 0; x < spots[y].length - 1; x++) {

            const spot = spots[x][y];

            //console.log([x][y])

            if (vehicle === 'regular') {
                if (spot === 'R') {
                    return [y, x];
                }

            } else if (vehicle === 'small') {
                if (spot === 'R' || spot === 'S') {
                    return [y, x];
                }

            } else if (vehicle === 'motorcycle') {
                if (spot === 'R' || spot === 'S' || spot === 'M') {
                    return [y, x];
                }
            }

        }
    }
    return false;
};