export type DataModel = {
    "avg":number[],
    "max":number[],
    "min":number[]
};

export type TransposedDataModel = Array<TransposedDataModelElement>;

export type TransposedDataModelElement = {
    name: string, 
    max: number, 
    avg: number, 
    min: number
}
