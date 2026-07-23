const marketData = [
  {
    icon: "/path-to-gold-icon.png", // Apni gold icon ka path lagayein
    symbol: "XAU/USD",
    label: "Gold",
    price: "$56,623.54",
    change: "1.41%",
    chart: "/path-to-gold-mini-chart.png" // Agar mini chart image hai, warna isay custom SVG se bhi badla ja sakta hai
  },
  {
    icon: "/path-to-silver-icon.png",
    symbol: "XAG/USD",
    label: "Silver",
    price: "$4,267.90",
    change: "2.22%",
    chart: "/path-to-silver-mini-chart.png"
  },
  {
    icon: "/path-to-platinum-icon.png",
    symbol: "XPT/USD",
    label: "Platinum",
    price: "$587.74",
    change: "0.82%",
    chart: "/path-to-platinum-mini-chart.png"
  },
  {
    icon: "/path-to-usdt-icon.png",
    symbol: "USDT",
    label: "Tether",
    price: "$0.9998",
    change: "0.03%",
    chart: "/path-to-usdt-mini-chart.png"
  }
];

export {marketData};