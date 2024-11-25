import { Column } from "typeorm";
import { GeneralEntity } from "./general.entity";

export class LoginEntity extends GeneralEntity {
    @Column({unique: true, length: 10})
    numero_celular: string;
    
    constructor() {
        super();
    }
}