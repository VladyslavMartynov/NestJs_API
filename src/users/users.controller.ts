import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./users.model";

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @ApiOperation({ summary: 'User creation' })
    @ApiResponse({ status: 200, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto): Promise<User> {
        return this.usersService.createUser(userDto);
    }

    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, type: [User] })
    @Get()
    getAll(): Promise<User[]> {
        return this.usersService.getAllUsers();
    }
}
