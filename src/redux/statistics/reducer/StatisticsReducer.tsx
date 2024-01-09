import {
    ICategoryStatistics, ICategoryStatisticsItem,
    IStatisticsActionTypes,
    IStatisticsItem,
    IStatisticsState,
    StatisticsActionTypes
} from "../types/StatisticsTypes.tsx";
import {CategoryActionTypes} from "../../category/types/CategoryTypes.tsx";
import {act} from "react-test-renderer";

const initialState: IStatisticsState = {
    daily: [],
    weekly: [],
    monthly: [],
    total: [],
    categories: {},

};

export function StatisticsReducer(state: IStatisticsState = initialState, action: IStatisticsActionTypes)
{
    switch (action.type)
    {
        case StatisticsActionTypes.ADD_DAILY_STATISTICS:

            let daily: IStatisticsItem[] = [...state.daily];

            const dailyItem: IStatisticsItem = {
                timestamp: action.timestamp,
                value: action.value

            }
            daily.push(dailyItem)

            return {
                ...state,
                daily: [...daily]
            };

        case StatisticsActionTypes.ADD_WEEKLY_STATISTICS:
            let weekly: IStatisticsItem[] = [...state.weekly];

            const weeklyItem: IStatisticsItem = {
                timestamp: action.timestamp,
                value: action.value

            }
            weekly.push(weeklyItem)

            return {
                ...state,
                weekly: [...weekly]
            };

        case StatisticsActionTypes.ADD_MONTHLY_STATISTICS:
            let monthly: IStatisticsItem[] = [...state.monthly];
            const monthlyItem: IStatisticsItem = {
                timestamp: action.timestamp,
                value: action.value

            }
            monthly.push(monthlyItem)

            return {
                ...state,
                monthly: [...monthly]
            };
        case StatisticsActionTypes.ADD_TOTAL_STATISTICS:
            let total: IStatisticsItem[] = [...state.total];
            const totalItem: IStatisticsItem = {
                timestamp: action.timestamp,
                value: action.value

            }
            total.push(totalItem)

            return {
                ...state,
                total: [...total]
            };

        case StatisticsActionTypes.ADD_CATEGORY_STATISTICS:
            let categoryStatistics: ICategoryStatisticsItem = {
                ...action.data
            }
            if (action.categoryId in state.categories)
            {
                categoryStatistics = {...state.categories[action.categoryId], ...categoryStatistics};
            }
            let categoryStatisticsArray: ICategoryStatisticsItem[] = [...state.categories[action.categoryId]];
            categoryStatisticsArray.push(categoryStatistics)
            return {
                ...state,
                categories:
                    {
                        ...state.categories,
                        [action.categoryId] : categoryStatisticsArray
                    }
            };
        default:
            return state;
    }
}
