@customElement('car-picture-header')
class CarPictureHeader extends Polymer.Element {
  @property()
  pageTitle: string;

  @property()
  pictureUrl: string;

  @observe('pictureUrl')
  changePictureUrl(url: string) {
    this.$.pictureContainer.style.backgroundImage = `url(${url})`;
  }
}