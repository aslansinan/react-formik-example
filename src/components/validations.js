import * as yup from 'yup'

const validations = yup.object().shape({
    email: yup.string().email("Geçerli bir email giriniz.").required("zorunlu alan"),
    password : yup.string().min(5,"parolanız en az 5 karekter olmalidir").required("zorunlu alan"),
    passwordConfirm: yup.string().oneOf([yup.ref('password')],"parolalar uyuşmuyor").required("zorunlu alan")
  });

  export default validations;