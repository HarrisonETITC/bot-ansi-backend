import { BeforeInsert, PrimaryColumn } from "typeorm";

export abstract class GeneralEntity {
    @PrimaryColumn({ 
        type: 'bigint'
    })
    id: number;

    @BeforeInsert()
    setBeforeInsert(): void {
        this.id = Date.now();
    }
}