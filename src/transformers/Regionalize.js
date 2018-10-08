const isAlpha = e => (e >= 'A' && e <= 'Z') || (e >= 'a' && e <= 'z');
const isNumeric = e => (e >= '0' && e <= '9');

export const regionalize = text => {
    let chars = Array.from(text);
    let regional = chars.map((e, _) => {
        if (isAlpha(e)) {
            return `:regional_indicator_${e.toLowerCase()}:`;
        } else if (isNumeric(e)) {
            switch (e) {
                case "0": return ":zero:";
                case "1": return ":one:";
                case "2": return ":two:";
                case "3": return ":three:";
                case "4": return ":four:";
                case "5": return ":five:";
                case "6": return ":six:";
                case "7": return ":seven:";
                case "8": return ":eight:";
                case "9": return ":nine:";
            }
        } else {
            return e;
        }

    });
    return regional.join(" ");
};

export default regionalize;