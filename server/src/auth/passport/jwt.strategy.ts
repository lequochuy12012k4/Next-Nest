import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKeyProvider: (request, rawJwtToken, done) => {
                const secret = configService.get<string>('JWT_SECRET');
                done(null, secret);
            },
        });
    }

    async validate(payload: any) {
        return { _id: payload.sub, email: payload.email, name: payload.name };
    }
}