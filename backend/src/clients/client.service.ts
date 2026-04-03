import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.client.create({ data });
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  update(id: string, data: any) {
    return this.prisma.client.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.client.delete({ where: { id } });
  }
}