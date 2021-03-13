import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    documento: string;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    address: string;

    @Column({
        unique: true
    })
    user: string;

    @Column()
    password: string;

    @Column()
    image: string;
    

}