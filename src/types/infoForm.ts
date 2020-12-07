import * as yup from 'yup';

export const GeneralStepSchema = yup.object({
    username: yup.string().required(),
    gender:  yup.string().required().default('male'),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    birthDate: yup.string().required()
});

export type IGeneralStep = yup.InferType<typeof GeneralStepSchema>

export const ContactsStepSchema = yup.object({
    email: yup.string().required(),
    phoneNumber:  yup.string().required(),
    website: yup.string().required(),
    aboutMe: yup.string().required()
});

export type IContactsStep = yup.InferType<typeof ContactsStepSchema>

export const AddressStepSchema = yup.object({
    address: yup.string().required(),
    country:  yup.string().required(),
    city: yup.string().required(),
    zip: yup.string().required()
});

export type IAddressStep = yup.InferType<typeof AddressStepSchema>
