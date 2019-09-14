import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContainerComponent extends Component {
  @tracked count=0;
  
  @action
  addOne(amountToAdd) {
    this.count = this.count + amountToAdd
  }
}
