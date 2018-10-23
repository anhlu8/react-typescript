import * as React from "react";
import "./index.css";

type TableRowProps = {
    month:string,
    max:number,
    avg:number,
    min:number
}

const TableRow = ({month, max, avg, min}: TableRowProps) => {
    return(<tr>
        <td  className="tableRow">{month}</td>
        <td  className="tableRow">{max}</td>
        <td  className="tableRow">{avg}</td>
        <td  className="tableRow">{min}</td>
        </tr>
   )
};

export { TableRow };
