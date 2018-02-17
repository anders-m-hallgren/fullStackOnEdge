import { Data } from './iData';

export var CHART_MOCK_DATA: Data[] = [
    {
        'name':'AWS',
        "series": [
            {
              "name": "VM",
              "value": 1.73
            },
            {
              "name": "iDB",
              "value": 1.89
            },
            {
                "name": "Lambda",
                "value": 1.29
            },
            {
                "name": "MQ",
                "value": 1.89
            },
            {
                "name": "compute",
                "value": 1.89
            }
          ]
    },
    {
        'name':'Azure',
        "series": [
            {
              "name": "VM",
              "value": 1.92
            },
            {
              "name": "iDB",
              "value": 1.45
            },
            {
                "name": "Lambda",
                "value": 1.39
            },
            {
                "name": "MQ",
                "value": 1.69
            },
            {
                "name": "compute",
                "value": 1.69
            }
          ]
    }
];
  