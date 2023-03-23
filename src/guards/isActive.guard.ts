import {CanActivate, ExecutionContext, Injectable, UnauthorizedException, ForbiddenException} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtUsersGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan",
      });
    }
    const bearer = authHeader.split(' ')[0];
    const token = authHeader.split(' ')[1];
    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan",
      });
    }
    let user: any;
    try {
      user = this.jwtService.verify(token, {secret:process.env.ACCESS_TOKEN_KEY});
    } catch (error) {
      throw new UnauthorizedException({
        message: "Foydalanuvchi avtorizatsiyadan o'tmagan",
      });
    }

    
    if(user.is_active){
      throw new ForbiddenException({
      message: "Foydalanuvchi avtorizatsiyadan o'tmagan"
      })
    }
    req.user = user;
    return true;
  }
}
