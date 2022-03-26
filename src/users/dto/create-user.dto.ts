import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'user@gmail.com', description: 'Email' })
    readonly password: string;

    @ApiProperty({ example: 'password1234', description: 'Password' })
    readonly email: string;
}