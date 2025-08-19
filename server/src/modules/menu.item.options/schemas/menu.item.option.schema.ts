import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { MenuItems } from "src/modules/menu.items/schemas/menu.item.schema";

export type MenuItemOptionsDocument = HydratedDocument<MenuItemOptions>;

Schema({ timestamps: true })
export class MenuItemOptions {

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: MenuItems.name })
    menu_item: mongoose.Schema.Types.ObjectId;

    @Prop()
    title : string;

    @Prop()
    additional_price : string;

    @Prop()
    optional_description : string;

}

export const MenuItemOptionsSchema = SchemaFactory.createForClass(MenuItemOptions);
