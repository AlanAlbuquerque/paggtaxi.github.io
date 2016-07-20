define({ "api": [
  {
    "type": "post",
    "url": "/login-driver/",
    "title": "Authenticate driver",
    "name": "GetAuthenticate",
    "group": "Authenticate",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"login\": \"00000000000\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "login",
            "description": "<p>CPF of the driver</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of driver (the same used to authenticate in the Paggtaxi)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"userId\": 9999,\n    \"token\": \"4dr-5c89e2fe5002fa5732e5\",\n    \"cpf\": \"00000000000\",\n    \"sellerId\": \"f89b46168b454fbbb449feff4ae4b255\",\n    \"userName\": \"John Richard\",\n    \"transactionShortName\": \"TAXI John\"\n    \"allowedPayments\": [\n        \"money\",\n        \"voucher\",\n        \"card\",\n        \"paggtaxi\"\n    ],\n    \"debitGateway\": \"stone\",\n    \"creditGateway\": \"stone\",\n    \"contractType\": 20,\n    \"profilePhoto\": \"http://site.com/media/4218-f1c97f222ad246d592580ba221a7404b.jpg\",\n    \"coopName\": \"Coop\",\n    \"errorMessage\": \"\",\n    \"success\": true,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>Driver ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Driver session token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cpf",
            "description": "<p>CPF of the driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sellerId",
            "description": "<p>Seller ID of the driver to create Zoop transactions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>Full name of driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactionShortName",
            "description": "<p>Name to show in card receipt</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "allowedPayments",
            "description": "<p>Types of payment accepted by taxi driver</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "debitGateway",
            "description": "<p>Acquirer to use on create debit transactions - enum(&quot;stone&quot;, &quot;zoop&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "creditGateway",
            "description": "<p>Acquirer to use on create credit transactions - enum(&quot;stone&quot;, &quot;zoop&quot;)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "contractType",
            "description": "<p>Type of driver contract - enum(10, 20)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "contractType.10",
            "description": "<p>Can use all application features.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "contractType.20",
            "description": "<p>Can use only card transactions.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "profilePhoto",
            "description": "<p>URL of driver profile photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "coopName",
            "description": "<p>Name of cab cooperative</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/paggtaxi/myprojects/pagg_taxi/pagg_taxi/apps/api_paggtaxi_app/views/apidoc.py",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/transactions/",
    "title": "List transactions by period",
    "name": "GetTransactions",
    "group": "Transactions",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": 9999,\n    \"token\": \"4dq-fe1afef7ce8141a24576\",\n    \"transactions\": {\n        \"created_at_lte\": \"2016-07-19T11:00:00-0300\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Driver ID (given in login request)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Driver session token (given in login request)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": "<p>List of search filters [&quot;created_at_lte&quot;, &quot;created_at_gte&quot;, &quot;created_at_date&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactions.created_at_date",
            "description": "<p>enum(&quot;today&quot;, &quot;last_day&quot;, &quot;this_week&quot;, &quot;last_week&quot;) or DATE (ISO8601)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactions.created_at_gte",
            "description": "<p>DATETIME (ISO8601)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactions.created_at_lte",
            "description": "<p>DATETIME (ISO8601)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactions.datetime_sync",
            "description": "<p>DATETIME (ISO8601)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "transactions.card_status",
            "description": "<p>enum(&quot;REVERSED&quot;, &quot;CREATED&quot;, &quot;ALL&quot;) pass &quot;ALL&quot; or not pass this filter to return all transactions</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"datetime_sync\": \"2016-07-19T17:35:48-0300\",\n  \"errorMessage\": \"\",\n  \"userId\": 6099,\n  \"success\": true,\n  \"transactions\": {\n    \"precreate\": [\n      {\n        \"amount\": \"48.65\",\n        \"transaction_reference\": null,\n        \"time_to_pass\": null,\n        \"payment_type\": \"CREDIT\",\n        \"provider\": \"STONE\",\n        \"reversed\": false,\n        \"initiator_transaction_identification\": \"64762495-90970059919646200858199998-90245202900\",\n        \"transaction_status\": \"PRECREATED\",\n        \"created_at\": \"2016-07-19T10:16:56-0300\",\n        \"transaction_id\": null\n      }\n    ],\n    \"voucher\": [\n      {\n        \"start_at\": \"2016-06-23T10:09:11-0300\",\n        \"created_at\": \"2016-06-23T08:12:16-0300\",\n        \"finish_at\": \"2016-06-23T10:17:04-0300\",\n        \"amount\": \"14.25\",\n        \"voucher\": \"fkbg\",\n        \"offline\": false,\n        \"os\": \"2695792\"\n      }\n    ],\n    \"card_transaction\": [\n      {\n        \"amount\": \"22.65\",\n        \"initiator_transaction_identification\": \"18064762508-619300274310433\",\n        \"time_to_pass\": \"00m 02s\",\n        \"payment_type\": \"DEBIT\",\n        \"provider\": \"STONE\",\n        \"reversed\": false,\n        \"transaction_reference\": \"29360107039272\",\n        \"transaction_status\": \"CREATED\",\n        \"created_at\": \"2016-07-11T10:23:55-0300\",\n        \"transaction_id\": \"897a9\"\n      },\n      {\n        \"amount\": \"21.10\",\n        \"initiator_transaction_identification\": null,\n        \"time_to_pass\": null,\n        \"payment_type\": \"CREDIT\",\n        \"provider\": \"ZOOP\",\n        \"reversed\": false,\n        \"transaction_reference\": \"2fce816ef4bc48c98d16ca6ec1059d09\",\n        \"transaction_status\": \"CREATED\",\n        \"created_at\": \"2015-09-01T00:28:21-0300\",\n        \"transaction_id\": null\n      }\n    ]\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>Driver ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "datetime_sync",
            "description": "<p>Date of last sync DATETIME (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": "<p>List of transactions</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transactions.precreate",
            "description": "<p>List containing the &quot;precreate&quot; transactions</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transactions.voucher",
            "description": "<p>List containing the &quot;voucher&quot; transactions</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transactions.card_transaction",
            "description": "<p>List containing the &quot;card&quot; transactions</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.precreate.seller_id",
            "description": "<p>CPF of driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.precreate.initiator_transaction_identification",
            "description": "<p>ID created by Paggtaxi APP before the transaction go to the acquirer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.precreate.created_at",
            "description": "<p>DATETIME (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.precreate.amount",
            "description": "<p>Gross amount of transaction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.precreate.payment_type",
            "description": "<p>enum('DEBIT', 'CREDIT')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.precreate.provider",
            "description": "<p>enum('STONE', 'ZOOP')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.voucher.start_at",
            "description": "<p>Date of start ride - DATETIME (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.voucher.created_at",
            "description": "<p>Date of voucher creation - DATETIME (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.voucher.finish_at",
            "description": "<p>Date of finish ride - DATETIME (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.voucher.amount",
            "description": "<p>Gross amount of ride</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.voucher.voucher",
            "description": "<p>Unique ID of voucher</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "transactions.voucher.offline",
            "description": "<p>This ride was created by cab cooperative operators?</p>"
          },
          {
            "group": "Success 200",
            "type": "String-null",
            "optional": false,
            "field": "transactions.voucher.os",
            "description": "<p>Unique ID of ride in cab cooperative system</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.card_transaction.seller_id",
            "description": "<p>CPF of driver</p>"
          },
          {
            "group": "Success 200",
            "type": "String-null",
            "optional": false,
            "field": "transactions.card_transaction.initiator_transaction_identification",
            "description": "<p>ID created by Paggtaxi APP before the transaction go to the acquirer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.card_transaction.created_at",
            "description": "<p>DATETIME (ISO8601)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.card_transaction.amount",
            "description": "<p>Gross amount of transaction</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.card_transaction.payment_type",
            "description": "<p>enum('DEBIT', 'CREDIT')</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.card_transaction.provider",
            "description": "<p>enum('STONE', 'ZOOP')</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "transactions.card_transaction.reversed",
            "description": "<p>This transaction was reversed?</p>"
          },
          {
            "group": "Success 200",
            "type": "String-null",
            "optional": false,
            "field": "transactions.card_transaction.transaction_id",
            "description": "<p>Transaction ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String-null",
            "optional": false,
            "field": "transactions.card_transaction.transaction_reference",
            "description": "<p>Transaction receipt number in acquirer</p>"
          },
          {
            "group": "Success 200",
            "type": "String-null",
            "optional": false,
            "field": "transactions.card_transaction.time_to_pass",
            "description": "<p>Elapsed time to pass the transaction in the PIN Pad</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transactions.card_transaction.transaction_status",
            "description": "<p>enum('CREATED', 'REVERSED', 'PRECREATED')</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/paggtaxi/myprojects/pagg_taxi/pagg_taxi/apps/api_paggtaxi_app/views/apidoc.py",
    "groupTitle": "Transactions",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errorMessage",
            "description": "<p>Error description</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"errorMessage\": \"Invalid search parameters\",\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/transactions/",
    "title": "Get transaction",
    "name": "GetTransactionsOne",
    "group": "Transactions",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"userId\": 9999,\n    \"token\": \"4dq-fe1afef7ce8141a24576\",\n    \"transaction\": {\n        \"initiator_transaction_identification\": \"64762495-90970059919646200858199998-90245202900\" # WHEN STONE\n        \"transaction_reference\": \"2fce816ef4bc48c98d16ca6ec1059d09\" # WHEN ZOOP\n        \"voucher\": \"abcd\" # WHEN VOUCHER\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Driver ID (given in login request)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Driver session token (given in login request)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "transaction",
            "description": "<p>Transaction identifier to search</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "[STONE or ZOOP] Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorMessage\": \"\",\n  \"userId\": 6099,\n  \"success\": true,\n  \"transactions\": {\n    \"amount\": \"21.10\",\n    \"initiator_transaction_identification\": null,\n    \"time_to_pass\": null,\n    \"payment_type\": \"CREDIT\",\n    \"provider\": \"ZOOP\",\n    \"reversed\": false,\n    \"transaction_reference\": \"2fce816ef4bc48c98d16ca6ec1059d09\",\n    \"transaction_status\": \"CREATED\",\n    \"created_at\": \"2015-09-01T00:28:21-0300\",\n    \"transaction_id\": null\n  }\n}",
          "type": "json"
        },
        {
          "title": "[VOUCHER] Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errorMessage\": \"\",\n  \"userId\": 6099,\n  \"success\": true,\n  \"transactions\": {\n    \"start_at\": \"2016-06-23T10:09:11-0300\",\n    \"created_at\": \"2016-06-23T08:12:16-0300\",\n    \"finish_at\": \"2016-06-23T10:17:04-0300\",\n    \"amount\": \"14.25\",\n    \"voucher\": \"fkbg\",\n    \"offline\": false,\n    \"os\": \"2695792\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request results</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "transactions",
            "description": "<p>Transaction information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/paggtaxi/myprojects/pagg_taxi/pagg_taxi/apps/api_paggtaxi_app/views/apidoc.py",
    "groupTitle": "Transactions",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "errorMessage",
            "description": "<p>Error description</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Result</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n  \"errorMessage\": \"Invalid search parameters\",\n  \"success\": false\n}",
          "type": "json"
        }
      ]
    }
  }
] });
