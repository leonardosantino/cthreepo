import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class User {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: Date;

    @Column()
    email: string;

    @Column()
    password: string;
}