
// Use the value below whenever you need the value of Pi

const PI = 3.14159;

const sphereVolume = function (radius) {
    return (4 / 3) * PI * Math.pow(radius, 3);
};

const coneVolume = function (radius, height) {
    return (1 / 3) * PI * Math.pow(radius, 2) * height;
};

const prismVolume = function (height, width, depth) {
    return height * width * depth;
};

const totalVolume = function (solids) {
    total = 0;
    for (part of solids) {
        switch (part.type) {
            case "sphere":
                total += sphereVolume(part.radius);
                break;
            case "cone":
                total += coneVolume(part.radius, part.height);
                break;
            case "prism":
                total += prismVolume(part.height, part.width, part.depth);
                break;
        }
    }
    return total;
};