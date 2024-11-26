import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { GeneralEntity } from "./general.entity";
import { LoginEntity } from "./login.entity";

@Entity({ name: 'informacion_demografica' })
export class InfoDemoEntity extends GeneralEntity {
    @Column({ type: 'tinyint', nullable: true, })
    edad: number;

    @Column({ length: 10, nullable: true, default: null })
    genero: string;

    @Column({ length: 200, nullable: true })
    ocupacion: string;

    @Column({ length: 15, nullable: true })
    estado_civil: string;

    @Column({ length: 50, nullable: true })
    ciudad: string;

    @Column({ length: 30, nullable: true })
    etnia: string;

    @Column({ length: 200, nullable: true })
    email: string;

    @Column({ length: 200, nullable: true })
    nombres: string;

    @Column({ length: 200, nullable: true })
    apellidos: string;

    @Column({ length: 40, unique: true })
    login_id: string;

    @JoinColumn({ name: 'login_id' })
    @OneToOne(() => LoginEntity, login => login.info_demo)
    login?: LoginEntity;


    constructor() {
        super();
    }
}