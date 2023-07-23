import { Controller, Delete, Get, Post, Put, Patch, Req, Param, Body, HttpCode, HttpStatus, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('api/v1/users')
export class UsersController {

    private readonly users: UserEntity[] = [];

    @Get()
    @HttpCode(HttpStatus.OK)
    index(): UserEntity[] {
        return this.users;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    store(@Body(ValidationPipe) CreateUserDto: CreateUserDto) {
        const user: UserEntity = { id: uuid(), ...CreateUserDto };
        this.users.push(user);
        return user;
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    show(@Param('id', ParseUUIDPipe) id): UserEntity {
        return this.users.find(user => user.id === id);
    }


    @Patch(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    update(@Param('id', ParseUUIDPipe) id: string, @Body(ValidationPipe) updateUserDto: UpdateUserDto): UserEntity {
        const user = this.users.find(user => user.id === id);
        Object.assign(user, updateUserDto);
        return user;
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    destroy(@Param('id', ParseUUIDPipe) id: string): void {
        const userIndex = this.users.findIndex(user => user.id === id);
        this.users.splice(userIndex, 1);
    }

}