const smartGarbage = (trash, bins) => {
    if (trash === "waste" || trash === "recycling" || trash === "compost") {
        bins[`${trash}`]++;
    }
    return bins
}