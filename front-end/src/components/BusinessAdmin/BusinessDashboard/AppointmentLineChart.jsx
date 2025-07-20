import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Global/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/Global/ui/chart";

const chartData = [
  { month, desktop, mobile,
  { month, desktop, mobile,
  { month, desktop, mobile,
  { month, desktop, mobile,
  { month, desktop, mobile,
  { month, desktop, mobile,
  { month, desktop, mobile,
];

const chartConfig = {
  desktop,
    color))",
  },
  mobile,
    color))",
  },
};

const ComponentAriaChart = () => {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Appointments This Week</CardTitle> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{
              left,
              right,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="var(--color-mobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ComponentAriaChart;
