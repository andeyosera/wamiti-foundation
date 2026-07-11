"use client";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface BudgetItem {
  label: string;
  amount: number;
  color: string;
}

interface BudgetData {
  total: number;
  items: BudgetItem[];
}

export default function ProjectCharts({
  budgetData,
}: {
  budgetData: BudgetData;
}) {
  const pieData = budgetData.items.map((item) => ({
    name: item.label,
    value: item.amount,
    color: item.color,
  }));

  const barData = budgetData.items.map((item) => ({
    name: item.label.split(" ")[0],
    amount: item.amount,
    color: item.color,
  }));

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-navy">
        Budget Visualization
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="card p-6">
          <h3 className="text-sm font-semibold text-navy mb-4 text-center">
            Budget Distribution
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                paddingAngle={3}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) =>
                  `KES ${value.toLocaleString()}`
                }
              />
              <Legend
                formatter={(value) => (
                  <span className="text-xs font-body text-navy">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="card p-6">
          <h3 className="text-sm font-semibold text-navy mb-4 text-center">
            Cost Comparison (KES)
          </h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fontFamily: "Inter" }}
              />
              <YAxis
                tick={{ fontSize: 10, fontFamily: "Inter" }}
                tickFormatter={(v) => `${v / 1000}k`}
              />
              <Tooltip
                formatter={(value: number) =>
                  `KES ${value.toLocaleString()}`
                }
              />
              <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}