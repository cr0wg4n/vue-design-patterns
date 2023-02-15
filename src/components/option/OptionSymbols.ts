import type { InjectionKey } from "vue";

export interface VisualizationPreferences {
  darkMode: boolean;
  borders: "square" | "rounded";
}

export const VISUALIZATION_PREFERENCES: InjectionKey<
  VisualizationPreferences | any
> = Symbol("visualizationPreferences");
