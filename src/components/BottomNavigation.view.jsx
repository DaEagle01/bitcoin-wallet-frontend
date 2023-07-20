import { faBell, faCompass, faGear, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BottomNavigation() {
    return (
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "white", padding: "0px 20px", zIndex: 999 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px" }}>
                <FontAwesomeIcon icon={faWallet} size='2x' color="#4c5968" />
                <FontAwesomeIcon icon={faCompass} size='2x' color="#aeb8c4" />
                <FontAwesomeIcon icon={faBell} size='2x' color="#aeb8c4" />
                <FontAwesomeIcon icon={faGear} size='2x' color="#aeb8c4" />
            </div>
        </div>
    )
}

export default BottomNavigation;