import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    index(): any {
        return [{ id: 1, name: 'John Doe'}];
    }
    @Get(':id')
    show(@Param('id') id: number): any {
        return { id, name: 'John Doe'};
    }
}
