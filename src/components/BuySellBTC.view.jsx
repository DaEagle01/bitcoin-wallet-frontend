import BuySellBtcCard from './BuySellBtcCard.view';

function BuySellBTC({ from }) {
    return (
        <div style={{ position: "relative", display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "15px 0px", paddingBottom: from === "Home" ? "100px" : "10px" }}>
            <BuySellBtcCard type="Buy" from={from} />
            <BuySellBtcCard type="Sell" from={from} />
        </div>
    )
}

export default BuySellBTC;