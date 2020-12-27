package {{serverPackageName}}.service;

import com.example.graphqldemo.pojo.{{name}};
import com.example.graphqldemo.repository.{{name}}Repository;
import com.example.graphqldemo.types.Add{{name}}Input;
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
        {{lower ../name}}.set{{firstUpper name}}(addCityInput.get{{firstUpper name}}());
        {{/unless}}
        {{/each}}
        
        return {{lower name}}Repository.save({{lower name}});
    }
}
