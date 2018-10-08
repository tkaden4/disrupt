const isAlpha = e => (e >= 'A' && e <= 'Z') || (e >= 'a' && e <= 'z');

export const regionalize = text => {
    let chars = Array.from(text);
    let regional = chars.map((e, _) => isAlpha(e) ? `:regional_indicator_${e.toLowerCase()}:` : e);
    return regional.join("");
};

export default regionalize;