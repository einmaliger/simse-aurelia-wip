import {autoinject, computedFrom} from 'aurelia-framework';
import {Risk, RiskService} from './backend/riskservice';

enum Modes {
  View,
  Edit
}

@autoinject
export class App {
  mode: Modes;
  risk: Risk;
  loading: boolean = true;

  constructor(private riskService: RiskService) {
    this.mode = Modes.View;
  }

  created() {
    this.loadRisk();
  }

  loadRisk() {
    this.loading = true;
    this.riskService.get(1).then((risk: Risk) => {
      this.risk = risk;
      this.loading = false;
    });
  }

  @computedFrom('mode')
  get viewmode() {
    return this.mode === Modes.View;
  }

  @computedFrom('risk')
  get riskOwner() {
    return 'Scott Meyer';
  }
}
