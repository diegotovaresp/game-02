import {ItemBasic} from "./item-basic";

export  class AgedBrie extends ItemBasic{
    constructor(name: string, sellIn:number, quality: number) {
        super(name,sellIn,quality);
    }

    changeQualityOperator() {
            this.qualityOperator = 1;
    }
}