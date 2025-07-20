import * as React from "react";
import { Pie, PieChart, Label } from "recharts";

// import { Card, CardContent } from "@components/ui/card";npm
import { Card, CardContent } from "../../Global/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/Global/ui/chart";

// Chart data
const chartData = [
  { browser, visitors, fill)" },
  { browser, visitors, fill)" },
  { browser, visitors, fill)" },
  { browser, visitors, fill)" },
  { browser, visitors, fill)" },
];

// Chart config
const chartConfig = {
  visitors,
  },
  chrome,
    color))",
  },
  safari,
    color))",
  },
  firefox,
    color))",
  },
  edge,
    color))",
  },
  other,
    color))",
  },
};

// VisitorChart component
const AppointmentChart = () => {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Appointments
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default AppointmentChart;
