import React, { useEffect } from 'react';

import { useStore } from 'src/store/context';
import { observer } from 'mobx-react-lite';
import { ContactsStepSchema } from 'types/infoForm';

const ContactsStep = observer(() => {
    const store = useStore();

    const { InfoForm } = store;

    const FIELDS = {
        email: 'E-mail',
        phoneNumber: 'Phone Number',
        website: 'Website',
        aboutMe: 'About Me'
    };

    useEffect(() => {
        InfoForm.errorPath = '';
        InfoForm.fields = FIELDS;
    }, []);
    
    return (
        <div>
            <div>
                <p className='input-title'>{FIELDS.email}:</p>
                <input value={InfoForm.contactsStep.email} onChange={e => {
                    InfoForm.contactsStep.email = e.target.value;
                }}/>
            </div>
            <div>
                <p className='input-title'>{FIELDS.phoneNumber}:</p>
                <input value={InfoForm.contactsStep.phoneNumber} onChange={e => InfoForm.contactsStep.phoneNumber = e.target.value}/> 
            </div>
            <div>
                <p className='input-title'>{FIELDS.website}:</p>
                <input value={InfoForm.contactsStep.website} onChange={e => InfoForm.contactsStep.website = e.target.value}/>   
            </div>
            <div>
                <p className='input-title'>{FIELDS.aboutMe}:</p>
                <input value={InfoForm.contactsStep.aboutMe} onChange={e => InfoForm.contactsStep.aboutMe = e.target.value}/>
            </div>
            <button className='btn submit-btn' onClick={() => {
                ContactsStepSchema.validate(InfoForm.contactsStep)
                .then(() => InfoForm.stage += 1)
                .catch(err => {
                    InfoForm.errorPath = err.path;
                });
            }}>Next</button>
        </div>
    );
});

export default ContactsStep;