export class Employee {
    Salary: string | undefined;
    Name: string | undefined;
    Designation: string | undefined;
}


export interface EmployeeDataWithId extends Employee {
    id: string;
}