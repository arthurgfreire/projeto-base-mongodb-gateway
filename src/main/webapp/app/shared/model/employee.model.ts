import { Moment } from 'moment';
import { IJob } from 'app/shared/model/job.model';

export interface IEmployee {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Moment;
  salary?: number;
  commissionPct?: number;
  jobs?: IJob[];
  managerId?: string;
  departmentId?: string;
}

export class Employee implements IEmployee {
  constructor(
    public id?: string,
    public firstName?: string,
    public lastName?: string,
    public email?: string,
    public phoneNumber?: string,
    public hireDate?: Moment,
    public salary?: number,
    public commissionPct?: number,
    public jobs?: IJob[],
    public managerId?: string,
    public departmentId?: string
  ) {}
}
