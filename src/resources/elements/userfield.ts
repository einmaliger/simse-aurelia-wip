import {autoinject, bindable, bindingMode} from 'aurelia-framework';
import {User, UserService} from '../../backend/userservice'

@autoinject
export class UserFieldCustomElement {
  @bindable({defaultBindingMode: bindingMode.twoWay}) id: number;
  @bindable readonly: boolean = false;

  loading: boolean = true;

  user: User;

  constructor(private userService: UserService) {}

  created() {
    if (this.id) {
      this.loadUser();
    }
  }

  idChanged() {
    this.loadUser();
  }

  loadUser() {
    this.loading = true;
    this.userService.get(this.id).then((user: User) => {
      this.user = user;
      this.loading = false;
    });
  }
}
