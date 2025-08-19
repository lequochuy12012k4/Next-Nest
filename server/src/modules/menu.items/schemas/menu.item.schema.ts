import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Menus } from "src/modules/menus/schemas/menu.schema";

export type MenuItemDocument = HydratedDocument<MenuItems>;

Schema({ timestamps: true })
export class MenuItems {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Menus.name })
    menu: mongoose.Schema.Types.ObjectId;

    @Prop()
    title : string;

    @Prop()
    description : string;

    @Prop()
    base_price : string;

    @Prop()
    image : string;
}

export const MenuItemsSchema = SchemaFactory.createForClass(MenuItems);
