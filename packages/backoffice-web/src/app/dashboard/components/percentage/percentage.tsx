'use client'
import { Card, CategoryBar, SparkAreaChart, SparkBarChart, SparkLineChart, Text, Title } from '@tremor/react';


const chartdata = [
  {
    month: 'Jan',
    day: '21',
    Performance: 4000,
    Benchmark: 3000,
  },
  {
    month: 'Feb',
    day: '21',
    Performance: 3000,
    Benchmark: 2000,
  },
  {
    month: 'Mar',
    day: '21',
    Performance: 2000,
    Benchmark: 1700,
  },
  {
    month: 'Apr',
    day: '21',
    Performance: 2780,
    Benchmark: 2500,
  },
  {
    month: 'May',
    day: '21',
    Performance: 1890,
    Benchmark: 1890,
  },
  {
    month: 'Jun',
    day: '21',
    Performance: 2390,
    Benchmark: 2000,
  },
  {
    month: 'Jul',
    day: '21',
    Performance: 3490,
    Benchmark: 3000,
  },
];

export default function Percentage ()  {


  return (
    <>
      <Card className="w-full flex flex-col align-center flex-wrap justify-center gap-12"
      decoration="top">
        <Title>Porcentaje de ocupación ( - )</Title>
        <div className='flex justify-center align-center gap-12'>
          <div>
            <Text className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium'>10K</Text>
            <Text className='text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium'>Total de Ocupación</Text>
          </div>
          <SparkBarChart
            data={chartdata}
            index="date"
            categories={['Performance', 'Benchmark']}
            colors={['yellow', 'blue']}
          />
        </div>
        <div className="space-y-3">
          <p className="text-center font-mono text-sm text-slate-500">
            Ultima actualización : 
          </p>
          <div className="flex justify-center">
            <Card className="max-w-sm">
              <CategoryBar
                values={[40, 30, 20, 10]}
                colors={['emerald', 'yellow', 'orange', 'rose']}
                markerValue={62}
              />
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
};