import { useState } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Main App Rendering */}
      <AppRoutes />
    </>
  );
}

export default App;
