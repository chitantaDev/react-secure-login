import {myCss} from "../styles/styleUtils";
import "../styles/styles.css"
import PieChart from "./charts/PieChart";
import {DataDisplay} from "./dataDisplay/DataDisplay";
import {Table} from "@mui/joy";
import Sheet from "@mui/joy/Sheet";
import DataTable from "./charts/DataTable";

export const MainContainer = () => {
    //const styles = myCss

    return (
        <main className={"app-container"}>
            <div className={"upper-section"}>
                <div className={"input-container"}>
                    input container
                </div>
                <div className={"chart-container"}>
                    <PieChart/>
                </div>
                <div className={"finance-container"}>
                    <DataDisplay/>
                </div>

            </div>
            <div className={"lower-section"}>
                <div className={"table-container"}>
                    <DataTable/>
                </div>
                <div className={"table-container"}>
                    table 2
                </div>
                <div className={"table-container"}>
                    table 3
                </div>
            </div>
        </main>
    )
}

export default MainContainer