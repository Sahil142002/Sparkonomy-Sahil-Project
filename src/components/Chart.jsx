import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", income: 3500, momGrowth: 20 },
  { name: "Feb", income: 5000, momGrowth: 50 },
  { name: "Mar", income: 6800, momGrowth: 55 },
  { name: "Apr", income: 3000, momGrowth: -40 },
  { name: "May", income: 5200, momGrowth: 60 },
  { name: "Jun", income: 0, momGrowth: -100 },
];

export default function IncomeTrendCard() {
  return (
    <div className="bg-white  border border-gray-300  flex w-full rounded-4xl  p-4 flex-col gap-4 ">
      <h3 className="text-gray-800 font-semibold text-md">Income Trend</h3>
      <p className="text-gray-500 text-xs mb-4">
        Your monthly income and growth for the last 6 months.
      </p>

      <div className="w-full h-64">
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            {/* Left axis for income */}
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            {/* Right axis for MoM growth */}
            <YAxis
              yAxisId="right"
              orientation="right"
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip />
            <Legend />
            {/* Purple bar for income */}
            <Bar yAxisId="left" dataKey="income" fill="#A855F7" radius={[6, 6, 0, 0]} />
            {/* Brown line for momGrowth */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="momGrowth"
              stroke="#6B1E1E"
              strokeWidth={2}
              dot={true}
              activeDot={{ r: 6 }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
