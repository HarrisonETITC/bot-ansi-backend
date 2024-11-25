import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { GeneralEntity } from "./general.entity";
import { LoginEntity } from "./login.entity";

@Entity({ name: 'test' })
export class TestEntity extends GeneralEntity {
    @Column({ type: 'text' })
    resultados_test: string;

    @Column({ length: 40 })
    login_id: string;

    @ManyToOne(() => LoginEntity, login => login.tests)
    @JoinColumn({ name: 'login_id' })
    login?: LoginEntity;

    constructor() {
        super();
    }
}