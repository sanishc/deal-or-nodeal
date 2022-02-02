export interface AppState {
  round: number;
  boxes: Box[];
  moneyTree: number[];
  limit: number;
  remainingBoxes: number;
  roundComplete: boolean;
  offerAmount: number;
  gameComplete: boolean;
  amountWon: number;
  tradeBoxAmount: number;
  playerWon: boolean;
}

export interface Box {
  number: number;
  amount: number;
  opened: boolean;
}
