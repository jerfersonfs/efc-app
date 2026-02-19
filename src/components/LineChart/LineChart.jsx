import { LineChart as RechartsLineChart,Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "../Card/Card";

export default function LineChart({title, data =[], xKey,lineKey, height,width}){
    return(
        <Card>
            <h1>{title}</h1>

            <ResponsiveContainer width={width} height={height}>
                <RechartsLineChart data={data}>
                    <XAxis dataKey={xKey}/>
                    <YAxis/>
                    <Tooltip/>
                    <Line
                        type="monotone"
                        dataKey={lineKey}
                        stroke="#1d2940"
                        strokeWidth={2}
                        color="#9ba1ad"
                    />
                </RechartsLineChart>
            </ResponsiveContainer>
        </Card>
    )
}