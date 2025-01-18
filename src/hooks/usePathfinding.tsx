import { useContext } from "react";
import { PathfindingContext } from "../context/PathFindingContextInterface";

export const usePathfinding = () => {
    const context = useContext(PathfindingContext);
    if (!context) {
        throw new Error("Pathfinding must be used within the pathfinding provider context");
    }
    return context;
};
