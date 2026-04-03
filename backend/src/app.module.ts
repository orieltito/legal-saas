import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { ClientController } from './clients/client.controller';
import { ClientService } from './clients/client.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  controllers: [AuthController, ClientController],
  providers: [AuthService, ClientService, PrismaService],
})
export class AppModule {}