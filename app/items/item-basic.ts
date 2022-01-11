import {Item} from "../gilded-rose";

export class ItemBasic{
    name: string;
    sellIn: number;
    quality:number;

    // operador vaya disminuyendo dias
    sellInOperator = -1;
    //operador para la calidad de como ira variando
    qualityOperator = -1;

    constructor(name: string, sellIn:number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    process(): Item | boolean {
        if (!this.isValid()) {
            return false;
        }
        this.changeQualityOperator();
        this.quality = this.quality + this.qualityOperator;
        this.sellIn = this.sellIn + this.sellInOperator;
        this.checkQuality();
        return <Item>{
            name: this.name,
            quality: this.quality,
            sellIn: this.sellIn
        }
    }

    changeQualityOperator() {
        if (this.sellIn <= 0) {
            // la calidad baja el doble rapida una vez vencido
            this.qualityOperator=-2;
        }
    }

    changeSellInOperator(){
        this.sellInOperator = -1;
    }

    checkQuality() {
        //En ningun item la calidad puede ser mayor a 50
        if (this.quality > 50) {
            this.quality = 50;
        }
        //la calidad nunca es negativa
        if (this.quality < 0) {
            this.quality = 0;
        }
    }

    //Para validar que sea un numero la calidad y
    isValid(): boolean {
        return typeof this.quality === 'number' && typeof this.sellIn === 'number' && Boolean(this.name);
    }

}