import { Column, Entity } from "typeorm";
import { GeneralEntity } from "./general.entity";

@Entity({ name: 'auth' })
export class AuthEntity extends GeneralEntity {
    @Column({ unique: true, length: 100 })
    email: string;

    @Column({ length: 50 })
    contrasena: string;

    @Column({ length: 20 })
    rol: string;

    constructor() {
        super();
    }
}