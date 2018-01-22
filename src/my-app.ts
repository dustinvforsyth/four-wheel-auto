@customElement('my-app')
class MyApp extends TitaniumProviderMixin
(TitaniumDependencyResolverMixin(Polymer.Element)) {
  @property({notify: true})
  page: string;

  @property()
  routeData: any;

  @property()
  route: any;

  @listen('tap', 'drawerButton')
  drawerButtonTap() {
    this.$.drawer.toggle();
  }

  @listen('click', 'logoButton')
  goToLandingPage() {
    this.page = 'landing';
  }

  @observe('page')
  pageChanged(page: string) {
    this.set('route.path', `/${page}/`);
    this.$.drawer.close();
  }

  @observe('routeData.page')
  routePageChanged(page: string) {
    if (!page) {
      this.page = 'landing';
      return;
    }
    this.page = page;
  }
}