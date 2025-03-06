export interface IEmployee {
    employeeId: number;
    employeeName: string;
    contactNo: string;
    emailId: string;
    deptId: number;
    password: string;
    gender: "Male" | "Female" | "Other";
    role: string;
  }

  export interface ILoginCredentials {
    emailId: string;
    password: string;
  }