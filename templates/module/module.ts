import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { {{name}} } from './entities/workout.entity';
import { {{plural name}}Controller } from './{{pluralLower name}}.controller';
import { {{plural name}}Service } from './{{pluralLower name}}.service';

@Module({
    imports: [TypeOrmModule.forFeature([{{name}}])],
    controllers: [{{plural name}}Controller],
    providers: [{{plural name}}Service],
})
export class {{plural name}}Module { }