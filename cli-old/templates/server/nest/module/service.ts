import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Create{{name}}Dto } from './dto/create-{{lower name}}.dto';
import { Search{{name}}Dto } from './dto/search-{{lower name}}.dto';
import { {{name}} } from './entity/{{lower name}}.entity';

@Injectable()
export class {{plural name}}Service {
  private readonly PAGE_SIZE = 10;

  constructor(
    @InjectRepository({{name}})
    private readonly {{pluralLower name}}Repository: Repository<{{name}}>
  ) { }

  async create(create{{name}}Dto: Create{{name}}Dto): Promise<{{name}}> {
    const {{lower name}} = create{{name}}Dto as {{name}};
    return this.{{pluralLower name}}Repository.save({{lower name}});
  }

  async findOne(id: number): Promise<{{name}}> {
    return this.{{pluralLower name}}Repository.findOne(id);
  }

  async findAll(search{{name}}Dto: Search{{name}}Dto): Promise<[{{name}}[], number]> {
    const { pageIndex } = search{{name}}Dto;
    const skipCount = this.PAGE_SIZE * (pageIndex - 1);

    const queryBuilder = this.{{pluralLower name}}Repository.createQueryBuilder();
    return queryBuilder
      .skip(skipCount)
      .take(this.PAGE_SIZE)
      .getManyAndCount();
  }
}