import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    private readonly users = [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Alice Caeiro',
        },
        {
            id: 3,
            name: 'Who Knows',
        },
        {
            id: 4,
            name: 'Another One',
        }
    ]

    findAll(): any[] {
        return this.users;
    }

    find(id: number): any {
        return this.users.find(user => user.id === id);
    }

    create(createUserDto: CreateUserDto): any {
        const user = { id: this.users.length + 1, ...createUserDto}
        this.users.push(user);
        return user;
    }

    update(id: number, data: any): any {
        const user = this.find(id);
        const index = this.users.indexOf(user);
        this.users[index] = data;
        return data;
    }

    delete(id: number): any[] {
        const user = this.find(id);
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        return this.users;
    }
}
