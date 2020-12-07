import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import { useStore } from 'src/store/context';
import { observer } from 'mobx-react-lite';
import GeneralStep from './GeneralStep';
import ContactsStep from './ContactsStep';
import AddressStep from './AddressStep';
import Stepper from 'components/Stepper/Stepper';
import { GeneralStepSchema, ContactsStepSchema, AddressStepSchema } from 'types/infoForm';

const InfoForm = observer(() => {
    const store = useStore();

    const { InfoForm } = store;

    const schemeByStage = {
        1: {
            schema: GeneralStepSchema,
            component: GeneralStep,
            state: InfoForm.generalStep
        },
        2: {
            schema: ContactsStepSchema,
            component: ContactsStep,
            state: InfoForm.contactsStep
        },
        3: {
            schema: AddressStepSchema,
            component: AddressStep,
            state: InfoForm.addressStep
        }
    };

    const currentForm = schemeByStage[InfoForm.stage];

    const Display = currentForm.component;

    return (
        <Container>
            <Row>
                <Stepper total={3} current={InfoForm.stage} schemeByStage={schemeByStage} />
            </Row>
            <Row>
                {Display && <Display />}
            </Row>
            <Row>
                <Button onClick={() => {
                    InfoForm.clearForm();
                }}>Clear Form</Button>
            </Row>
            <Row>  
                <p className='error-text'>{InfoForm.errorPath && `Error: ${InfoForm.fields[InfoForm.errorPath]} field is required`}</p>  
            </Row>  
        </Container>
    );
});

export default InfoForm;