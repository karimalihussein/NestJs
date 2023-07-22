import { Controller, Get} from '@nestjs/common';

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
}