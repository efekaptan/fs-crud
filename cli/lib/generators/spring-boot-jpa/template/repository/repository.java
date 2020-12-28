package {{serverPackageName}}.repository;

import {{serverPackageName}}.pojo.{{name}};
import org.springframework.data.repository.CrudRepository;

public interface {{name}}Repository extends CrudRepository<{{name}}, Integer> {
}
