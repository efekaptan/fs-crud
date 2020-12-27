package {{serverPackageName}}.input;

import lombok.Data;

@Data
public class Add{{name}}Input {
    {{#each columns}}
    {{#unless isPrimary}}
    private {{type}} {{name}};
    {{/unless}}
    {{/each}}
}
