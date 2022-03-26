import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttr {
    email: string;
    password: string;
}

@Table({ tableName: 'users'})
export class User extends Model<User, UserCreationAttr> {

    @ApiProperty({ example: '1', description: 'Unique identifier' })
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @ApiProperty({ example: 'test@gmail.com', description: 'Email' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @ApiProperty({ example: '12345678', description: 'Password' })
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    password: string;

    @ApiProperty({ example: 'true', description: 'Banned or not' })
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    banned: boolean;

    @ApiProperty({ example: 'Spam', description: 'Ban reason' })
    @Column({ type: DataType.BOOLEAN, allowNull: true })
    banReason: string;
}