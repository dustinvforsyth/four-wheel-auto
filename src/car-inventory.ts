@customElement('car-inventory')
class CarInventory extends Polymer.Element {
  @property({notify: true})
  inventory: any;
}