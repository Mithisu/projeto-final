import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Collaborator } from './collaborator.entity';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {
  constructor(private collaborator: Repository<Collaborator>) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.collaborator.findOne({where: {email}});
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    
    return result;
  }
}