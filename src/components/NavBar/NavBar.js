import React from "react";
import "./NavBar.css";
import navbarlogo from "../images/navbarimg.png";
import logo from "../images/logo.png";
import bq from "../images/bq.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ display: "flex" }}>
        <img src={logo} width={129} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginLeft: "24px",
          }}
        >
          <span
            style={{
              fontSize: "44px",
              color: "#F9F602",
              fontWeight: "900",
              lineHeight: "24px",
              letterSpacing: "6px",
              marginTop: "12px",
            }}
          >
            HRIT
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#F9F602",
              letterSpacing: "4px",
              fontWeight: "400",
              marginTop: "8px",
            }}
          >
            UNIVERSITY
          </span>
          <span style={{ fontSize: "10px", color: "#FFFFFF", lineHeight: 1.5 }}>
            Where Tradition Meets Innovation
          </span>

          <span style={{ fontSize: "10px", color: "#FFFFFF", lineHeight: 1.5 }}>
            (Established by U.P. LEGISLATURE ACT NO.
          </span>
          <span style={{ fontSize: "10px", color: "#FFFFFF", lineHeight: 1.5 }}>
            27 of 2010 under Section 2(f) of the UGC Act, 1956)
          </span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "12px",
          }}
        >
          <span
            style={{ color: "#FE8E3D", fontSize: "24px", fontWeight: "800" }}
          >
            Accredited by IAO
          </span>
          <span
            style={{ color: "#FAFAFA", fontSize: "17px", fontWeight: "400" }}
          >
            International Accreditation
          </span>
          <span
            style={{ color: "#FAFAFA", fontSize: "17px", fontWeight: "400" }}
          >
            Organization
          </span>
        </div>
        <img src={bq} width={151} height={77} />
      </div>
    </nav>
  );
}

export default Navbar;
