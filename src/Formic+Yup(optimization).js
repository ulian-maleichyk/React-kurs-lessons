import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup'

// https://github.com/jquense/yup
// https://formik.org/docs/overview

// onChange={formik.handleChange}       слудкує завжди 
// onBlur={formik.handleBlur}           слідкує після того як знятий фокус

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props)
    return(
        <>
             <label htmlFor={props.name}>{label}</label>
             <input {...props} {...field}/>
             {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
             ) : null}
        </>
    )
}

const MyCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type: 'checkbox'})
    return(
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

const CustomForm = () => {

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
                    .min(3, 'мынымум 3 символи')
                    .required('Обовязкове поле'),
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
        onSubmit = {values => console.log(JSON.stringify(values, null, 2))} 
        >
            <Form className="form" >
            <h2>Отправить пожертвование</h2> 
            <MyTextInput
                label='Ваше имя'
                id="name"
                name="name"
                type="text"
            />
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
            <ErrorMessage className='error' name='amount' component='div'/>
            <label htmlFor="currency">Валюта</label>
            <Field
                id="currency"
                name="currency"
                as='select'>
               <ErrorMessage className='error' name='currency' component='div'/>
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </Field>
            <label htmlFor="text">Ваше сообщение</label>
            <Field
                id="text"
                name="text"
                as = 'textarea'
            />
            <ErrorMessage className='error' name='text' component='div'/>
            <MyCheckBox name="terms">
                Соглашаетесь с политикой конфиденциальности?
            </MyCheckBox>
            <button type="submit">Отправить</button>
        </Form>
    </Formik>
    )
}

export default CustomForm;