"use client";
import type { TableColumnsType, TableProps } from "antd";
import { Table } from "antd";
import { ExportAsCsv, ExportAsExcel } from "react-export-table";

interface DataType {
  key: React.Key | any;
  name: string | any;
  age: number | any;
  address: string | any;
}

export default function Home() {
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Category 1",
          value: "Category 1",
        },
        {
          text: "Category 2",
          value: "Category 2",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value: string, record) => record.name.startsWith(value),
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value: string, record) => record.address.startsWith(value),
      filterSearch: true,
      width: "40%",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Table</h2>
      <br />
      <br />

      <ExportAsCsv data={data} fileName="User data table">
        {(props) => <button {...props}>Download csv</button>}
      </ExportAsCsv>

      <ExportAsExcel
        data={data}
        headers={["Name", "Age", "Address"]}
        fileName="Excel file"
      >
        {(props) => <button {...props}>Export as Excel</button>}
      </ExportAsExcel>

      <br />
      <br />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </main>
  );
}
