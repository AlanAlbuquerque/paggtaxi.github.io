define({ "api": [
  {
    "type": "delete",
    "url": "/card/:token",
    "title": "Delete a Card information",
    "name": "DeleteCard",
    "group": "Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Reading Token that identifies the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NO CONTENT\n    [\n    ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n    {\n        \"detail\":\"Not found.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_card.py",
    "groupTitle": "Card"
  },
  {
    "type": "post",
    "url": "/card/:token/is_valid?client_identifier=:client_identifier",
    "title": "Validate Card information",
    "name": "GetCard",
    "group": "Card",
    "sampleRequest": [
      {
        "url": "http://www.paggtaxi.com/card/:token/is_valid?client_identifier=:client_identifier&test_mode=True&action=APRO"
      },
      {
        "url": "http://www.paggtaxi.com/card/:token/is_valid?client_identifier=:client_identifier&test_mode=True&action=DENI"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Reading Token that identifies the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_identifier",
            "description": "<p>Client card identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_external",
            "description": "<p>Token Mercado Pago</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "test_mode",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n        \"brand\":1,\n        \"card_number\":\"*******8716\",\n        \"valid\":false,\n        \"client_identifier\":1\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 412 Precondition Failed\n    {\n        \"card\":[\"Missing card identifier.\"]\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not found\n    {\n        \"detail\":\"Not found.\"\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_card.py",
    "groupTitle": "Card"
  },
  {
    "type": "get",
    "url": "/card/:token",
    "title": "Get a Card List information",
    "description": "<p>***Only Stone</p>",
    "name": "ListCards",
    "group": "Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Reading Token that identifies the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n    {\"brand\":1,\"card_number\":\"*******8716\",\"valid\":false,\"client_identifier\":1},\n    {\"brand\":1,\"card_number\":\"*******8716\",\"valid\":false,\"client_identifier\":2}\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 NOT FOUND\n{\n    \"detail\":\"Not found.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_card.py",
    "groupTitle": "Card"
  },
  {
    "type": "post",
    "url": "/card?version=2",
    "title": "Create Card information",
    "name": "PostCard",
    "group": "Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "client",
            "description": "<p>Client unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pan",
            "description": "<p>Payment card number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "card_holder_text",
            "description": "<p>Card holder name</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"amex=1\"",
              "\"visa=2\"",
              "\"mastercard=3\"",
              "\"diners=4\"",
              "\"elo=5\"",
              "\"aura=6\"",
              "\"discover=7\"",
              "\"casa_show=8\"",
              "\"havan=9\"",
              "\"hug_card=10\"",
              "\"andar_aki=11\"",
              "\"leader_card=12\"",
              "\"naranja=13\"",
              "\"nativa=14\"",
              "\"tarshop=15\"",
              "\"cencosud=16\"",
              "\"cabal=17\"",
              "\"argencard=18\"",
              "\"cordial=19\"",
              "\"cordobesa=20\"",
              "\"cmr=21\""
            ],
            "optional": false,
            "field": "brand",
            "description": "<p>Card brand</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "token_external",
            "description": "<p>Mercado Pago Token</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "last_four_digits",
            "description": "<p>Card last four digits</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "first_six_digits",
            "description": "<p>Card first six digits</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "issuer_id",
            "description": "<p>Mercado Pago Issuer ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    'client': '1',\n    'pan': '49927398716',\n    'card_holder_text': '1444',\n    'brand': '1',\n    'token_external': '12341241ABC',\n    'last_four_digits': 8716,\n    'first_six_digits': 499273,\n    'issuer_id': 1\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    'client': '1',\n    'pan': '49927398716',\n    'card_holder_text': '1444',\n    'brand': '1'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"token\":\"EB5IPYMCR4VWYO2ZXLJQAHA7IA======\",\n  \"token_read\":\"74FP2GE6GJ2B3IRNKJKZZ4HFTQ======\",\n  \"client_identifier\": '1'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ClientDoesNotExist",
            "description": "<p>The id of the Client was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Precondition Failed\n{\n   \"client\": [\"Client does not exist.\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_card.py",
    "groupTitle": "Card"
  },
  {
    "type": "put/patch",
    "url": "/card/:token/update_info?client_identifier=:client_identifier",
    "title": "Modify Card information",
    "name": "PutCard",
    "group": "Card",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token read that identifies the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_identifier",
            "description": "<p>Client identifier that identifier the card</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cvv",
            "description": "<p>Card security code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valid_date",
            "description": "<p>Card expiration date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"valid_date\": \"12/2019\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    \"cvv\": \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CardNotFound",
            "description": "<p>The id of the Card was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BAD REQUEST\n{\n    \"token\": [\"Token does not exist.\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_card.py",
    "groupTitle": "Card"
  },
  {
    "type": "post",
    "url": "/charge",
    "title": "Create a new charge transaction",
    "name": "PostCharge",
    "group": "Charge",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token_text",
            "description": "<p>The card token identification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount_in_cents",
            "description": "<p>Value that will be charged</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "doc_number",
            "description": "<p>Customer unique document identification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Customer email address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Customer phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "transaction_reprocess_reference",
            "description": "<p>Original transaction number (when reprocessing)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "reprocess",
            "description": "<p>If this transaction can be reprocessed</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ride_id",
            "description": "<p>Ride identificationa</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ride_os",
            "description": "<p>Ride Service Order</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "test_mode",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    'token_text': token.token_text,\n    'amount_in_cents': amount,\n    'cpf': 'XXXXXXXXXX',\n    'email': 'valid@mail.com'\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    'token_text': token.token_text,\n    'amount_in_cents': amount,\n    'cpf': 'XXXXXXXXXX',\n    'phone': '4141410000'\n\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    'token_text': token.token_text,\n    'amount_in_cents': amount,\n    'cpf': 'XXXXXXXXXX',\n    'phone': '4141410000',\n    'reprocess': True,\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n    'token_text': token.token_text,\n    'amount_in_cents': amount,\n    'cpf': 'XXXXXXXXXX',\n    'phone': '4141410000',\n    'reprocess': False,\n    'ride_os': 123123,\n    'ride_id': 123123,\n    'transaction_reprocess_reference': 1234\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"status\":\"APPROVED\",\n    \"AuthorizationCode\":\"022222\",\n    \"message\":\"Aprovado\",\n    \"order\": 123123,\n    \"transaction_identifier\": 2313221412,\n    \"transaction_reference\": 412412421,\n    \"transaction_reprocess_reference\": ''\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"status\":\"APPROVED\",\n    \"AuthorizationCode\":\"022222\",\n    \"message\":\"Aprovado\",\n    \"order\": 123123,\n    \"transaction_identifier\": 2313221412,\n    \"transaction_reference\": 412412421,\n    \"transaction_reprocess_reference\": ''\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"status\":\"APPROVED\",\n    \"AuthorizationCode\":\"022222\",\n    \"message\":\"Aprovado\",\n    \"order\": 123123,\n    \"transaction_identifier\": 2313221412,\n    \"transaction_reference\": 412412421,\n    \"transaction_reprocess_reference\": 1234\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"data\": [\"Enter a valid email address.\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"data\": [\"Email or phone are mandatory\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n   \"data\": [\"Invalid amount\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\n   \"data\": [\"Parameter missing\"]\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Acceptable\n{\n   \"detail\": [\"Not found\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_charge.py",
    "groupTitle": "Charge"
  },
  {
    "type": "get",
    "url": "/checkout/customer",
    "title": "Get Customer information",
    "description": "<p>***Only Mercado Pago</p>",
    "name": "GetCustomer",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "merchant_access_token",
            "description": "<p>Read token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    'merchant_access_token': '124124124124',\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    MP CUSTOMER\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_mp.py",
    "groupTitle": "Client"
  },
  {
    "type": "post",
    "url": "/client?version=2",
    "title": "Create Client information",
    "name": "PostClient",
    "group": "Client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "external_id",
            "description": "<p>A reference to a external identification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>A name reference</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_number",
            "description": "<p>Client phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "phone_area_code",
            "description": "<p>Client phone are code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Client email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"CPF\"",
              "\"DNI\"",
              "\"CI\"",
              "\"Otro\""
            ],
            "optional": false,
            "field": "external_id_type",
            "description": "<p>External identification type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"external_id\" = 12345678,\n    \"external_id_type\" = \"CPF\"\n    \"name\" = \"Boba Fett\",\n    \"email\" = \"mandalorian@paggcard.com\"\n    \"phone\" = 12314444\n    \"phone_area_code\" = 47\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n    \"id\" = 124124\n    \"external_id\" = 12345678,\n    \"external_id_type\" = \"CPF\"\n    \"name\" = \"Teste\",\n    \"email\" = \"test@paggcard.com\"\n    \"phone\" = 12314444\n    \"phone_area_code\" = 47\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FieldMissing",
            "description": "<p>There is a field missing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n    \"external_id\": [\"This field is required.\"]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_client.py",
    "groupTitle": "Client"
  }
] });
