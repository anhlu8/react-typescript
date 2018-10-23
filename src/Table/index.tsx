import * as React from "react";
import "./index.css";

type TableProps = any;

const Table = (props: TableProps) => {
    return (<div className="table">
        <table>
            {props.children}
        </table>
        </div>) 
};

export { Table };
