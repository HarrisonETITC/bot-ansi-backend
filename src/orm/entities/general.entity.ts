import { BeforeInsert, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

export abstract class GeneralEntity {
    @PrimaryColumn({ 
        length: 40,
        unique: true
    })
    id: string;

    @BeforeInsert()
    setBeforeInsert(): void {
        this.id = uuidv4();
    }
}