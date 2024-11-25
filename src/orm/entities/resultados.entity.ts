import { Column, Entity } from "typeorm";
import { GeneralEntity } from "./general.entity";

@Entity({ name: 'test' })
export class TestEntity extends GeneralEntity {
    @Column({ type: 'text' })
    resultados_test: string;

    constructor() {
        super();
    }
}