import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

function BitcoinPriceGraph() {
    const [selectedTime, setSelectedTime] = useState({});
    const priceInfos = [
        { index: 0, timeFormat: "Day", lower: 4.895, higher: 4.999, perBtc: 4.947 },
        { index: 1, timeFormat: "Week", lower: 5.123, higher: 7.162, perBtc: 6.142 },
        { index: 2, timeFormat: "Month", lower: 3.569, higher: 7.162, perBtc: 5.366 },
        { index: 3, timeFormat: "Year", lower: 3.569, higher: 10.126, perBtc: 6.847 }
    ];

    useEffect(() => {
        setSelectedTime(priceInfos[0]);
    }, []);

    const handleSelectTime = (info) => {
        setSelectedTime(info);
    }

    return (
        <div style={{ margin: "30px 30px 20px 30px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {priceInfos?.map(info => (
                    <p
                        key={info?.index}
                        onClick={() => handleSelectTime(info)}
                        style={{
                            color: info.index === selectedTime?.index ? "white" : "#aeb8c4",
                            fontWeight: "500",
                            backgroundColor: info.index === selectedTime?.index ? "#aeb8c4" : "",
                            borderRadius: "15px",
                            padding: "4px 12px"
                        }}
                    >
                        {info?.timeFormat}
                    </p>
                ))}
            </div>
            <div style={{ backgroundColor: "white", filter: "drop-shadow(0px 59px 55.5px rgba(154,155,176,0.17))", borderRadius: "20px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <FontAwesomeIcon icon={faCircle} size='xs' color="red" />
                        <p style={{ color: "#9a9bb0", fontWeight: "600", fontSize: "14px" }}>Lower: ${selectedTime?.lower}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <FontAwesomeIcon icon={faCircle} size='xs' color="green" />
                        <p style={{ color: "#9a9bb0", fontWeight: "600", fontSize: "14px" }}>Higher: ${selectedTime?.higher}</p>
                    </div>
                </div>

                <div style={{ position: "", width: "100%", height: 150, filter: "drop-shadow(0px 59px 55.5px rgba(154,155,176,0.17))" }}>
                    <ResponsiveContainer>
                        <AreaChart
                            data={priceInfos}
                            margin={{
                                top: selectedTime?.higher,
                                right: selectedTime?.higher,
                                left: 0,
                                bottom: 0
                            }}
                        >
                            <Tooltip />
                            <Area type="natural" dataKey="higher" stroke="#ff8f17" fill="#fff7ee" />
                        </AreaChart>
                    </ResponsiveContainer>
                    <div style={{ position: "fixed", display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", marginTop: "-57px" }}>
                        <FontAwesomeIcon icon={faCircle} size='xs' color="#ff8f17" style={{ border: "2px solid rgba(255,193,61,0.26)" }} />
                        <p style={{ color: "#4c5968", fontWeight: "700", fontSize: "16px" }}>1 BTC = ${selectedTime?.perBtc}</p>
                    </div>
                </div>
                <div style={{ height: "20px",  backgroundColor: "white !important", borderRadius: "0px 0px 20px 20px" }}></div>
            </div>
        </div>
    )
}

export default BitcoinPriceGraph;