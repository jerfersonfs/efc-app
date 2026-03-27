import { LineChart as RechartsLineChart,Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@mui/material";

export default function LineChart({title, data =[], xKey,lineKey, lineKey2, height,width}){
    return(
        <Card>
            <h2>{title}</h2>
            <ResponsiveContainer width={width} height={height} >
                <RechartsLineChart data={data}>
                    <XAxis dataKey={xKey}/>
                    <YAxis/>
                    <Tooltip/>
                    <Line
                        type="monotone"
                        dataKey={lineKey}
                        stroke="#1d2940"
                        strokeWidth={2}
                    />
                    <Line
                        type="monotone"
                        dataKey={lineKey2}
                        stroke="#9ba1ad"
                        strokeWidth={2}
                        strokeDasharray="6 4"
                    />
                    </RechartsLineChart>
            </ResponsiveContainer>
        </Card>
    )
}