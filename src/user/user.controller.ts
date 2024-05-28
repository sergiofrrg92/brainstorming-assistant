import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} user`;
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return this.userService.create(createUserDto);
  }
}
