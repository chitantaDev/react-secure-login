import {
    ArcElement,
    Chart as ChartJS,
    Tooltip,
    Legend,
    Title
} from "chart.js";
import {useState} from "react";
import {Pie} from "react-chartjs-2";
import {Data} from "../../utils/Data";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function PieChart() {
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.category),
        datasets: [
            {
                label: "Budget in € ",
                data: Data.map((data) => data.amount),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                ],
                borderColor: "black",
                borderWidth: 2,
            }
        ]
    });

    return (
        <div className="chart-container">
            <h2 style={{ textAlign: "center", color: "darkgrey" }}>50/30/20 Rule</h2>
            <Pie
                data={chartData}
                redraw
                options={{
                    // animation: {
                    //     duration: 0,
                    // },
                    responsive: true,
                    plugins: {
                        legend: {
                            display: true,
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: "Allocated Budget"
                        }
                    }
                }}
            />
        </div>
    );

}