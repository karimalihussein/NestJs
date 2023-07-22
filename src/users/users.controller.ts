import { Controller, Delete, Get, Post, Put, Delete } from '@nestjs/common';

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
    store(): string {
        return 'This action adds a new user';
    }

    @Get(':id')
    show(): string {
        return 'This action returns a specific user';
    }

    @Put(':id')
    update(): string {
        return 'This action updates a specific user';
    }

    @Delete(':id')
    destroy(): string {
        return 'This action removes a specific user';
    }

}