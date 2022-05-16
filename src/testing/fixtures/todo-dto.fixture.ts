import { TodoDTO } from "src/app/models/todo-dto";

export function todoDTOFixture(props: Partial<TodoDTO> = {}): TodoDTO {
    const defaults: TodoDTO = {
        title: 'Test',
        description: 'Test fixture'
    };
    return { ...defaults, ...props}
}