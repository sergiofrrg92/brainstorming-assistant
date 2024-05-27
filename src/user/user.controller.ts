import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}
    @Get(':id')
    findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<string> {
        console.log(createUserDto);
        return this.userService.create(createUserDto);
    }
}
