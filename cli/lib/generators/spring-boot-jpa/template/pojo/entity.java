package {{serverPackageName}}.pojo;

import lombok.Data;

import javax.persistence.*;

{{#if (hasDate columns)}}
import java.time.LocalDateTime;
{{/if}}

@Entity
@Data
public class {{name}} {
    {{#each columns}}
    {{#if isPrimary}}
    @Id
    @GeneratedValue
    {{/if}}
    {{#unless isPrimary}}
    
    {{#if hasForeignKey}}
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "{{joinColumn}}", nullable = false)
    {{/if}}
    {{#unless hasForeignKey}}
    @Column
    {{/unless}}
    {{/unless}}
    private {{javaType type}} {{name}};
    {{/each}}
}
