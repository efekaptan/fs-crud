package {{serverPackageName}}.resolver;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
{{#each entities}}
import com.example.graphqldemo.pojo.{{name}};
{{/each}}
{{#each entities}}
import com.example.graphqldemo.repository.{{name}}Repository;
{{/each}}
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Query implements GraphQLQueryResolver {
    {{#each entities}}
    @Autowired
    {{name}}Repository {{lower name}}Repository;
    {{/each}}
    {{#each entities}}
    
    public Iterable<{{name}}> get{{plural name}}() {
        return {{lower name}}Repository.findAll();
    }
    {{/each}}
}
