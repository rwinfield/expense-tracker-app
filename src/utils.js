export function dollarSign(amount) {
    if (amount >= 0) {
        return(`$${Number(amount).toFixed(2)}`);
    }
    else {
        return (`-$${Number(-1 * amount).toFixed(2)}`)
    }
}