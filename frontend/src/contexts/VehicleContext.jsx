import React, { createContext, useContext, useState } from "react";

const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "Honda City", type: "Car", available: true },
    { id: 2, name: "Royal Enfield", type: "Bike", available: true },
  ]);

  const addVehicle = (vehicle) => setVehicles([...vehicles, { ...vehicle, id: vehicles.length + 1 }]);
  const deleteVehicle = (id) => setVehicles(vehicles.filter((v) => v.id !== id));

  return (
    <VehicleContext.Provider value={{ vehicles, addVehicle, deleteVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicles = () => useContext(VehicleContext);
