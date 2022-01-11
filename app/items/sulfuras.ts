import {ItemBasic} from "./item-basic";

export class Sulfuras extends ItemBasic{


    constructor(name: string, sellIn:number, quality: number) {
        super(name,sellIn,quality);
    }

    changeQualityOperator() {
        // nunca baja de calidad
        this.qualityOperator = 0;
    }
    changeSellInOperator(){
        // su fecha de venta no varia
        this.sellInOperator = 0;
    }

}