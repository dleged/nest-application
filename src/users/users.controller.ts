import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { User } from './user.entyiy';

@ApiTags('users')
@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService){
    
  };

  @ApiOkResponse({type: User,isArray: true})
  @ApiQuery({name: 'name',required: false})
  @Get('')
  findAllUsers(@Query('name') name?: string): CreateUserDto[] {
    return this.usersService.findAllUsers(name);
  }

  @ApiOkResponse({type: User,description: 'the user'})
  @ApiNotFoundResponse()
  @Get(':id')
  findUserById(@Param('id',ParseIntPipe) id: number): User{

   const user = this.usersService.findUserById(id);
   if(!user){
     throw new NotFoundException();
   }
   return user;
  }

  @ApiCreatedResponse({type: User,isArray: true})
  @ApiBadRequestResponse()
  @Post('')
  createUser(@Body() body: CreateUserDto): User{
    return this.usersService.createUser(body);
  }
  

}
