define({ "api": [
  {
    "type": "post",
    "url": "/address",
    "title": "Create Address information",
    "name": "PostAddress",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token written that identifies the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Billing\"",
              "\"Shipping\"",
              "\"Comercial\"",
              "\"Residential\""
            ],
            "optional": false,
            "field": "addressType",
            "description": "<p>Type of the Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complement",
            "description": "<p>Complement of the Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Address number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>Street name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Address Zipcode</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"address\": \"Address added.\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n    {\n       \"token\": [\"Token does not exist.\"]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_address.py",
    "groupTitle": "Address"
  },
  {
    "type": "put/patch",
    "url": "/address/:token",
    "title": "Update Address information",
    "name": "PutAddress",
    "group": "Address",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token written that identifies the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Billing\"",
              "\"Shipping\"",
              "\"Comercial\"",
              "\"Residential\""
            ],
            "optional": false,
            "field": "addressType",
            "description": "<p>Type of the Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complement",
            "description": "<p>Complement of the Address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Address number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "country",
            "description": "<p>Country name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "district",
            "description": "<p>District name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>Street name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>Address Zipcode</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 ACCEPTED\n    {\n       \"address\": \"Address updated.\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n    {\n       \"token\": [\"Token does not exist.\"]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_address.py",
    "groupTitle": "Address"
  },
  {
    "type": "post",
    "url": "/buyer",
    "title": "Create Buyer information",
    "name": "PostBuyer",
    "group": "Buyer",
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
            "description": "<p>Client name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birth_date",
            "description": "<p>Client birth date e.g. 1990-08-20T00:00:00-0300</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "buyer_reference",
            "description": "<p>A reference to the buyer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "document_number",
            "description": "<p>Document number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"CPF\"",
              "\"CNPJ\""
            ],
            "optional": true,
            "field": "document_type",
            "description": "<p>Document type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Client email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Comercial\"",
              "\"Personal\""
            ],
            "optional": true,
            "field": "email_type",
            "description": "<p>Email type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"M\"",
              "\"F\""
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Client gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "home_phone",
            "description": "<p>Client home phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile_phone",
            "description": "<p>Client mobile phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "work_phone",
            "description": "<p>Client work phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Person\"",
              "\"Company\""
            ],
            "optional": true,
            "field": "person_type",
            "description": "<p>Person type</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n    \"client\" = XXX\n}",
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
    "filename": "karte/views/views_buyer.py",
    "groupTitle": "Buyer"
  },
  {
    "type": "put/path",
    "url": "/buyer/:token",
    "title": "Update Buyer information",
    "name": "PutBuyer",
    "group": "Buyer",
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
            "description": "<p>Client name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "birth_date",
            "description": "<p>Client birth date e.g. 1990-08-20T00:00:00-0300</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "buyer_reference",
            "description": "<p>A reference to the buyer</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "document_number",
            "description": "<p>Document number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"CPF\"",
              "\"CNPJ\""
            ],
            "optional": true,
            "field": "document_type",
            "description": "<p>Document type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Client email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Comercial\"",
              "\"Personal\""
            ],
            "optional": true,
            "field": "email_type",
            "description": "<p>Email type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"M\"",
              "\"F\""
            ],
            "optional": true,
            "field": "gender",
            "description": "<p>Client gender</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "home_phone",
            "description": "<p>Client home phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mobile_phone",
            "description": "<p>Client mobile phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "work_phone",
            "description": "<p>Client work phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Person\"",
              "\"Company\""
            ],
            "optional": true,
            "field": "person_type",
            "description": "<p>Person type</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 202 Accepted\n{\n   \"buyer\": [\"Buyer updated.\"]\n}",
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
            "field": "DetailNotFound",
            "description": "<p>Token is invalid or client was not found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n   {\"detail\": \"Not found.\"}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_buyer.py",
    "groupTitle": "Buyer"
  },
  {
    "type": "post",
    "url": "/card/:token/is_valid?client_identifier=:client_identifier",
    "title": "Modify Card information",
    "name": "GetCard",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "client_identifier",
            "description": "<p>Client card identifier</p>"
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
    "title": "Get a Card list information",
    "name": "GetCard",
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
    "type": "get",
    "url": "/card/:token",
    "title": "Get a Card list information",
    "name": "GetCard",
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
    "url": "/card",
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
              "\"leader_card=12\""
            ],
            "optional": false,
            "field": "brand",
            "description": "<p>Card brand</p>"
          }
        ]
      },
      "examples": [
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
            "type": "Number",
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
            "field": "cpf",
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
          "content": "{\n    'token_text': token.token_text,\n    'amount_in_cents': amount,\n    'cpf': 'XXXXXXXXXX',\n    'phone': '4141410000'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{\n    \"status\":\"APPROVED\",\n    \"AuthorizationCode\":\"022222\",\n    \"message\":\"Aprovado\"\n}",
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
        }
      ]
    },
    "version": "0.0.0",
    "filename": "karte/views/views_charge.py",
    "groupTitle": "Charge"
  },
  {
    "type": "post",
    "url": "/client",
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
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 CREATED\n{\n    \"external_id\" = XXX\n    \"name\" = \"Teste\"\n}",
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
