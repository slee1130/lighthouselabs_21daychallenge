const festivalColours = color0 => {
    const color1 = (color0 + 150) % 360;
    const color2 = (color0 + 210) % 360;
    return color1 < color2 ? [color1, color2] : [color2, color1];
}