package {{serverPackageName}}.resolver;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
{{#each entities}}
import {{../serverPackageName}}.pojo.{{name}};
{{/each}}
{{#each entities}}
import {{../serverPackageName}}.service.{{name}}Service;
{{/each}}
{{#each entities}}
import {{../serverPackageName}}.input.Add{{name}}Input;
{{/each}}
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Mutation implements GraphQLMutationResolver {
    {{#each entities}}
    @Autowired
    {{name}}Service {{lower name}}Service;
    {{/each}}
    {{#each entities}}
    
    public {{name}} new{{name}}(Add{{name}}Input add{{name}}Input) throws Exception {
        return {{lower name}}Service.new{{name}}(add{{name}}Input);
    }
    {{/each}}
}
