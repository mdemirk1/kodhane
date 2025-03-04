import "../styles/globals.css";
import { useState, useEffect } from "react";
import Maintenance from "./maintenance";

function MyApp({ Component, pageProps }) {
  // Bakım modunu buradan kontrol edebilirsin.
  const [maintenanceMode, setMaintenanceMode] = useState(true); // true = bakım açık

  useEffect(() => {
    // Eğer bakım modunu değiştirmek istersen buradan yönetebilirsin.
    // Örneğin, bunu localStorage veya bir API'den alabilirsin.
  }, []);

  return maintenanceMode ? <Maintenance /> : <Component {...pageProps} />;
}

export default MyApp;
