import VInput from "@/components/form/VInput.vue";
import type FormBuilder from "./FormBuilder";
import z from "zod";

export default class FormDirector {
  builder: FormBuilder;
  constructor(builder: FormBuilder) {
    this.builder = builder;
  }
  makeLoginForm() {
    return this.builder
      .addField({
        component: VInput,
        name: "username",
        type: "text",
        label: "username",
        props: {
          value: "",
        },
        validation: z.string().min(10).max(40),
      })
      .addField({
        component: VInput,
        name: "password",
        type: "password",
        label: "password",
        props: {
          value: "default password",
        },
        validation: z.string().min(15),
      })
      .build();
  }
}
