export interface Todo {
  title: string;
  completed: boolean;
}

export interface TodoStoreProps {
  list: Todo[];
}
