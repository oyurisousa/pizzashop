import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '10/10', revenue: 1200 },
  { date: '11/10', revenue: 200 },
  { date: '12/10', revenue: 500 },
  { date: '13/10', revenue: 1860 },
  { date: '14/10', revenue: 1200 },
  { date: '15/10', revenue: 100 },
  { date: '16/10', revenue: 260 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita Diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey={'date'} axisLine={false} tickLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRl',
                })
              }
              width={80}
            />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line
              type={'linear'}
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet['400']}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
