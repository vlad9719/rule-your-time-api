import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ITask } from '../models/task.interface';
import { Task, TaskDocument } from '../models/task.schema';
import { ITaskService } from './task.service.interface';
import { Model } from "mongoose";

@Injectable()
export class TaskService implements ITaskService {
    constructor (
        @InjectModel(Task.name) private taskModel: Model<TaskDocument>
    ) {}

    public async findAll(): Promise<ITask[]> {
        return this.taskModel.find().exec();
    }
}
