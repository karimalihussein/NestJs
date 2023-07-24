import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    private readonly users: User[] = [
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

    findAll(name?: string): User[] {
        if (name) {
            return this.users.filter(user => user.name === name);
        }
        return this.users;
    }

    find(id: number): User {
        return this.users.find(user => user.id === id);
    }

    create(createUserDto: CreateUserDto): User {
        const user = { id: this.users.length + 1, ...createUserDto}
        this.users.push(user);
        return user;
    }

    update(id: number, data: any): User {
        const user = this.find(id);
        const index = this.users.indexOf(user);
        this.users[index] = data;
        return data;
    }

    delete(id: number): User[] {
        const user = this.find(id);
        const index = this.users.indexOf(user);
        this.users.splice(index, 1);
        return this.users;
    }
}
