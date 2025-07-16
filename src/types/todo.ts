export enum Status {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING'
};

export interface Todo {
  id: number;
  text: string,
  createdAt: number;
  status: Status;
};

export type TodoContextType =  {
  todos: Todo[];
  saveTodo: (todo: Todo) => void;
  newTodoText: string;
  setNewTodoText: (text: string) => void;
  showErrorPopUp: boolean;
  setErrorPopUp: (visible: boolean) => void;
}

export interface ScaleButton {
  edit: boolean;
  complete: boolean;
  delete: boolean;
}