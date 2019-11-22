const countTickets = (tickets) => {
    // Code here!
    let obj = {
        red: 0, green: 0, blue: 0
    };
    tickets.forEach(e => {
        if (e in obj) {
            obj[e]++;
        }
        console.log(e);
    });
    return obj;
}

const bestOdds = (tickets, raffleEntries) => {
    // Code here!
    let obj = countTickets(tickets);
    let oddc = [];
    for (let p in raffleEntries) {
        oddc.push([p, obj[p] / raffleEntries[p]]);
    }
    oddc.sort(function (a, b) {
        return b[1] - a[1];
    });

    return `You have the best odds of winning the ${oddc[0][0]} raffle.`


}