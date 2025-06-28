export type Player = {
  name: string;
  played: number;
  score: number;
  active: boolean;
};

export type MatchHistory = {
  match: number;
  team1: [Player, Player];
  team2: [Player, Player];
  winner: [Player, Player];
};
