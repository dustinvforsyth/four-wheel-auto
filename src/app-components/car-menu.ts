@customElement('car-menu')
class CarMenu extends Polymer.Element {
  @property({notify: true})
  menuPage: string;

  @property()
  drawerMenu: boolean;
}