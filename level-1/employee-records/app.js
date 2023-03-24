//create collection of employee's info
//each employee has the following attributes:
//  name, job title, salary, status
//create empty array named 'employees'
var employees = [];

//create 'Employee' constructor with first three attributes defined
//at time of instantiation, fourth will be defaulted to "Full Time"
function Employee(name, jobTitle, salary) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";

    //methods
    this.printEmployeeForm = function() {
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status);
    }
}

//instantiate three employees
var employee1 = new Employee("John Doe", "Software Developer", "$90,000");
var employee2 = new Employee("Jane Deer", "Computer Scientist", "$120,000");
var employee3 = new Employee("Jeff Dower", "Systems Administrator", "$80,000");

console.log(employee1, employee2, employee3)

var employee1.status = "Contract";