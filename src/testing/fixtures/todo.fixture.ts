import { Todo } from "src/app/models/todo";


export function todoFixture(props: Partial<Todo> = {}): Todo {
    const defaults: Todo = {
        id: '1',
        title: 'Test',
        description: 'Test fixture'
    };
    return { ...defaults, ...props}
}