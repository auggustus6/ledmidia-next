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
  });

  interface FormValues {
    name: string;
    email: string;
    phoneNumber: string;
  }

  const initialValues: FormValues = {
    name: "",
    email: "",
    phoneNumber: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactInSchema}
      onSubmit={(values: FormValues, { resetForm }) => {
        Swal.fire({
          icon: "success",
          heightAuto: false,
          title: "Formulário Enviado com Sucesso",
          text: "Clique no botão para enviar outro formulário",
          confirmButtonColor: "#00a6de",
        });
        resetForm({
          values: {
            name: "",
            email: "",
            phoneNumber: "",
          },
        });
        fetch("/api/contact", {
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });
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
