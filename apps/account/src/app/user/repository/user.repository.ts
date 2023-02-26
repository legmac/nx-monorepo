import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserEntity } from '../entitys/user.emtity';
import { User } from '../modules/user.model';

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async createUser(user: UserEntity) {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findUser(email: string){
    return this.userModel.findOne({ email:email }).exec();
  }

  async deleteUser(email: string){
    return this.userModel.deleteOne({ email:email }).exec();
  }
}
