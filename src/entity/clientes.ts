import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Redencions } from "./redeciones";
import { Sellos } from "./sellos";


@Entity()
export class Clientes {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    documento: string;

    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @OneToMany(() => Sellos, sello => sello.cliente)
    sellos: Sellos[];

    @OneToMany(() => Redencions, red => red.cliente)
    redenciones: Redencions[];

}