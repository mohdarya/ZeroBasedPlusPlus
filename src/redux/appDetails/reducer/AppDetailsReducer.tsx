import {
  AppDetailActionTypes,
  IAppDetailActionTypes,
} from '../types/AppDetailTypes.tsx';
import {act} from 'react-test-renderer';

interface IAppDetails {
  categoryFrequency: string[];
  categoryIconList: string[];
  lastDailyBalanceJob: number;
  lastWeeklyBalanceJob: number;
  lastMonthlyJob: number;
}

const initialState = {
  categoryFrequency: ['Daily', 'Weekly', 'Monthly', 'No-Limit'],
  categoryIconList: [
    'child-care',
    'child-friendly',
    'build',
    'cake',
    'book',
    'bakery-dining',
    'auto-awesome',
    'attach-money',
    'brush',
    'call',
    'computer',
    'cookie',
    'cottage',
    'delivery-dining',
    'directions-bike',
    'diamond',
    'drive-eta',
    'eco',
    'electric-scooter',
    'emoji-food-beverage',
    'favorite',
    'flatware',
    'garage',
    'home',
    'hotel',
    'hourglass-bottom',
    'iron',
    'key',
    'kitesurfing',
    'laptop',
    'lightbulb',
    'liquor',
    'local-cafe',
    'local-bar',
    'local-attraction',
    'local-mall',
    'local-movies',
    'local-offer',
    'local-parking',
    'local-pharmacy',
    'local-pizza',
    'local-shipping',
    'mail',
    'lunch-dining',
    'luggage',
    'medical-services',
    'mood',
    'park',
    'percent',
    'pets',
    'psychology',
    'sailing',
    'send',
    'stroller',
    'timer',
    'toys',
    'weekend',
    'yard',
    'work',
    'sailing',
    'person',
    'phone-android',
    'mood-bad',
    'nightlight-round',
  ],
  lastDailyBalanceJob: 0,
  lastWeeklyBalanceJob: 0,
  lastMonthlyJob: 0,
};

export function AppDetailReducer(
  state: IAppDetails = initialState,
  action: IAppDetailActionTypes,
) {
  switch (action.type) {
    case AppDetailActionTypes.SET_DAILY_BALANCE_JOB_TIME:
      return {
        ...state,
        lastDailyBalanceJob: action.time,
      };
    case AppDetailActionTypes.SET_WEEKLY_BALANCE_JOB_TIME:
      return {
        ...state,
        lastWeeklyBalanceJob: action.time,
      };
    case AppDetailActionTypes.SET_MONTHLY_BALANCE_JOB_TIME:
      return {
        ...state,
        lastMonthlyJob: action.time,
      };
    default:
      return state;
  }
}
