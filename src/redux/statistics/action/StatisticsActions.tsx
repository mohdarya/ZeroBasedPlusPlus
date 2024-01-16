import {
  IAddCategoryStatistics,
  IAddStatistics,
  StatisticsActionTypes,
} from '../types/StatisticsTypes.tsx';

export function addDailyStatistics(payload: IAddStatistics) {
  return {
    ...payload,
    type: StatisticsActionTypes.ADD_DAILY_STATISTICS,
  };
}

export function addWeeklyStatistics(payload: IAddStatistics) {
  return {
    ...payload,
    type: StatisticsActionTypes.ADD_WEEKLY_STATISTICS,
  };
}

export function addMonthlyStatistics(payload: IAddStatistics) {
  return {
    ...payload,
    type: StatisticsActionTypes.ADD_MONTHLY_STATISTICS,
  };
}

export function addTotalStatistics(payload: IAddStatistics) {
  return {
    ...payload,
    type: StatisticsActionTypes.ADD_TOTAL_STATISTICS,
  };
}

export function addCategoryStatistics(payload: IAddCategoryStatistics) {
  return {
    ...payload,
    type: StatisticsActionTypes.ADD_CATEGORY_STATISTICS,
  };
}
