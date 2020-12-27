package {{serverPackageName}};

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class {{applicationName}}Application {

    public static void main(String[] args) {
        SpringApplication.run({{applicationName}}Application.class, args);
    }
}