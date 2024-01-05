import {IStatisticsActionTypes, IStatisticsState} from "../types/StatisticsTypes.tsx";

const initialState: IStatisticsState = {
    daily: [{
        value: 100,
        timestamp: new Date('2023-07-16T00:00:00.000Z').getTime()
        },
        {
            value: 23,
            timestamp: new Date('2023-07-19T14:23:21.723Z').getTime()
        },
        {
            value: 299,
            timestamp: new Date('2023-07-20T14:23:31.384Z').getTime()
        },
        {
            value: 300,
            timestamp: new Date('2023-07-21T14:23:31.384Z').getTime()
        },
        {
            value: 1200,
            timestamp: new Date('2023-07-22T14:23:31.384Z').getTime()
        },
        {
            value: 2000,
            timestamp: new Date('2023-07-23T14:23:31.384Z').getTime()
        },
        {
            value: 1201,
            timestamp: new Date('2023-07-24T14:23:31.384Z').getTime()
        },
        {
            value: 1000,
            timestamp: new Date('2023-07-25T14:23:31.384Z').getTime()
        },
        {
            value: 0,
            timestamp: new Date('2023-07-26T14:23:31.384Z').getTime()
        },
        {
            value: 500,
            timestamp: new Date('2023-07-27T14:23:31.384Z').getTime()
        },
        {
            value: 8000,
            timestamp: new Date('2023-07-28T14:23:31.384Z').getTime()
        }
    ],
    weekly: [{
        value: 2000,
        timestamp: new Date('2023-07-16T00:00:00.000Z').getTime()
    },
        {
            value: 23000,
            timestamp: new Date('2023-07-19T14:23:21.723Z').getTime()
        },
        {
            value: 2990,
            timestamp: new Date('2023-07-20T14:23:31.384Z').getTime()
        },
        {
            value: 3000,
            timestamp: new Date('2023-07-21T14:23:31.384Z').getTime()
        },
        {
            value: 12000,
            timestamp: new Date('2023-07-22T14:23:31.384Z').getTime()
        },
        {
            value: 20000,
            timestamp: new Date('2023-07-23T14:23:31.384Z').getTime()
        },
        {
            value: 12010,
            timestamp: new Date('2023-07-24T14:23:31.384Z').getTime()
        },
        {
            value: 10000,
            timestamp: new Date('2023-07-25T14:23:31.384Z').getTime()
        },
        {
            value: 100,
            timestamp: new Date('2023-07-26T14:23:31.384Z').getTime()
        },
        {
            value: 5000,
            timestamp: new Date('2023-07-27T14:23:31.384Z').getTime()
        },
        {
            value: 80,
            timestamp: new Date('2023-07-28T14:23:31.384Z').getTime()
        }],
    monthly: [{
        value: 100,
        timestamp: new Date('2023-07-16T00:00:00.000Z').getTime()
    },
        {
            value: 23,
            timestamp: new Date('2023-07-19T14:23:21.723Z').getTime()
        },
        {
            value: 299,
            timestamp: new Date('2023-07-20T14:23:31.384Z').getTime()
        },
        {
            value: 300,
            timestamp: new Date('2023-07-21T14:23:31.384Z').getTime()
        },
        {
            value: 1200,
            timestamp: new Date('2023-07-22T14:23:31.384Z').getTime()
        },
        {
            value: 2000,
            timestamp: new Date('2023-07-23T14:23:31.384Z').getTime()
        },
        {
            value: 1201,
            timestamp: new Date('2023-07-24T14:23:31.384Z').getTime()
        },
        {
            value: 1000,
            timestamp: new Date('2023-07-25T14:23:31.384Z').getTime()
        },
        {
            value: 10000,
            timestamp: new Date('2023-07-26T14:23:31.384Z').getTime()
        },
        {
            value: 500,
            timestamp: new Date('2023-07-27T14:23:31.384Z').getTime()
        },
        {
            value: 8000,
            timestamp: new Date('2023-07-28T14:23:31.384Z').getTime()
        }]

};

export function StatisticsReducer(state: IStatisticsState = initialState, action: IStatisticsActionTypes) {
    switch (action.type) {

        default:
            return state;
    }
}
