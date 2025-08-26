import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav
            style={{
                background: "#f0f0f0",
                padding: "1rem",
                marginBottom: "2rem",
                borderRadius: "8px",
            }}
        >
            <ul
                style={{
                    listStyle: "none",
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "center",
                    margin: 0,
                    padding: 0,
                }}
            >
                <li>
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#333" }}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        style={{ textDecoration: "none", color: "#333" }}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        style={{ textDecoration: "none", color: "#333" }}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
