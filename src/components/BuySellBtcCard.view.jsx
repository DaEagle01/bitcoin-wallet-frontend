import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function BuySellBtcCard({ type, from }) {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <div
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
                backgroundColor: from === "Home" ? "white" : "#e5eaf1",
                padding: "20px 30px",
                borderRadius: "15px",
                filter: "drop-shadow(0px 59px 55.5px rgba(154, 155, 176, 0.17))",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "25%",
                transition: "transform 0.4s ease-in-out",
                transform: isHovering ? "scale(1.1)" : "scale(1)"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundImage:
                        type === "Buy"
                            ? "linear-gradient(0deg, #1d71f1 0%, #17c7fb 100%)"
                            : "linear-gradient(0deg, #fa23a2 0%, #ff677c 100%)",
                    width: "50px",
                    height: "50px"
                }}
            >
                <FontAwesomeIcon
                    icon={faDollarSign}
                    size="lg"
                    style={{ color: "white" }}
                />
            </div>
            <p style={{ textAlign: "center", margin: "10px 0px", fontWeight: "bold", color: "#4c5968", }}>{type} BTC</p>
        </div>
    );
}

export default BuySellBtcCard;
