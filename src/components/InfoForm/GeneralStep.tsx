import React, { useEffect } from 'react';

import { useStore } from 'src/store/context';
import { observer } from 'mobx-react-lite';
import { GeneralStepSchema } from 'types/infoForm';
import RadioButton from 'src/components/Common/RadioButton';

const GeneralStep = observer(() => {
    const store = useStore();

    const { InfoForm } = store;

    const FIELDS = {
        username: 'Username',
        gender: 'Gender',
        firstName: 'First Name',
        lastName: 'Last Name',
        birthDate: 'Birth Date'
    };

    useEffect(() => {
        InfoForm.errorPath = '';
        InfoForm.fields = FIELDS;
    }, [InfoForm.clearForm]);
    
    return (
        <div>
            <div>
                <p className='input-title'>{FIELDS.username}:</p>
                <input value={InfoForm.generalStep.username} onChange={e => {
                    InfoForm.generalStep.username = e.target.value;
                }}/>
            </div>
            <div>
                <p className='input-title'>{FIELDS.gender}:</p>
                <div className='radiobutton-field' onClick={() => InfoForm.generalStep.gender = 'male'}>
                    <span>male:</span>
                    <RadioButton selected={InfoForm.generalStep.gender ? InfoForm.generalStep.gender === 'male' : true}/>
                </div>
                <div className='radiobutton-field' onClick={() => InfoForm.generalStep.gender = 'female'}>
                    <span>female:</span>
                    <RadioButton selected={InfoForm.generalStep.gender ? InfoForm.generalStep.gender === 'female' : false}/>
                </div>  
            </div>
            <div>
                <p className='input-title'>{FIELDS.firstName}:</p>
                <input value={InfoForm.generalStep.firstName} onChange={e => InfoForm.generalStep.firstName = e.target.value}/>   
            </div>
            <div>
                <p className='input-title'>{FIELDS.lastName}:</p>
                <input value={InfoForm.generalStep.lastName} onChange={e => InfoForm.generalStep.lastName = e.target.value}/>
            </div>
            <div>
                <p className='input-title'>{FIELDS.birthDate}:</p>
                <input value={InfoForm.generalStep.birthDate} type='date' onChange={e => InfoForm.generalStep.birthDate = e.target.value}/>
            </div>
            <button className='btn submit-btn' onClick={() => {
                GeneralStepSchema.validate(InfoForm.generalStep)
                .then(() => InfoForm.stage += 1)
                .catch(err => {
                    InfoForm.errorPath = err.path;
                });
            }}>Next</button>
        </div>
    );
});

export default GeneralStep;