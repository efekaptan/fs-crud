package {{serverPackageName}}.input;

import lombok.Data;
{{#if (hasDate columns)}}
import java.time.LocalDateTime;
{{/if}}

@Data
public class Add{{name}}Input {
    {{#each columns}}
    {{#if hasForeignKey}}
    private {{javaType refType}} {{joinColumn}};
    {{/if}}
    {{#unless hasForeignKey}}
    {{#unless isPrimary}}
    private {{javaType type}} {{name}};
    {{/unless}}
    {{/unless}}
    {{/each}}
}
