export function firstUpper(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

export function getApplicationName(name) {
    const words = name.split(/-|\./);
    return words.reduce((prev, curr) => prev + firstUpper(curr), '');
}