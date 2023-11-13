import { useContext } from "react";
import RegionContext from "../context/RegionContext";

const useRegionContext = () => useContext(regionContext);

export default useRegionContext;