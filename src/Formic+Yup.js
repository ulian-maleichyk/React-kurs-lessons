import { useFormik } from "formik";
import * as Yup from 'yup'

// https://github.com/jquense/yup
// https://formik.org/docs/overview

// onChange={formik.handleChange}       слудкує завжди 
// onBlur={formik.handleBlur}           слідкує після того як знятий фокус



const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
                email: '',
                amount: 0,
                currency: '',
                text: '',
                terms: false,
        },
        validationSchema: Yup.object({
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
        }),
        onSubmit: values => console.log(JSON.stringify(values, null, 2)),
        
    })


    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}       
                onBlur={formik.handleBlur}    

                // {...formik.getFieldProps('name')} 
                // то ж саме
                // value={formik.values.name}
                // onChange={formik.handleChange}       
                // onBlur={formik.handleBlur}            
            />
            {formik.errors.name && formik.touched.name ? <div className='error'>{formik.errors.name}</div> : null}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
             {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div> : null}
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.amount && formik.touched.amount ? <div className='error'>{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}>
                {formik.errors.currency && formik.touched.currency ? <div className='error'>{formik.errors.currency}</div> : null}
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {formik.errors.text && formik.touched.text ? <div className='error'>{formik.errors.text}</div> : null}
            <label className="checkbox">
                <input 
                name="terms" 
                type="checkbox"
                value={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur} />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className='error'>{formik.errors.terms}</div> : null}
            <button type="submit">Отправить</button>
        </form>
    )
}

export default Form;