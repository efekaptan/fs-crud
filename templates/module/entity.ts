import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class {{name}} {
    {{#each columns}}
    {{#if isPrimary}}
    @PrimaryGeneratedColumn()
    {{/if}}
    @Column()
    @ApiProperty()
    {{name}} : {{type}}

    {{/each}}
}