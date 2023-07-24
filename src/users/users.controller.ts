import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    @ApiOkResponse({ type: User, isArray: true })
    @ApiQuery({ name: 'name', required: false })
    index(@Query('name') name: string): User[] {
        return this.usersService.findAll(name);
    }
    @Get(':id')
    @ApiOkResponse({ type: User })
    @ApiNotFoundResponse({ description: 'User not found' })
    show(@Param('id') id: string): User {
        return this.usersService.find(Number(id));
    }

    @Post()
    @ApiCreatedResponse({ type: User })
    store(@Body() body: CreateUserDto): User {
        return this.usersService.create(body)
    }
}
