package {{serverPackageName}}.pojo;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class {{name}} {
    {{#each columns}}
    {{#if isPrimary}}
    @Id
    @GeneratedValue
    {{/if}}
    {{#unless isPrimary}}
    
    @Column
    {{/unless}}
    private {{type}} {{name}};
    {{/each}}
}
