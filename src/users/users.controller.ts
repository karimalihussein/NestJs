import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    @ApiOkResponse({ type: User, isArray: true })
    index(): User[] {
        return this.usersService.findAll();
    }
    @Get(':id')
    @ApiOkResponse({ type: User })
    show(@Param('id') id: string): User {
        return this.usersService.find(Number(id));
    }

    @Post()
    @ApiCreatedResponse({ type: User })
    store(@Body() body: CreateUserDto): User {
        return this.usersService.create(body)
    }
}
