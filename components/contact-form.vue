<template>
  <div class="contact-form-wrapper">
    <form
      class="contact-form"
      name="contacto"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <h4 class="contact-form__title">Envíanos un mensaje</h4>
      <input type="hidden" name="form-name" value="contacto" />

      <div class="form-group form-group--cols-2">
        <div class="form-group form-group--half">
          <input
            class="form-input"
            type="text"
            name="nombre"
            v-model="name"
            placeholder="Nombre y Apellido"
          />
        </div>

        <div class="form-group form-group--half">
          <input
            class="form-input"
            type="email"
            name="email"
            v-model="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div class="form-group">
        <input
          class="form-input"
          type="text"
          name="asunto"
          v-model="subject"
          placeholder="Asunto"
        />
      </div>

      <div class="form-group">
        <textarea
          class="form-text-area"
          rows="5"
          name="mensaje"
          v-model="message"
          placeholder="Mensaje"
        />
      </div>

      <div class="form-group form-group--center">
        <button class="form-btn" @click="onSubmit">Enviar</button>
        <input type="hidden" name="form-name" value="inicio" />
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

type Form = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const router = useRouter();

const schema = yup.object({
  name: yup.string().required('Este campo es requerido'),
  email: yup.string().email().required('Este campo es requerido'),
  subject: yup.string().required('Este campo es requerido'),
  message: yup.string().required('Este campo es requerido'),
});

const {
  useFieldModel,
  errors: _,
  handleSubmit,
} = useForm<Form>({
  validationSchema: schema,
});

const [name, email, subject, message] = useFieldModel([
  'name',
  'email',
  'subject',
  'message',
]);

const mapper = (data: Form) => ({
  nombre: data.name,
  email: data.email,
  asunto: data.subject,
  mensaje: data.message,
});

const encode = (data: any) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const onSubmit = handleSubmit(async (data) => {
  try {
    const mapped = mapper(data);
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contacto',
        ...mapped,
      }),
    });
    // router.push('/gracias');
  } catch (error: any) {
    console.log('An error ocurred while sending form: ', error.message);
  }
});
</script>

<style scoped>
.contact-form-wrapper {
  @apply rounded-r-lg bg-[#d9d9d9];
}

.contact-form {
  @apply flex w-full flex-wrap justify-between p-8;
}

.contact-form__title {
  @apply heading-4 text-bdazzled mb-4;
}

.form-group {
  @apply w-full;
}

.form-group--cols-2 {
  @apply flex flex-col justify-between lg:flex-row;
}

.form-group--half {
  @apply lg:w-[48%];
}

.form-group--center {
  @apply flex justify-center;
}

.form-group--alt {
  @apply flex-col justify-between lg:flex-row;
}

.form-input {
  @apply w-full rounded-lg rounded-br-lg bg-white bg-opacity-80 border border-cerulean placeholder-silver mb-8 p-4 h-9;
}

.form-text-area {
  @apply w-full list-none mb-8 p-4 rounded-lg bg-white bg-opacity-80 border border-cerulean placeholder-silver;
}

.form-btn {
  @apply px-8 py-2 text-white bg-gunmetal w-48 rounded-lg;
}
</style>
