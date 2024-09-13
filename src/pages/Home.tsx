import { Button } from "@mui/material";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: "1rem",
      }}
    >
      <Link to="/modal">
        <Button variant="contained">Modal</Button>
      </Link>

      <Link to="/detail">
        <Button variant="contained">Detail</Button>
      </Link>
    </div>
  );
}

export default Home;
