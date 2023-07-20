import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faCircleMinus, faClipboard, faEllipsisVertical, faPrint, faUpload } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useRef } from 'react'; // Import useState, useEffect, and useRef hooks

const DropDown = ({ dropdownOptions }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minWidth: "8rem", gap: "10px", marginLeft: "20px", padding: "20px 0px 20px 0px" }}>
            {dropdownOptions?.map(option => (
                <div key={option.label} style={{ display: "flex", flexDirection: "column" }}>
                    <div key={option.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "10px" }}>
                        <p style={{ margin: "0px", color: option.iconColor }}>{option.label}</p>
                        <FontAwesomeIcon icon={option.icon} rotation={option.rotation} color={option.iconColor} size='lg' />
                    </div>
                    {option.label !== "Remove" && <hr style={{ width: "100%", margin: "10px 0px 5px 0px" }} />}
                </div>
            ))}
        </div>
    )
}

function Header() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = (event) => {
        event.stopPropagation(); // Prevent the click event from bubbling up to the document
        setDropdownVisible(!isDropdownVisible);
    };

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const dropdownOptions = [
        { label: "Edit", icon: faPrint, iconColor: "black", rotation: 270 },
        { label: "Courier info", icon: faClipboard, iconColor: "black", rotation: 0 },
        { label: "Share", icon: faUpload, iconColor: "black", rotation: 0 },
        { label: "Remove", icon: faCircleMinus, iconColor: "red", rotation: 0 }
    ];

    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0px 16px 0px 16px", backgroundColor: "white" }}>
            <FontAwesomeIcon icon={faAngleLeft} size='lg' style={{ color: "#aeb8c4" }} />
            <p style={{ fontSize: "24px", color: "#4c5968", fontWeight: "bold" }}>Bitcoint Wallet</p>
            <FontAwesomeIcon icon={faEllipsisVertical} size='lg' style={{ color: "#aeb8c4", cursor: "pointer" }} onClick={toggleDropdown} />
            {isDropdownVisible && (
                <div ref={dropdownRef} style={{ position: "absolute", top: "50px", right: "22px", backgroundColor: "white", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "14px", zIndex: "2" }}>
                    <DropDown dropdownOptions={dropdownOptions} />
                </div>
            )}
            {isDropdownVisible && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(56, 56, 56, 0.60)",
                        zIndex: "1"
                    }}
                />
            )}
        </div>
    )
}

export default Header;

