
function nextSignificantValue(current) {
    if (current < 9) {
        return current+1;
    } else if (current < 20) {
        return (Math.floor(current/2)+1)*2;
    } else if (current < 30) {
        return (Math.floor(current/3)+1)*3;
    } else if (current < 180) {
        return (Math.floor(current/5)+1)*5;
    } else {
        return (Math.floor(current/20)+1)*20;
    }
}

function mappingForValue(current) {
    const ftlb = current / 1.3558;
    return [current, ftlb];
}

export function createFtlbNmMapping(fromValue, toValue) {
    var i = fromValue;
    var ret = Array();
    while (i < toValue) {
        ret.push(mappingForValue(i));
        i = nextSignificantValue(i)
    }
    if (i != toValue) ret.push(mappingForValue(toValue));
    return ret;
}
