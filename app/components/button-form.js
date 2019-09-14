import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ButtonFormComponent extends Component {
  @action
  localAction() {
    this.args.addOne(1);
  }
}
