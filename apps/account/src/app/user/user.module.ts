import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './modules/user.model';
import { UserRepository } from './repository/user.repository';


@Module({
	imports: [MongooseModule.forFeature([
		{ name: User.name, schema: UserSchema }
	])],
	providers: [UserRepository],
	exports: [UserRepository],
})
export class UserModule {}