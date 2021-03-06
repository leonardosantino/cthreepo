import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

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