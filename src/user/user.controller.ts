import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'; // Import the 'bcrypt' package
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
    // TODO: Move this logic to the service
    // const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    // const newUser = { ...createUserDto, password: hashedPassword };
    return this.userService.create(createUserDto);
  }
}
