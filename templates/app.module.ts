import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
{{#each entities}}
import { {{plural name}}Module } from './{{pluralLower name}}/{{pluralLower name}}.module';
{{/each}}

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    {{#each entities}}
    {{plural name}}Module,
{{/each}}   ],
})
export class AppModule { }