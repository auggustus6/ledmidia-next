import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as S from "./styles";
import Swal from "sweetalert2";

const phoneNumber = (phone: string) => {
  phone = phone.replace(/[^\d]/g, "");

  if (phone.length > 2) {
    phone = phone.replace(/^(\d{2})(\d*)/, "($1) $2");
  }
  if (phone.length > 9) {
    phone = phone.replace(/^(.*)(\d{4})$/, "$1-$2");
  }

  return phone;
};

const ContactForm = () => {
  const contactInSchema = Yup.object().shape({
    name: Yup.string().required("Nome obrigatório"),
    email: Yup.string()
      .email("Por favor insira um e-mail válido")
      .required("Email obrigatório"),
    phoneNumber: Yup.string().required("Insira um telefone"),
    company: Yup.string().required("Digite o nome da empresa"),
    office: Yup.string().required("Digite o cargo"),
  });

  interface FormValues {
    name: string;
    email: string;
    phoneNumber: string;
    company: string;
    office: string;
  }

  const initialValues: FormValues = {
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    office: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactInSchema}
      onSubmit={(values: FormValues, { resetForm }) => {
        resetForm({
          values: {
            name: "",
            email: "",
            phoneNumber: "",
            company: "",
            office: "",
          },
        });
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty, setFieldValue } = formik;
        return (
          <S.ContainerForm>
            <Form>
              <S.FormRow>
                <Field
                  type="text"
                  placeholder="Nome*"
                  name="name"
                  id="name"
                  className={errors.name && touched.name ? "input-error" : null}
                />
                <ErrorMessage name="name" component="span" className="error" />
              </S.FormRow>
              <S.FormRow>
                <Field
                  placeholder="E-mail*"
                  type="email"
                  name="email"
                  id="email"
                  className={
                    errors.email && touched.email ? "input-error" : null
                  }
                />
                <ErrorMessage name="email" component="span" className="error" />
              </S.FormRow>
              <S.FormRow>
                <Field
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const mask = phoneNumber(String(e.target.value));
                    setFieldValue("phoneNumber", mask);
                  }}
                  placeholder="Telefone*"
                  type="phone"
                  name="phoneNumber"
                  maxLength="15"
                  id="phoneNumber"
                  className={
                    errors.phoneNumber && touched.phoneNumber
                      ? "input-error"
                      : null
                  }
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="span"
                  className="error"
                />
              </S.FormRow>
              <S.FormRow>
                <Field
                  type="text"
                  placeholder="Empresa"
                  name="company"
                  id="company"
                  className={
                    errors.company && touched.company ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="company"
                  component="span"
                  className="error"
                />
              </S.FormRow>
              <S.FormRow>
                <Field
                  type="text"
                  placeholder="Cargo"
                  name="office"
                  id="office"
                  className={
                    errors.office && touched.office ? "input-error" : null
                  }
                />
                <ErrorMessage
                  name="office"
                  component="span"
                  className="error"
                />
              </S.FormRow>
              <button
                type="submit"
                className={!(dirty && isValid) ? "disabled-btn" : ""}
                disabled={!(dirty && isValid)}
              >
                Quero Divulgar
              </button>
            </Form>
          </S.ContainerForm>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
