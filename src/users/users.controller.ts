import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from './user.entyiy';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService){
    
  };

  @Get('')
  findAllUsers(): CreateUserDto[] {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findUserById(@Param('id') id: number): User{
   return this.usersService.findUserById(Number(id));
  }

  @Post('')
  createUser(@Body() body: CreateUserDto): User{
   
    return this.usersService.createUser(body);
  }
  

}
