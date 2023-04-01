class Item {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
}

export const potion = new Item('potion', 10);
export const attackJem = new Item('attack jem', 1);
export const speedJem = new Item('speed jem', 1);
export const hpJem = new Item('hp jem', 1);
export const tent = new Item('tent', false);

export let itemArray = [potion, attackJem, speedJem, hpJem, tent];