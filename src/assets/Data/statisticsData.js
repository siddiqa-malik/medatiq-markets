// Dummy Trading Data (12:00 AM se 08:00 PM tak)
const data = [
  { time: '12:00 AM', volume: 7546, deposit: 5100, withdraw: 3129 },
  { time: '02:00 AM', volume: 7700, deposit: 5200, withdraw: 4000 },
  { time: '04:00 AM', volume: 7600, deposit: 5300, withdraw: 3800 },
  { time: '06:00 AM', volume: 7900, deposit: 5400, withdraw: 4400 },
  { time: '08:00 AM', volume: 8000, deposit: 5634, withdraw: 4800 },
  { time: '10:00 AM', volume: 8500, deposit: 5900, withdraw: 6400 },
  { time: '12:00 PM', volume: 8200, deposit: 5700, withdraw: 5200 },
  { time: '02:00 PM', volume: 8900, deposit: 6100, withdraw: 6800 },
  { time: '04:00 PM', volume: 9200, deposit: 6400, withdraw: 8000 },
  { time: '06:00 PM', volume: 8800, deposit: 6200, withdraw: 7000 },
  { time: '08:00 PM', volume: 9500, deposit: 6800, withdraw: 9500 },
];

const stats = [
    {
      title: "Total Sales",
      value: "$124,500",
      growth: "+12.5%",
    },

    {
      title: "Total Orders",
      value: "8,450",
      growth: "+8.2%",
    },

    {
      title: "Customers",
      value: "12,340",
      growth: "+15.8%",
    },

    {
      title: "Revenue",
      value: "$85,200",
      growth: "+10.4%",
    },
  ];

export {data , stats}