import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from '../controller/task.controller';
import { Task, TaskSchema } from '../models/task.schema';
import { TaskService } from '../service/task.service';
import { TASK_SERVICE } from './task.service.id';

@Module({
    imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
    controllers: [TaskController],
    providers: [{
        useClass: TaskService,
        provide: TASK_SERVICE
    }]
})
export class TaskModule {}
