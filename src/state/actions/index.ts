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

export type Action = DepositAction | WithdrawalAction | BankruptAction;
