import { useEffect, useState } from "react"
import { EmployeeData } from "./interface"
import {EmployeesData} from "./mockEmployeeData"
import "./EmployeeDetails.css"


const EmployeeDetails=()=>{
    const [data,setData] = useState<EmployeeData[]>(EmployeesData);
    useEffect(()=>{
        
    },[])
    return(<>
        <table data-testid="custom-table" style={{borderSpacing:0}}>
            <thead className="table-header">
                <tr>
                    <th className="header-cells"><div className="table-data-cells">First Name</div></th>
                    <th className="header-cells"><div className="table-data-cells">Last name</div></th>
                    <th className="header-cells"><div className="table-data-cells">Mobile</div></th>
                    <th className="header-cells"><div className="table-data-cells">email</div></th>
                </tr>
            </thead>
            <tbody>
                {data && data.map(({email,firstName,lastName,phone}:EmployeeData)=>{
                    return (
                        <tr>
                            <td className="table-data-td-cells"><div className="table-data-cells">{firstName}</div></td>
                            <td className="table-data-td-cells"><div className="table-data-cells">{lastName}</div></td>
                            <td className="table-data-td-cells"><div className="table-data-cells">{phone}</div></td>
                            <td className="table-data-td-cells"><div className="table-data-cells">{email}</div></td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </>)
}

export default EmployeeDetails