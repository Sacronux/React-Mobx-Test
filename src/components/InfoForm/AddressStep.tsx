import React, { useEffect } from 'react';
import { useStore } from 'src/store/context';
import { observer } from 'mobx-react-lite';
import { AddressStepSchema } from 'types/infoForm';

const AddressStep = observer(() => {
    const store = useStore();

    const { InfoForm } = store;

    const FIELDS = {
        address: 'Address',
        country: 'Country',
        city: 'City',
        zip: 'Zip',
    };

    useEffect(() => {
        InfoForm.errorPath = '';
        InfoForm.fields = FIELDS;
    }, []);
    
    return (
        <div>
            <div>
                <p className='input-title'>{FIELDS.address}:</p>
                <input value={InfoForm.addressStep.address} onChange={e => {
                    InfoForm.addressStep.address = e.target.value;
                }}/>
            </div>
            <div>
                <p className='input-title'>{FIELDS.country}:</p>
                <input value={InfoForm.addressStep.country} onChange={e => InfoForm.addressStep.country = e.target.value}/>   
            </div>
            <div>
                <p className='input-title'>{FIELDS.city}:</p>
                <input value={InfoForm.addressStep.city} onChange={e => InfoForm.addressStep.city = e.target.value}/> 
            </div>
            <div>
                <p className='input-title'>{FIELDS.zip}:</p>
                <input value={InfoForm.addressStep.zip} onChange={e => InfoForm.addressStep.zip = e.target.value}/>
            </div>
            <button className='btn submit-btn' onClick={() => {
                AddressStepSchema.validate(InfoForm.addressStep)
                .then(() => {
                    const result = {
                        General: {
                            ...InfoForm.generalStep
                        },
                        Contacts: {
                            ...InfoForm.contactsStep
                        },
                        Address: {
                            ...InfoForm.addressStep
                        }
                    };
                    console.log(result);
                })
                .catch(err => {
                    InfoForm.errorPath = err.path;
                });
            }}>Confirm</button>
        </div>
    );
});

export default AddressStep;