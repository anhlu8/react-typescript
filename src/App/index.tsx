import * as React from "react";
import * as request from "superagent";
import { DataModel, TransposedDataModel, TransposedDataModelElement } from "../types";
import "./index.css";
import { SimpleLineChart } from "../LineChart";
import { Table } from "../Table";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";


const url = "https://storage.googleapis.com/quotapath-challenge/data/weather.json";

type AppState = {
  returnedData: TransposedDataModel
};

const transposeData = (data: DataModel): TransposedDataModel => {
  const newArrOfObj:TransposedDataModel =[]
  const month:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  for (let i=0; i<month.length; i++){
    let row:TransposedDataModelElement={
        name: month[i],
        max: data.max[i],
        avg: data.avg[i],
        min: data.min[i] 
    }
   newArrOfObj.push(row)
  }
  return newArrOfObj;
};

class App extends React.Component<{}, AppState> {
  state: AppState = {
    returnedData: []
  };

  componentDidMount() {
    request
      .get(url)
      .end((err, res) => {
        this.setState({returnedData: transposeData(res.body)});
      })
  }

  render() {
    const returnedData = this.state.returnedData
    return (
      <div>
        <div className="right">
          <SimpleLineChart data={returnedData}/>
        </div>
        <div className="left">
          <Table>
            <TableHeader col="month" col1="max" col2="avg" col3="min" />
            {returnedData.map(j=>{
              return(<TableRow month={j.name} max={j.max} avg={j.avg} min={j.min}/>)
            })}
          </Table>
        </div>
      </div>
    );
  }
}

export { App };
