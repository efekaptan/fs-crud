import Handlebars from 'handlebars';
import pluralize from 'pluralize';
import { readFile } from './file';

Handlebars.registerHelper('plural', function (input) {
    return pluralize(input);
});

Handlebars.registerHelper('pluralLower', function (input) {
    return pluralize(input).toLocaleLowerCase();
});

Handlebars.registerHelper('lower', function (input) {
    return input.toLocaleLowerCase();
});

export function render(path, data) {
    const source = readFile(path);
    const template = Handlebars.compile(source);
    const output = template(data);
    return output;
}
