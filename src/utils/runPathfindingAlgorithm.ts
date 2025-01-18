import { aStar } from "../lib/Algorithms/Pathfinding/aStar";
import { bfs } from "../lib/Algorithms/Pathfinding/bfs";
import { dfs } from "../lib/Algorithms/Pathfinding/dfs";
import { dijkstra } from "../lib/Algorithms/Pathfinding/dijkstra";
import { AlgorithmType, GridType, TileType } from "./types";


export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: AlgorithmType;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    case "DIJKSTRA":
      return dijkstra(grid, startTile, endTile);
    case "A_STAR":
      return aStar(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};