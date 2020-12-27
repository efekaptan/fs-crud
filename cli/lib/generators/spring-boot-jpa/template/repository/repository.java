package {{serverPackageName}}.repository;

import com.example.graphqldemo.pojo.{{name}};
import org.springframework.data.repository.CrudRepository;

public interface {{name}}Repository extends CrudRepository<{{name}}, Integer> {
}
