@customElement('car-inventory-list')
class CarInventoryList extends Polymer.Element {
  @property()
  inventory: any;

  getCars() {
    return this.inventory.cars;
  }
}