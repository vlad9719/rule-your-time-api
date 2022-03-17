import { Get, Inject } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { TASK_SERVICE } from '../ioc/task.service.id';
import { ITaskService } from '../service/task.service.interface';

@Controller('api/tasks')
export class TaskController {

    constructor (
        @Inject(TASK_SERVICE)
        private readonly taskService: ITaskService
    ) {}

    @Get()
    public async getTasks () {
        return this.taskService.findAll();
    }
}
