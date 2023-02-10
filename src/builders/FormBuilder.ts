import { defineComponent, h, type VNode } from "vue";
import FormFactory from "./FormFactory.vue";

export interface ObjectGeneric {
  [keys: string]: any;
}

export interface Field {
  component: any;
  type: string;
  label?: string;
  name: string;
  props?: ObjectGeneric;
  attrs?: ObjectGeneric;
  validation?: () => void;
}

export default class FormBuilder {
  fields: Field[];
  provider: any;

  constructor() {
    this.fields = [];
  }

  withProvider(provider: any) {
    this.provider = provider || null;
    return this;
  }

  addField(field: Field) {
    this.fields.push(field);
    return this;
  }

  build() {
    const Provider = this.provider;
    const Fields = this.fields;

    return defineComponent({
      props: {
        id: {
          default: null,
          type: String || Number,
        },
      },
      render(): VNode {
        return Provider
          ? h(Provider, [h(FormFactory, { fields: Fields, id: this.id })])
          : h(FormFactory, { fields: Fields, id: this.id });
      },
    });
  }
}
