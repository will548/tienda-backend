import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Clientes } from "./clientes";


@Entity()
export class Redencions {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    codigo: string;

    @Column()
    mililitros: number;

    @Column()
    envase: string;

    @Column()
    upgrade: boolean;

    @Column()
    puntos: number;

    @ManyToOne(() => Clientes, cliente => cliente.redenciones)
    @JoinColumn({ name: "cliente_id" })
    cliente: Clientes;


}