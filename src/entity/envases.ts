import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categorias } from "./categorias";


@Entity()
export class Envases {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subcategoria: string;

    @Column()
    nombre: string;

    @Column()
    codigo: string;
    
    @Column()
    referencia: string;

    @Column()
    empaque: string;

    @ManyToOne(() => Categorias, categoria => categoria.envases)
    @JoinColumn({ name: "categoria_id" })
    categoria: Categorias;


}