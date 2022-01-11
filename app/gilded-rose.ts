import {Decider} from "./decider";

export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        this.items = this.items.map(
            (item: Item) => (Decider.creaItem(item)).process()
        ).filter(Boolean)
            .map(i => <Item>i);
        return this.items;
    }
}
