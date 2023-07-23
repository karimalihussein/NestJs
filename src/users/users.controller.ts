import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    index(): User[] {
        return this.usersService.findAll();
    }
    @Get(':id')
    show(@Param('id') id: string): User {
        return this.usersService.find(Number(id));
    }

    @Post()
    @ApiCreatedResponse({ type: User })
    store(@Body() body: CreateUserDto): User {
        return this.usersService.create(body)
    }
}
