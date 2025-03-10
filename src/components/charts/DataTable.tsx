import Sheet from "@mui/joy/Sheet";
import {Table} from "@mui/joy";

export default function DataTable() {

    return(
        <Sheet
            variant="outlined"
            sx={{
                flex: 1,
                margin: '10px',
                padding: '5px',
                borderRadius: '8px',
                height: 300,
                overflow: 'auto',
                // The background color will automatically adjust based on theme
                bgcolor: 'background.level1',
                // Shadow will adjust based on theme
                boxShadow: 'sm',
            }}
        >
            <Table
                aria-label="basic table"
                stickyHeader
                stickyFooter
            >
                <thead>
                <tr>
                    <th style={{ width: '40%' }}>Dessert (100g serving)</th>
                    <th>Calories</th>
                    <th>Fat&nbsp;(g)</th>
                    <th>Carbs&nbsp;(g)</th>
                    <th>Protein&nbsp;(g)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Frozen yoghurt</td>
                    <td>159</td>
                    <td>6</td>
                    <td>24</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Ice cream sandwich</td>
                    <td>237</td>
                    <td>9</td>
                    <td>37</td>
                    <td>4.3</td>
                </tr>
                <tr>
                    <td>Eclair</td>
                    <td>262</td>
                    <td>16</td>
                    <td>24</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Cupcake</td>
                    <td>305</td>
                    <td>3.7</td>
                    <td>67</td>
                    <td>4.3</td>
                </tr>
                <tr>
                    <td>Gingerbread</td>
                    <td>356</td>
                    <td>16</td>
                    <td>49</td>
                    <td>3.9</td>
                </tr>
                <tr>
                    <td>Gingerbread</td>
                    <td>356</td>
                    <td>16</td>
                    <td>49</td>
                    <td>3.9</td>
                </tr>
                <tr>
                    <td>Gingerbread</td>
                    <td>356</td>
                    <td>16</td>
                    <td>49</td>
                    <td>3.9</td>
                </tr>
                </tbody>
            </Table>
        </Sheet>
    )

}