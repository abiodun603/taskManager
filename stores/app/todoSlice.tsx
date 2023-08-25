import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ** Component
import AsyncStorage from '@react-native-async-storage/async-storage';

//Types
import { Todo } from '../../types/types';


interface TodoState {
  filterStatus: string;
  todoList: Todo[];
}

const getInitialTodo = async (): Promise<Todo[]> => {
  try {
    const localTodoList = await AsyncStorage.getItem('todoList');
    if (localTodoList) {
      return JSON.parse(localTodoList);
    }
    await AsyncStorage.setItem('todoList', JSON.stringify([]));
    return [];
  } catch (error) {
    console.error('Error retrieving todo list:', error);
    return [];
  }
};

// Use a function to initialize the state asynchronously
const initializeTodoState = async (): Promise<TodoState> => {
  const initialTodoList = await getInitialTodo();
  return {
    filterStatus: 'all',
    todoList: initialTodoList,
  };
};


// Create a promise to asynchronously initialize the state
const todoStatePromise = initializeTodoState();

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    filterStatus: 'all',
    todoList: [] as Todo[], // Initialize with an empty array, you can also use 'as const'
  },
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todoList.push(action.payload);
      const todoListArr = [...state.todoList];
      AsyncStorage.setItem('todoList', JSON.stringify(todoListArr));
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const updatedTodo = action.payload;
      state.todoList = state.todoList.map(todo =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      AsyncStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const idToDelete = action.payload;
      state.todoList = state.todoList.filter(todo => todo.id !== idToDelete);
      AsyncStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    updateFilterStatus: (state, action: PayloadAction<string>) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, updateFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;