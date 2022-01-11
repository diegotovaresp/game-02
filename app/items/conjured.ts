import {ItemBasic} from "./item-basic";

export class Conjured extends ItemBasic {

    constructor(name: string, sellIn:number, quality: number) {
        super(name,sellIn,quality);
    }

    changeQualityOperator() {
        this.qualityOperator = -2 ;
    }


}