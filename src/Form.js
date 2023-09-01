

import { Form, Formik, Field, ErrorMessage,useField } from 'formik';
import * as Yup from 'yup'


const MyTextInput = ({label,...props}) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}



const MyCheckBox = ({children,...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'})
    return (
        <>
            <label className='checkbox'>
                <input type='checkbox' {...props} {...field}/>
                {children}
            </label>
            
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    )
}

// const validate = values => {
//     const errors = {};

//     if (!values.name) {
//         errors.name =  'Обов`язкове поле'
//     } else if (values.name.length < 3) {
//         errors.name = 'Мінімум 3 символа';
//     }

//     if (!values.email) {
//         errors.email = 'Обов`язкове поле'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//         errors.email = 'Неправильнф email адреса'
//     }

//     return errors
// }

const CustomForm = () => {

    // const formik = useFormik({
        
    //     validationSchema: Yup.object({
    //         name: Yup.string()
    //                 .min(2, 'Мінімум 2 символа!')
    //                 .required('Обовя`зкове поле!'),
    //          email: Yup.string()
    //                 .email('Неправильний email адреса')
    //                 .required('Обовя`зкове поле!'),    
    //         amount: Yup.number()
    //                 .min(5, 'Не менше 5')
    //                 .required('Обовя`зкове поле!'),
    //         currency:Yup.string().required('Виберіть валюту'),
    //         text: Yup.string()
    //                 .min(10, 'Не менше 10 символів'),
    //         terms: Yup.boolean()
    //                 .required('Необхідна згода!')
    //                 .oneOf([true], 'Необхідна згода!')


    //     }),
    //     onSubmit: values => console.log(JSON.stringify(values, null,2))
    // })
    

    return (

        <Formik
        initialValues = {{
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false,
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                    .min(2, 'Мінімум 2 символа!')
                    .required('Обовя`зкове поле!'),
             email: Yup.string()
                    .email('Неправильний email адреса')
                    .required('Обовя`зкове поле!'),    
            amount: Yup.number()
                    .min(5, 'Не менше 5')
                    .required('Обовя`зкове поле!'),
            currency:Yup.string().required('Виберіть валюту'),
            text: Yup.string()
                    .min(10, 'Не менше 10 символів'),
            terms: Yup.boolean()
                    .required('Необхідна згода!')
                    .oneOf([true], 'Необхідна згода!')
        })}
        onSubmit = {values => console.log(JSON.stringify(values, null,2))}

        >
            <Form className="form" >
                <h2>Отправить пожертвование</h2>
                <label htmlFor="name">Ваше имя</label>
           
                <MyTextInput
                    label='Ваше имя'
                    id="name"
                    name="name"
                    type="text"
                />
                <label htmlFor="email">Ваша почта</label>
                <MyTextInput
                    label='Ваша почта'
                    id="email"
                    name="email"
                    type="email"
                />
                <label htmlFor="amount">Количество</label>
                <Field
                    id="amount"
                    name="amount"
                    type="number"
                    />
                                    <ErrorMessage className = 'error' name='amount' component='div'/>
                                    
                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as='select'>
                   
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className = 'error' name='currency' component='div'/>
                <label htmlFor="text">Ваше сообщение</label>
                <Field 
                    id="text"
                    name="text"
                    as = 'textarea'
                />
                <ErrorMessage className = 'error' name='text' component='div'/>
                {/* <label className="checkbox">
                    <Field
                        name="terms"
                        type="checkbox" 
                        />
                        
                    Соглашаетесь с политикой конфиденциальности?
                </label>
                <ErrorMessage className = 'error' name='terms' component='div'/> */}
                    <MyCheckBox
                        name = 'terms'>
                        Соглашаетесь с политикой конфиденциальности?
                    </MyCheckBox>
                
                <button type="submit">Отправить</button>
            </Form>
        </Formik>
    )
}

export default CustomForm;