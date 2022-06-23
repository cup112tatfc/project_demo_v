import { Card, Col, Row, Statistic } from "antd";
import { useEffect } from "react";
import {
  FallOutlined,
  ManOutlined,
  RiseOutlined,
  WomanOutlined,
} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "app/hooks";
import {
  dashboardActions,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingByCityList,
} from "./dashboardSlice";
import StudentRankingList from "./components/StudentRanking";
import { gridStyle, iconStyle, rowStyle } from "./styles";
export interface DashboardProps {}



export default function Dashboard(props: DashboardProps) {
  const dispatch = useAppDispatch();
  const highestStudentList = useAppSelector(selectHighestStudentList);
  const lowestStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCityList = useAppSelector(selectRankingByCityList);

  useEffect(() => {
    dispatch(dashboardActions.fetchData());
  }, [dispatch]);
  return (
    <div>
      <Row gutter={24} justify="space-evenly" style={rowStyle}>
        <Col className="gutter-row" span={6}>
          <Card.Grid style={gridStyle}>
            <ManOutlined style={iconStyle} />
            <Statistic title="12" value={"male"} />
          </Card.Grid>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card.Grid style={gridStyle}>
            <WomanOutlined style={iconStyle} />
            <Statistic title="12" value={"male"} />
          </Card.Grid>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card.Grid style={gridStyle}>
            <RiseOutlined style={iconStyle} />
            <Statistic title="12" value={"male"} />
          </Card.Grid>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card.Grid style={gridStyle}>
            <FallOutlined style={iconStyle} />
            <Statistic title="12" value={"male"} />
          </Card.Grid>
        </Col>
      </Row>
      <Row gutter={24} justify="space-evenly" style={rowStyle}>
        <Col className="gutter-row" span={7}>
          {" "}
          <StudentRankingList studentList={highestStudentList} />
        </Col>
        <Col className="gutter-row" span={8}>
          {" "}
          <StudentRankingList studentList={highestStudentList} />
        </Col>
        <Col className="gutter-row" span={5}>
          {" "}
          <StudentRankingList studentList={highestStudentList} />
        </Col>
      </Row>
    </div>
  );
}
