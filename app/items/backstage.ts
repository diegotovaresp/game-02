import {ItemBasic} from "./item-basic";

export class Backstage extends ItemBasic{

    constructor(name: string, sellIn:number, quality: number) {
        super(name,sellIn,quality);
    }

    changeQualityOperator() {
        // segun las reglas del backstage
        if (this.sellIn <= 0) {
            this.qualityOperator = 0;
            this.quality = 0;
        }
        else if(this.sellIn <=5){
            this.qualityOperator = 3;
        }
        else if (this.sellIn <=10){
            this.qualityOperator = 2;
        } else{
            this.qualityOperator = 1;
        }
    }

}