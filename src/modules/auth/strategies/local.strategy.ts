import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthEntity } from "src/orm/entities/auth.entity";
import { AuthService } from "src/services/auth/auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authManager: AuthService
    ) {
        super();
    }

    async validate(username: string, password: string): Promise<AuthEntity> {
        return await this.authManager.validateUser({ username, password });
    }
}
