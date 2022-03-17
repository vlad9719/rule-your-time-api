import { ITask } from "../models/task.interface";

export interface ITaskService {
    findAll(): Promise<ITask[]>;
}