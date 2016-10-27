import {autoinject, computedFrom} from 'aurelia-framework';
import {Risk, RiskService} from './backend/riskservice';

enum Modes {
  View,
  Edit
}

@autoinject
export class RiskForm {
  routeConfig;
  riskId: number;
  mode: Modes;
  risk: Risk;
  loading: boolean = true;

  constructor(private riskService: RiskService) {
    this.mode = Modes.View;
  }

  activate(params, routeConfig): void {
    this.routeConfig = routeConfig;
    this.riskId = <number> params.id;
    this.loadRisk();
  }

  created() {
    this.loadRisk();
  }

  loadRisk() {
    this.loading = true;
    this.riskService.get(this.riskId).then((risk: Risk) => {
      this.risk = risk;
      this.loading = false;
    })
    .catch( (e) => {
      console.error(e);
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
