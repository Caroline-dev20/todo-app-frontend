export interface Todo {
    id: string;
    title: string;
    description: string;
}

export class Todos extends Array<Todo> {}