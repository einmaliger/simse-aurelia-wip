import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'SimSe';
    config.map([
      { route: ['', 'dashboard'], moduleId: 'dashboard' },
      { route: 'risk/:id', moduleId: 'risk-form', name: 'risk-form' }
    ]);

    this.router = router;
  }
}
