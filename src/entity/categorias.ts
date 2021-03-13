import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Envases } from "./envases";


@Entity()
export class Categorias {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    imagen: string;


    @OneToMany(() => Envases, envase => envase.categoria)
    envases: Envases[];
}