import { render } from "@testing-library/react";
import EmployeeDetails from "..";


describe("Initial Render",()=>{
    test("test",()=>{
        const {container,getByTestId} =render(<EmployeeDetails/>);
        expect(container).toBeInTheDocument();
        expect(getByTestId("custom-table")).toBeInTheDocument();
    })
});

describe("Values Check",()=>{
    test("test",()=>{
        const {container,getAllByTestId} =render(<EmployeeDetails/>);
        expect(getAllByTestId("table-row")).toHaveLength(12);
        
    })
});