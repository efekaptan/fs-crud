import Handlebars from 'handlebars';
import pluralize from 'pluralize';
import { readFile } from './file';
import { firstUpper } from './text';

Handlebars.registerHelper('plural', function (input) {
    return pluralize(input);
});

Handlebars.registerHelper('pluralLower', function (input) {
    return pluralize(input).toLocaleLowerCase();
});

Handlebars.registerHelper('lower', function (input) {
    return input.toLocaleLowerCase();
});

Handlebars.registerHelper('firstUpper', function (input) {
    return firstUpper(input);
});

Handlebars.registerHelper('javaType', function (input) {
    switch (input) {
        case 'ID':
        case 'Int':
            return 'int';
        case 'Date':
            return 'LocalDateTime';
        default:
            return input;
    }
});

Handlebars.registerHelper('hasDate', function (columns) {
    return columns.some((column) => column.type === 'Date');
});

Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '!=':
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case '!==':
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

export function render(path, data) {
    const source = readFile(path);
    const template = Handlebars.compile(source);
    const output = template(data);
    return output;
}
