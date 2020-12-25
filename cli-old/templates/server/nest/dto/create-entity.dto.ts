import { ApiProperty } from '@nestjs/swagger';

export class Create{{name}}Dto {
    {{#each columns}}
    {{#unless isPrimary}}
    @ApiProperty()
    readonly {{name}} : {{type}}
    
    {{/unless}}
    {{/each}}
}