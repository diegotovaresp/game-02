import {Item} from "./gilded-rose";
import {AgedBrie} from "./items/aged-brie";
import {Backstage} from "./items/backstage";
import {Sulfuras} from "./items/sulfuras";
import {Conjured} from "./items/conjured";
import {ItemBasic} from "./items/item-basic";

export class Decider{
    static creaItem(item: Item):ItemBasic{
        if (item){
            switch (item.name){
                case 'Aged Brie':
                    return new AgedBrie(item.name,item.sellIn,item.quality);
                case 'Backstage passes to a TAFKAL80ETC concert':
                    return new Backstage(item.name,item.sellIn,item.quality);
                case 'Sulfuras, Hand of Ragnaros':
                    // se construye con calidad 80 por ser Sulfura
                    return new Sulfuras(item.name,item.sellIn,80);
                case 'Conjured':
                    return new Conjured(item.name,item.sellIn,item.quality);
                default:
                    return new ItemBasic(item.name,item.sellIn,item.quality);

            }
        }else{
            return new ItemBasic("",0,0);
        }
    }
}