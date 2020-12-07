import { observable } from 'mobx';

import { InfoForm } from './infoForm';

export class RootStore {
    @observable InfoForm = new InfoForm();
}