import { IEmployee } from 'app/shared/model/employee.model';

export interface IDepartment {
  id?: string;
  departmentName?: string;
  locationId?: string;
  employees?: IEmployee[];
}

export class Department implements IDepartment {
  constructor(public id?: string, public departmentName?: string, public locationId?: string, public employees?: IEmployee[]) {}
}
