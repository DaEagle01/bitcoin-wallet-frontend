import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBitcoinSign } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import BuySellBtcCard from './BuySellBtcCard.view';

function CurrentAmount() {
    const [showBuySellCards, setShowBuySellCards] = useState(false);

    return (
        <div style={{ margin: "30px 30px 20px 30px", padding: "20px 10px 20px 10px", backgroundColor: "white", borderRadius: "30px", filter: "drop-shadow(0px 59px 55.5px rgba(154,155,176,0.17))" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 10px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            backgroundImage: "linear-gradient(0deg, #ff8f17 0%, #ffc743 100%)",
                            width: "50px",
                            height: "50px"
                        }}>
                        <FontAwesomeIcon icon={faBitcoinSign} size='lg' color="white" />
                    </div>
                    <p style={{ color: "#4c5968", fontWeight: "bold", }}>Bitcoin</p>
                </div>
                <p style={{ color: "#aeb8c4", fontWeight: "bold", }}>BTC</p>
            </div>
            <p style={{ color: "#4c5968", fontWeight: "600", fontSize: "30px", margin: "10px 0px 0px 0px", padding: "0px 10px" }}>3.529020BTC</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0px", padding: "0px 10px" }}>
                <p style={{ color: "#aeb8c4", fontSize: "20px", lineHeight: "20px", fontWeight: "500", margin: "0px" }}>$19.153 USD</p>
                <p style={{ backgroundColor: "#ee225d", color: "white", fontSize: "14px", fontWeight: "500", padding: "2px 10px", borderRadius: "20px" }}>-2.3%</p>
            </div>
            <div style={{ textAlign: "center" }}>
                <FontAwesomeIcon onClick={() => setShowBuySellCards(pre => !pre)} icon={faAngleDown} size='lg' style={{ color: "#aeb8c4" }} />
            </div>
            <div style={{
                opacity: showBuySellCards ? 1 : 0,
                width: showBuySellCards ? "100%" : 0,
                height: showBuySellCards ? "100%" : 0,
                transition: showBuySellCards ?
                    "width 0.9s, height 0.9s, opacity 0.1s 0.1s" :
                    "width 0.5s 0.5s, height 0.5s 0.5s, opacity 0.5s",
            }}>
                {showBuySellCards &&
                    <div style={{
                        display: "flex", justifyContent: "space-evenly", alignItems: "center", gap: "15px", padding: "15px 10px", transition: "opacity 0.5s ease", opacity: showBuySellCards ? 1 : 0,
                    }}>
                        <BuySellBtcCard type="Buy" />
                        <BuySellBtcCard type="Sell" />
                    </div>
                }
            </div>
        </div>
    )
}

export default CurrentAmount;