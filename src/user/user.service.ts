import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>,
    ) {}

    create(createUserDto: any): string | PromiseLike<string> {
        return "This action adds a new user";
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
      }
}
    
