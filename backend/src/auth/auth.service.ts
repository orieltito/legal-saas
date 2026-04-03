import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);

    return this.prisma.user.create({
      data: { email, password: hash },
    });
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) throw new Error('User not found');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error('Invalid password');

    return {
      token: jwt.sign({ userId: user.id }, 'SECRET', {
        expiresIn: '1d',
      }),
    };
  }
}