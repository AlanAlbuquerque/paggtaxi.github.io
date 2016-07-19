define({ "api": [
  {
    "type": "post",
    "url": "/transactions/",
    "title": "Request transactions",
    "name": "GetTransactions",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Driver user id in Paggtaxi (Given in login request)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Session token of driver user (Given in login request)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": "<p>List of search filters [&quot;create_at_lte&quot;, &quot;create_at_gte&quot;, &quot;create_at_date&quot;]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": 9999,\n    \"token\": \"4dq-fe1afef7ce8141a24576\",\n    \"transactions\": {\n        \"create_at_lte\": \"2016-07-19T11:00:00-0300\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "root": [
          {
            "group": "root",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>id of the User in Paggtaxi server</p>"
          },
          {
            "group": "root",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Result of request</p>"
          },
          {
            "group": "root",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": "<p>List containing the transactions</p>"
          }
        ],
        "[node] transactions": [
          {
            "group": "[node] transactions",
            "type": "Array",
            "optional": false,
            "field": "precreate",
            "description": "<p>List containing the &quot;precreate&quot; transactions</p>"
          },
          {
            "group": "[node] transactions",
            "type": "Array",
            "optional": false,
            "field": "voucher",
            "description": "<p>List containing the &quot;voucher&quot; transactions</p>"
          },
          {
            "group": "[node] transactions",
            "type": "Array",
            "optional": false,
            "field": "card_transaction",
            "description": "<p>List containing the &quot;card&quot; transactions</p>"
          }
        ],
        "[item] precreate": [
          {
            "group": "[item] precreate",
            "type": "String",
            "optional": false,
            "field": "seller_id",
            "description": "<p>CPF of driver</p>"
          },
          {
            "group": "[item] precreate",
            "type": "String",
            "optional": false,
            "field": "initiator_transaction_identification",
            "description": "<p>ID created by Paggtaxi APP before the transaction go to the acquirer</p>"
          },
          {
            "group": "[item] precreate",
            "type": "String",
            "optional": false,
            "field": "create_at",
            "description": "<p>DATETIME (ISO8601)</p>"
          },
          {
            "group": "[item] precreate",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Gross amount of transaction</p>"
          },
          {
            "group": "[item] precreate",
            "type": "String",
            "optional": false,
            "field": "payment_type",
            "description": "<p>&quot;DEBIT&quot; or &quot;CREDIT&quot;</p>"
          },
          {
            "group": "[item] precreate",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>&quot;STONE&quot; or &quot;ZOOP&quot;</p>"
          }
        ],
        "[item] voucher": [
          {
            "group": "[item] voucher",
            "type": "String",
            "optional": false,
            "field": "start_at",
            "description": "<p>Date of start ride - DATETIME (ISO8601)</p>"
          },
          {
            "group": "[item] voucher",
            "type": "String",
            "optional": false,
            "field": "create_at",
            "description": "<p>Date of voucher creation - DATETIME (ISO8601)</p>"
          },
          {
            "group": "[item] voucher",
            "type": "String",
            "optional": false,
            "field": "finish_at",
            "description": "<p>Date of finish ride - DATETIME (ISO8601)</p>"
          },
          {
            "group": "[item] voucher",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Gross amount of ride</p>"
          },
          {
            "group": "[item] voucher",
            "type": "String",
            "optional": false,
            "field": "voucher",
            "description": "<p>Unique identifier of voucher</p>"
          },
          {
            "group": "[item] voucher",
            "type": "Boolean",
            "optional": false,
            "field": "offline",
            "description": "<p>This ride is created by cab cooperative operators?</p>"
          },
          {
            "group": "[item] voucher",
            "type": "String",
            "optional": false,
            "field": "os",
            "description": "<p>Unique identifier of ride in cab cooperative system</p>"
          }
        ],
        "[item] card_transaction": [
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "seller_id",
            "description": "<p>CPF of driver</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "initiator_transaction_identification",
            "description": "<p>ID created by Paggtaxi APP before the transaction go to the acquirer</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "create_at",
            "description": "<p>DATETIME (ISO8601)</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>Gross amount of transaction</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "payment_type",
            "description": "<p>&quot;DEBIT&quot; or &quot;CREDIT&quot;</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "provider",
            "description": "<p>&quot;STONE&quot; or &quot;ZOOP&quot;</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "Boolean",
            "optional": false,
            "field": "reversed",
            "description": "<p>This transaction was reversed?</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "transaction_id",
            "description": "<p>Transaction ID</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "transaction_reference",
            "description": "<p>Transaction receipt number in acquirer</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "time_to_pass",
            "description": "<p>Time to pass the transaction in the PIN pad</p>"
          },
          {
            "group": "[item] card_transaction",
            "type": "String",
            "optional": false,
            "field": "transaction_status",
            "description": "<p>&quot;CREATED&quot; or &quot;REVERSED&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorMessage\": \"\",\n  \"userId\": 6099,\n  \"success\": true,\n  \"transactions\": {\n    \"precreate\": [\n      {\n        \"seller_id\": \"90245202900\",\n        \"initiator_transaction_identification\": \"64762495-90970059919646200858199998-90245202900\",\n        \"create_at\": \"2016-07-19T10:16:56-0300\",\n        \"amount\": \"48.65\",\n        \"payment_type\": \"CREDIT\",\n        \"provider\": \"STONE\"\n      },\n    ],\n    \"voucher\": [\n      {\n        \"start_at\": \"2016-03-11T14:04:41-0300\",\n        \"create_at\": \"2016-03-11T13:55:58-0300\",\n        \"finish_at\": \"2016-03-11T14:14:28-0300\",\n        \"amount\": \"14.20\",\n        \"voucher\": \"fafi\",\n        \"offline\": false,\n        \"os\": \"2665290\"\n      }\n    ],\n    \"card_transaction\": [\n      {\n        \"reversed\": false,\n        \"transaction_status\": \"CREATED\",\n        \"time_to_pass\": \"00m 02s\",\n        \"transaction_reference\": \"28860104269502\",\n        \"seller_id\": \"90245202900\",\n        \"initiator_transaction_identification\": \"18064762508-618800174311882\",\n        \"create_at\": \"2016-07-06T14:22:30-0300\",\n        \"amount\": \"31.35\",\n        \"payment_type\": \"DEBIT\",\n        \"provider\": \"STONE\",\n        \"transaction_id\": \"18064762508-618800174311882\"\n      },\n    ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "/home/paggtaxi/myprojects/pagg_taxi/pagg_taxi/apps/api_paggtaxi_app/views/transactions.py",
    "groupTitle": "Transactions"
  }
] });
