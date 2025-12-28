import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Job } from '../../models/job';
import { addToDo, removeToDo } from '../../services/toDoService';
import { getAllToDos } from '../../services/toDoService';

//Các trạng thái nằm ở đây
//Khởi tạo trạng thái ban đầu
export const loadJobs = createAsyncThunk('toDo/loadJobs', async () => {
    const jobs = await getAllToDos();
    return jobs;
});

const initialState: Job[] = [];

const toDoSlice = createSlice({
    name: 'toDoDo',
    initialState: initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Job>) => {
            state.push(action.payload);
            // Thêm vào database
            addToDo(action.payload);
        },
        removeTask: (state, action: PayloadAction<Job>) => {
            removeToDo(action.payload.id);
            return state.filter(task => task.id !== action.payload.id);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadJobs.pending, (state) => {
            console.log('Loading jobs...');
            return state;
        });
        builder.addCase(loadJobs.rejected, (state) => {
            console.log('Failed to load jobs...');
            return state;
        });
        builder.addCase(loadJobs.fulfilled, (state, action: PayloadAction<Job[]>) => {
            return action.payload;
        });
    },
});

export const { addTask, removeTask } = toDoSlice.actions;
export default toDoSlice.reducer;