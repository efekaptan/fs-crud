import { ApiPropertyOptional } from '@nestjs/swagger';

export class Search{{name}}Dto {
    @ApiPropertyOptional({ type: Number })
    readonly pageIndex?: number = 1;
}