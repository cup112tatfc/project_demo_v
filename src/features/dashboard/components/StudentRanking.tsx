import { Student } from "models";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/lib/table";
export interface StudentRankingListProps {
  studentList: Student[];
}
const columns: ColumnsType<Student> = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Mark",
    dataIndex: "mark",
    key: "mark",
  },
];

export default function StudentRankingList({
  studentList,
}: StudentRankingListProps) {
  return (
    <Table columns={columns} pagination={false} dataSource={studentList} />
  );
}
