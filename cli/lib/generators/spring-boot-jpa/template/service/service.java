package {{serverPackageName}}.service;

import {{serverPackageName}}.pojo.{{name}};
{{#each columns}}
{{#if hasForeignKey}}
import {{../serverPackageName}}.pojo.{{type}};
{{/if}}
{{/each}}
import {{serverPackageName}}.repository.{{name}}Repository;
{{#each columns}}
{{#if hasForeignKey}}
import {{../serverPackageName}}.repository.{{type}}Repository;
{{/if}}
{{/each}}
import {{serverPackageName}}.input.Add{{name}}Input;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class {{name}}Service {
    @Autowired
    {{name}}Repository {{lower name}}Repository;
    {{#each columns}}
    {{#if hasForeignKey}}
    @Autowired
    {{type}}Repository {{lower name}}Repository;
    {{/if}}
    {{/each}}

    public {{name}} new{{name}}(Add{{name}}Input add{{name}}Input) throws Exception {
        {{name}} {{lower name}} = new {{name}}();
        {{#each columns}}
        {{#if hasForeignKey}}
        {{type}} {{name}} = {{name}}Repository.findById(add{{../name}}Input.get{{type}}Id())
                .orElseThrow(() -> new Exception("{{type}} be couldn't found"));
        {{lower ../name}}.set{{firstUpper name}}({{name}});
        {{/if}}
        {{#unless hasForeignKey}}
        {{#unless isPrimary}}
        {{lower ../name}}.set{{firstUpper name}}(add{{../name}}Input.get{{firstUpper name}}());
        {{/unless}}
        {{/unless}}
        {{/each}}
        
        return {{lower name}}Repository.save({{lower name}});
    }
}
