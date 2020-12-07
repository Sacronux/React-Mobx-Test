import { observable, action } from 'mobx';

import { IGeneralStep, IContactsStep, IAddressStep } from 'types/infoForm';

export class InfoForm {
  @observable generalStep: IGeneralStep = {} as IGeneralStep;
  @observable contactsStep: IContactsStep = {} as IContactsStep;
  @observable addressStep: IAddressStep = {} as IAddressStep;
  @observable stage = 1;
  @observable errorPath = '';
  @observable fields = {};

  @action clearForm() {
    Object.keys(this.generalStep).map(key => {
      this.generalStep[key] = '';
    });
    this.contactsStep = {} as IContactsStep;
    this.addressStep = {} as IAddressStep;
    this.errorPath = '';
    this.stage = 1;
  }
}
