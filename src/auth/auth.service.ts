import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (user && user.password !== password) {
      throw new UnauthorizedException();
    } else {
      // Disabling line, password is being stripped
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      const payload = { email: result.email, sub: result.id };

      const token = await this.jwtService.signAsync(payload);
      return { ...result, token: token };
    }
  }
}
