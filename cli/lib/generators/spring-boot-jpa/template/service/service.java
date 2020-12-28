package {{serverPackageName}}.service;

import {{serverPackageName}}.pojo.{{name}};
import {{serverPackageName}}.repository.{{name}}Repository;
import {{serverPackageName}}.input.Add{{name}}Input;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class {{name}}Service {
    @Autowired
    {{name}}Repository {{lower name}}Repository;

    public {{name}} new{{name}}(Add{{name}}Input add{{name}}Input) {
        {{name}} {{lower name}} = new {{name}}();
        
        {{#each columns}}
        {{#unless isPrimary}}
        {{lower ../name}}.set{{firstUpper name}}(add{{../name}}Input.get{{firstUpper name}}());
        {{/unless}}
        {{/each}}
        
        return {{lower name}}Repository.save({{lower name}});
    }
}
