"use client";

import { PieChart, Pie, Cell } from "recharts";

export default function SuitabilityChart({
  valueCarrer,
  valueEducation,
  valueCertificate,
  valueSkill,
  width,
  height,
}: {
  valueCarrer?: number;
  valueEducation?: number;
  valueCertificate?: number;
  valueSkill?: number;
  width?: number;
  height?: number;
}) {
  const data01 = valueCarrer
    ? [
        { name: "Group A", value: valueCarrer },
        { name: "Group B", value: 100 - valueCarrer },
      ]
    : [{ name: "Group A", value: 100 }];

  const data02 = valueEducation
    ? [
        { name: "Group A", value: valueEducation },
        { name: "Group B", value: 100 - valueEducation },
      ]
    : [{ name: "Group A", value: 100 }];

  const data03 = valueCertificate
    ? [
        { name: "Group A", value: valueCertificate },
        { name: "Group B", value: 100 - valueCertificate },
      ]
    : [{ name: "Group A", value: 100 }];
  const data04 = valueSkill
    ? [
        { name: "Group A", value: valueSkill },
        { name: "Group B", value: 100 - valueSkill },
      ]
    : [{ name: "Group A", value: 100 }];

  return (
    <PieChart width={width ? width : 1100} height={height ? height : 180}>
      <Pie
        data={data01}
        dataKey="value"
        cx="12.5%"
        cy="50%"
        innerRadius={55}
        outerRadius={80}
        fill="#3F96FE"
        startAngle={90}
        endAngle={450}
        stroke="none"
      >
        {!valueCarrer ? (
          <Cell fill="#BABABA" values="800" />
        ) : valueCarrer && valueCarrer >= 80 ? (
          <Cell fill="#3F96FE" values="800" />
        ) : (
          <Cell fill="#78B4FE" values="800" />
        )}
        <Cell fill="#FFFFFF" values="800" />
      </Pie>

      <Pie
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="37.5%"
        cy="50%"
        innerRadius={55}
        outerRadius={80}
        fill="#3F96FE"
        startAngle={90}
        endAngle={450}
        stroke="none"
      >
        {!valueEducation ? (
          <Cell fill="#BABABA" values="800" />
        ) : valueEducation && valueEducation >= 80 ? (
          <Cell fill="#3F96FE" values="800" />
        ) : (
          <Cell fill="#78B4FE" values="800" />
        )}
        <Cell fill="#FFFFFF" values="800" />
      </Pie>
      <Pie
        data={data03}
        dataKey="value"
        nameKey="name"
        cx="62.5%"
        cy="50%"
        innerRadius={55}
        outerRadius={80}
        fill="#3F96FE"
        startAngle={90}
        endAngle={450}
        stroke="none"
      >
        {valueCertificate === undefined ? (
          <Cell fill="#BABABA" values="800" />
        ) : valueCertificate && valueCertificate >= 80 ? (
          <Cell fill="#3F96FE" values="800" />
        ) : (
          <Cell fill="#78B4FE" values="800" />
        )}
        <Cell fill="#FFFFFF" values="800" />
      </Pie>
      <Pie
        data={data04}
        dataKey="value"
        nameKey="name"
        cx="88%"
        cy="50%"
        innerRadius={55}
        outerRadius={80}
        fill="#3F96FE"
        startAngle={90}
        endAngle={450}
        stroke="none"
      >
        {valueSkill === undefined ? (
          <Cell fill="#BABABA" values="800" />
        ) : valueSkill && valueSkill >= 80 ? (
          <Cell fill="#3F96FE" values="800" />
        ) : (
          <Cell fill="#78B4FE" values="800" />
        )}
        <Cell fill="#FFFFFF" values="800" />
      </Pie>
    </PieChart>
  );
}
