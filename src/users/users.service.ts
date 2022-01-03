import { Injectable } from '@nestjs/common';
import { User } from './user.entyiy';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [{id: 0,name: 'yimu'},{id: 1,name: 'yimu'},{id: 2,name: 'Dution'}];

  findAllUsers(name?: string): User[] {
    if(name){
      return this.users.filter(user => user.name === name);
    }
    return this.users;
  }

  findUserById(id: number): User{
    return this.users.find(user => user.id === id);
  }

  createUser(createUserDto: CreateUserDto){
    const newUser = {id: Date.now(), name: createUserDto.name};
    this.users.push(newUser);
    return newUser;
  }

}