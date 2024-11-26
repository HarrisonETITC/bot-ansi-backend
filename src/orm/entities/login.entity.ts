import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { GeneralEntity } from "./general.entity";
import { TestEntity } from "./test.entity";
import { InfoDemoEntity } from "./info_demo.entity";

@Entity({ name: 'login' })
export class LoginEntity extends GeneralEntity {
    @Column({ unique: true, length: 10 })
    numero_celular: string;

    @Column({ length: 255 })
    contrasena: string;


    @OneToOne(() => InfoDemoEntity, info => info.login)
    info_demo?: InfoDemoEntity;

    @OneToMany(() => TestEntity, test => test.login_id)
    tests?: TestEntity[];

    constructor() {
        super();
    }
}