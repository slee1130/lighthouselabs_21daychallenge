const dynamicPricing = (numberOfPeople, distanceTraveled) => {
    let basePrice = 1 + distanceTraveled * 0.25;
    return numberOfPeople >= 30 ? `$${(0.25 + basePrice).toFixed(2)}` : `$${basePrice.toFixed(2)}`;
}