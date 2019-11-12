const checkAir = (samples, threshold) => {
    if ((samples.filter(sample => sample == 'dirty').length / samples.length) < threshold) {
        return 'Clean'
    } else return 'Polluted'
}
