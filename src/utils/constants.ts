import { MazeSelectType, SpeedSelectType } from "./types";
import { AlgorithmSelectType } from "./types";

export const MAX_ROWS = 59;
export const MAX_COLS = 99;

export const START_TILE_CONFIGURATION = {
  row: 1,
  col: 1,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isTraversed: false,
  parents: null,
};

export const END_TILE_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isStart: false,
  isEnd: false,
  isWall: false,
  isPath: false,
  distance: 0,
  isTraversed: false,
  parents: null,
};


export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "BINARY_TREE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

export const SPEEDS: SpeedSelectType[] = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.1 },
];

export const SLEEP_TIME = 8;
export const EXTENDED_SLEEP_TIME = 30;

export const PATHFINDING_ALGORITHMS: AlgorithmSelectType[] = [
  { name: "Dijkstra", value: "DIJKSTRA" },
  { name: "BFS", value: "BFS" },
  { name: "A-Star", value: "A_STAR" },
  { name: "DFS", value: "DFS" },
];

/* export const TILE_STYLE =
  "lg:w-[17px] md:w-[15px] xs:w-[8px] w-[7px] lg:h-[17px] md:h-[15px] xs:h-[8px] h-[7px] border-t border-r border-sky-200";
export const TRAVERSED_TILE_STYLE = TILE_STYLE + " bg-cyan-500";
export const START_TILE_STYLE = TILE_STYLE + " bg-green-500";
export const END_TILE_STYLE = TILE_STYLE + " bg-red-600";
export const WALL_TILE_STYLE = TILE_STYLE + " bg-gray-200";
export const PATH_TILE_STYLE = TILE_STYLE + " bg-green-600"; */






 export const TILE_STYLE =
  "lg:w-[11px] md:w-[11px] xs:w-[11px] w-[11px] lg:h-[11px] md:h-[11px] xs:h-[11px] h-[11px] \
  border border-cyan-200 rounded-[4px] \
  shadow-[0_0_8px_3px rgba(0,255,150,0.3)] transition-transform duration-200 ease-out \
hover:shadow-[0_-8px_16px_#39FF14,0_8px_16px_#39FF14,-8px_0_16px_#39FF14,8px_0_16px_#39FF14]";

export const TRAVERSED_TILE_STYLE =
  TILE_STYLE +
  " bg-gradient-to-b from-indigo-300 to-blue-200 shadow-none \
  transition-shadow duration-300";

export const START_TILE_STYLE =
  TILE_STYLE +
  " bg-gradient-to-b from-blue-700 to-teal-500 shadow-[0_0_8px_4px rgba(20,184,166,0.3)] \
  hover:shadow-[0_0_16px_8px rgba(0,255,0,0.5)] hover:shadow-green-500\
  shadow-[0_-8px_16px_#3b82f6,0_8px_16px_#3b82f6,-8px_0_16px_#3b82f6,8px_0_16px_#3b82f6]\
  animate-bounce";

export const END_TILE_STYLE =
  TILE_STYLE +
  " bg-gradient-to-b from-red-700 to-orange-500 shadow-[0_0_8px_4px rgba(239,68,68,0.3)] \
  hover:shadow-[0_0_16px_8px rgba(0,255,0,0.5] hover:shadow-green-500\
  shadow-[0_-8px_16px_#e11d48,0_8px_16px_#e11d48,-8px_0_16px_#e11d48,8px_0_16px_#e11d48]\
  animate-bounce";

export const WALL_TILE_STYLE =
  "lg:w-[11px] md:w-[11px] xs:w-[11px] w-[11px] \
  lg:h-[11px] md:h-[11px] xs:h-[11px] h-[11px] \
  border-[1px] border-slate-900 \
  bg-gradient-to-bl from-gray-300 via-slate-700 to-teal-700 \
  shadow-[0_0_8px_4px rgba(0,255,150,0.3)] \
  hover:shadow-[0_0_16px_8px rgba(0,255,0,0.5)] hover:shadow-green-500 \
  rounded-[4px] transition-shadow duration-300 transition-transform duration-200 ease-out";

export const PATH_TILE_STYLE =
  TILE_STYLE +
  " bg-gradient-to-b from-rose-800 via-purple-700 to-rose-600 \
  shadow-[0_0_20px_10px rgba(255,0,255,0.8)] hover:shadow-[0_0_25px_15px rgba(255,105,180,1)]  ";
 
