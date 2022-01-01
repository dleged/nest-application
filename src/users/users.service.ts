import { Injectable } from '@nestjs/common';
import { User } from './user.entyiy';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [{id: 0,name: 'yimu'}];

  findAllUsers(): User[] {
    return this.users;
  }

  findUserById(user_id: number): User{
    console.log(user_id);
    return this.users.find(({id}) => user_id === id);
  }

  createUser(createUserDto: CreateUserDto){
    const newUser = {id: Date.now(), name: createUserDto.name};
    this.users.push(newUser);
    return newUser;
  }

}