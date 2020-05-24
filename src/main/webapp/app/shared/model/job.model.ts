import { ITask } from 'app/shared/model/task.model';

export interface IJob {
  id?: string;
  jobTitle?: string;
  minSalary?: number;
  maxSalary?: number;
  tasks?: ITask[];
  employeeId?: string;
}

export class Job implements IJob {
  constructor(
    public id?: string,
    public jobTitle?: string,
    public minSalary?: number,
    public maxSalary?: number,
    public tasks?: ITask[],
    public employeeId?: string
  ) {}
}
