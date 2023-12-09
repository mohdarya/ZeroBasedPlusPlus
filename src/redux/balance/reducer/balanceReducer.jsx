const initialState = {
  dailyRemaining: 201.12,
  weeklyRemaining: 12.0,
  available: 1000.0,
  unallocated: 0.0,
  allocated: 0.0,
};

export function balanceReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
