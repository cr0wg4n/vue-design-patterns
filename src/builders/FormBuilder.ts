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
  validation?: any;
}

export default class FormBuilder {
  fields: Field[];
  provider: any;

  constructor() {
    this.fields = [];
  }

  addField(field: Field) {
    this.fields.push(field);
    return this;
  }

  build() {
    const Fields = this.fields;

    return defineComponent({
      props: {
        id: {
          default: null,
          type: String || Number,
        },
      },
      render(): VNode {
        return h(FormFactory, { fields: Fields, id: this.id });
      },
    });
  }
}
