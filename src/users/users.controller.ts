import { Controller, Delete, Get, Post, Put, Patch, Req, Param, Body } from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';

@Controller('api/v1/users')
export class UsersController {

    private readonly users: UserEntity[] = [];

    @Get()
    index(): UserEntity[] 
    {
        return this.users;
    }

    @Post()
    store(@Body() CreateUserDto: CreateUserDto) 
    {
        const user : UserEntity = {id: uuid(),...CreateUserDto};
        this.users.push(user);
        return user;
    }

    @Get(':id')
    show(@Param('id') id: string) : UserEntity
    {
        return this.users.find(user => user.id === id);
    }


    @Patch(':id')
    update(@Param('id') id: Number): string {
        return `This action updates a #${id} user`;
    }


    @Delete(':id')
    destroy(@Param('id') id: Number): string {
        return `This action removes a #${id} user`;
    }


}