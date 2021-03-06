import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartPie } from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useSelector } from "react-redux";

const BarchartPichart = () => {
  const data = useSelector(
    (state) => state?.adminDashboardData?.studentAttendenceData
  );

  const data2 = [
    { name: "ABSENT", value: 17 },
    { name: "LEAVE", value: 29 },
    { name: "PRESENT", value: 65 },
  ];

  const COLORS = ["#DC3545", "#FFC107", "#198754"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="row mt-5">
      <div className="col-md-7  d-block  justify-content-center">
        <div className="container px-5 fw-bold text-secondary">
          <FontAwesomeIcon icon={faChartBar} />
          <span className="mx-2"> TODAY'S STUDENT ATTENDENCE</span>
          <hr />
        </div>

        <BarChart
          width={700}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="ABSENT" stackId="a" fill="#8884d8" />
          <Bar dataKey="LEAVE" stackId="a" fill="#82ca9d" />
          <Bar dataKey="PRESENT" fill="#ffc658" />
        </BarChart>

        <div className=" text-center my-5">
          <p className="bg-danger text-white rounded px-3 py-2 m-2 d-inline">
            ABSENT
          </p>
          <p className="bg-warning text-white rounded px-3 py-2 m-2 d-inline">
            ON LEAVE
          </p>
          <p className="bg-success text-white rounded px-3 py-2 m-2 d-inline">
            PRESENT
          </p>
        </div>
      </div>

      <div className="col-md-5">
        <div className="container px-5 fw-bold text-secondary">
          <FontAwesomeIcon icon={faChartPie} />
          <span className="mx-2"> TEACHER ATTENDENCE </span>
          <hr />
        </div>

        <PieChart width={500} height={300}>
          <Tooltip />
          <Pie
            data={data2}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className=" text-center my-3">
          <p className="bg-danger text-white rounded px-3 py-2 m-2 d-inline">
            ABSENT
          </p>
          <p className="bg-warning text-white rounded px-3 py-2 m-2 d-inline">
            ON LEAVE
          </p>
          <p className="bg-success text-white rounded px-3 py-2 m-2 d-inline">
            PRESENT
          </p>
        </div>
      </div>
    </div>
  );
};

export default BarchartPichart;
