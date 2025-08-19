import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenusController } from './menus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menus, MenusSchema } from './schemas/menu.schema';

@Module({
  imports : [MongooseModule.forFeature([{name : Menus.name, schema : MenusSchema}])],
  controllers: [MenusController],
  providers: [MenusService],
})
export class MenusModule {}
