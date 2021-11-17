const initialState = 0;

// type Action = {
//   type: string,
//   payload?: number
// }

interface DepositAction {
  type: 'deposit'
  payload: number
}

interface WithdrawalAction {
  type: 'withdraw'
  payload: number
}

interface BankruptAction {
  type: 'bankrupt'
}

type Action = DepositAction | WithdrawalAction | BankruptAction;

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case 'deposit':
      return state + action.payload;
    case 'withdraw':
      return state - action.payload;
    case 'bankrupt':
      return 0;
    default:
      return state;
  }
}

export default reducer;