import { Controller, Delete, Get, Post, Put, Patch, Req, Param, Body } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/users')
export class UsersController {
    @Get()
    index(): string[] {
        return [
            'John Doe',
            'Omar Sy',
            'Lupita Nyong\'o',
            'Chadwick Boseman',
            'Daniel Kaluuya',
            'Letitia Wright',
            'Winston Duke',
            'Angela Bassett',
            'Forest Whitaker',
            'Andy Serkis',
            'Martin Freeman',
            'Michael B. Jordan',
            'Danai Gurira',
            'Sterling K. Brown',
            'Florence Kasumba',
            'John Kani',
            'Sydelle Noel',
            'Isaach De Bankolé',
            'Connie Chiume',
            'David S. Lee',
            'Nabiyah Be',
            'Stan Lee',
        ]
    }

    @Post()
    store(@Body() data: any) {
        return data;
    }

    @Get(':id')
    show(@Param('id') id: Number): string {
        return `This action returns a #${id} user`;
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