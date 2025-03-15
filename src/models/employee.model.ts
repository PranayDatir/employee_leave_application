export interface IEmployee{
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    deptName: string;
    password: string;
    gender: "Male" | "Female" | "Other";
    role: string;
}