import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users";

@Entity()
export class Sedes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pseudonimo: string;

    @Column()
    direccion: string;

    @Column()
    ciudad: string;

    @Column()
    telefono: string;

}