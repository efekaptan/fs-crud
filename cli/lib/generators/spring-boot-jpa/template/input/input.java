package {{serverPackageName}}.input;

import lombok.Data;

import java.util.*;

@Data
public class Add{{name}}Input {
    {{#each columns}}
    {{#unless isPrimary}}
    private {{type}} {{name}};
    {{/unless}}
    {{/each}}
}
