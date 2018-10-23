import * as React from "react";

type TableHeaderProps = {
    col:string,
    col1:string,
    col2:string,
    col3:string
};

const TableHeader = ({col, col1, col2, col3}: TableHeaderProps) => {
    return(
        <tr>
            <th>{col}</th>
            <th>{col1}</th>
            <th>{col2}</th>
            <th>{col3}</th>
        </tr>)
};

export { TableHeader };
