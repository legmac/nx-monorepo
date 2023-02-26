import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {ConfigModule} from '@nestjs/config'
import {MongooseModule} from '@nestjs/mongoose'
import { getMongooConfig } from './config/mongoo.config';
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true, envFilePath: 'envs/.account.env'}),
    MongooseModule.forRootAsync(getMongooConfig()),
    UserModule,
    AuthModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
