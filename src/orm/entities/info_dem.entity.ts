import { Column, Entity } from "typeorm";
import { GeneralEntity } from "./general.entity";

@Entity({ name: 'informacion_demografica' })
export class InfoDemoEntity extends GeneralEntity {
    @Column({ type: 'tinyint', length: 3 })
    edad: number;

    @Column({ length: 10 })
    genero: string;

    @Column({ length: 200 })
    ocupacion: string;

    @Column({ length: 15 })
    estado_civil: string;

    @Column({ length: 50 })
    ciudad: string;

    @Column({ length: 30 })
    etnia: string;

    @Column({ length: 200 })
    email: string;

    @Column({ length: 200 })
    nombres: string;

    @Column({ length: 200 })
    apellidos: string;

    constructor() {
        super();
    }
}