import coinIcon from "../coin-icon.png";
import coinIcon1 from "../coin-icon1.png";
import bitcoinIc from "../bitcoin-ic.png";
import bitcoinIc1 from "../bitcoin-ic1.png";
import chartstate1 from "../chart-state1.png"
import chartstate2 from "../chart-state2.png"
import chartstate3 from "../chart-state3.png"
import chartstate4 from "../chart-state4.png"



const marketData = [
  {
    icon: coinIcon,
    symbol: "XAU/USD",
    label: "Gold",
    price: "$56,623.54",
    change: "1.41%",
    chart: chartstate1
  },
  {
    icon: coinIcon1,
    symbol: "XAG/USD",
    label: "Silver",
    price: "$4,267.90",
    change: "2.22%",
    chart: chartstate2
  },
  {
    icon: bitcoinIc,
    symbol: "XPT/USD",
    label: "Platinum",
    price: "$587.74",
    change: "0.82%",
    chart: chartstate3
  },
  {
    icon: bitcoinIc1,
    symbol: "USDT",
    label: "Tether",
    price: "$0.9998",
    change: "0.03%",
    chart: chartstate4
  }
];

export {marketData};