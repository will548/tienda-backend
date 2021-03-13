import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Clientes } from "./clientes";


@Entity()
export class Sellos {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: Date;

    @Column()
    codigo: string;

    @Column()
    mililitros: number;

    @Column()
    saldo: number;

    @Column()
    envase: string;

    @Column()
    cantidad: number;

    @Column()
    refill: boolean;

    @Column()
    estado: boolean;

    @ManyToOne(() => Clientes, cliente => cliente.sellos)
    @JoinColumn({ name: "cliente_id" })
    cliente: Clientes;

}