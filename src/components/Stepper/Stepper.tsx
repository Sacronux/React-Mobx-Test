import React from 'react';
import * as yup from 'yup';

import './Stepper.scss';

import { useStore } from 'src/store/context';

interface IStepperProps {
    total: number;
    current: number;
    schemeByStage: any;
}

const Stepper: React.FC<IStepperProps> = ({ total = 1, current = 1, schemeByStage }) => {
    const store = useStore();
    const { InfoForm } = store;

    const actualTotal = current > total ? current : total;

    const currentForm = schemeByStage[current];

    const handleSelectStage = (val) => {
      if (InfoForm.stage >= val) {
        InfoForm.stage = val;
        return;
      }
      currentForm.schema.validate(currentForm.state)
      .then(() => 
        InfoForm.stage = val
      )
      .catch(err => 
        InfoForm.errorPath = err.path
      );
    };

    const createNode = val => {
        return current === val ? (
          <span className='item active' key={val}>
            {val}
          </span>
        ) : (
          <span onClick={() => handleSelectStage(val)} className='item' key={val}>
            {val}
          </span>
        );
    };

    return (
        <div className='stepper'>
          {Array(actualTotal)
            .fill(0)
            .map((_, idx) => idx + 1)
            .map(val => createNode(val))}
        </div>
    );   
};

export default Stepper;