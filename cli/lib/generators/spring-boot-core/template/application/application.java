package {{serverPackageName}};

import com.coxautodev.graphql.tools.ObjectMapperConfigurerContext;
import com.coxautodev.graphql.tools.SchemaParserOptions;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import graphql.servlet.ObjectMapperConfigurer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class {{applicationName}}Application {

    public static void main(String[] args) {
        SpringApplication.run({{applicationName}}Application.class, args);
    }

    @Bean
    ObjectMapperConfigurer objectMapperConfigurer() {
        return (ObjectMapper mapper) -> mapper.registerModule(new JavaTimeModule());
    }

    @Bean
    SchemaParserOptions schemaParserOptions() {
        return SchemaParserOptions.newOptions()
                .objectMapperConfigurer((ObjectMapper mapper, ObjectMapperConfigurerContext context) -> mapper.registerModule(new JavaTimeModule()))
                .build();
    }
}
