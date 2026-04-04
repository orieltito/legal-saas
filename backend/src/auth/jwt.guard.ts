import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export class JwtGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const auth = request.headers.authorization;

    if (!auth) return false;

    const token = auth.split(' ')[1];

    try {
      const decoded: any = jwt.verify(token, 'SECRET');
      request.user = decoded;
      return true;
    } catch {
      return false;
    }
  }
}