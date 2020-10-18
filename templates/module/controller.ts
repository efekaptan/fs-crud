import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Create{{name}}Dto } from './dtos/create-{{lower name}}.dto';
import { Search{{name}}Dto } from './dtos/search-{{lower name}}.dto';
import { {{name}} } from './entities/{{lower name}}.entity';
import { {{plural name}}Service } from './{{pluralLower name}}.service';

@Controller('{{plural name}}')
@ApiTags('{{plural name}}')
export class {{plural name}}Controller {
    constructor(private readonly {{plural name}}Service: {{plural name}}Service) { }

    @Post()
    @ApiOperation({ summary: 'Create {{lower name}}' })
    @ApiResponse({ status: 200, description: 'The created {{lower name}}', type: {{name}} })
    async create(@Body() create{{name}}Dto: Create{{name}}Dto): Promise<{{name}}> {
        return this.{{plural name}}Service.create(create{{name}}Dto);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get {{lower name}}' })
    @ApiResponse({ status: 200, description: '{{name}}', type: {{name}} })
    @ApiParam({ name: 'id', type: Number })
    async findOne(@Param('id') id): Promise<{{name}}> {
        return this.{{plural name}}Service.findOne(id);
    }

    @Get()
    @ApiOperation({ summary: 'List {{plural name}}' })
    @ApiResponse({ status: 200, description: '{{name}} list', type: {{name}}, isArray: true })
    async findAll(@Query() search{{name}}Dto: Search{{name}}Dto): Promise<[{{name}}[], number]> {
        return this.{{plural name}}Service.findAll(search{{name}}Dto);
    }
}