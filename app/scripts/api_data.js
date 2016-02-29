define({ "api": [
  {
    "type": "post",
    "url": "/admin/add",
    "title": "Create",
    "description": "<p>Creates a new admin</p> ",
    "name": "AdminAdd",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>(REQUIRED) Admin email</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>(REQUIRED) The password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>Real name of the admin</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"email@example.com\",\n\t\"password\": \"5f4dcc3b5aa765d61d8327deb882cf99\",\n\t\"name\": \"General Specific\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "409": [
          {
            "group": "409",
            "optional": true,
            "field": "030",
            "description": "<p>AdminAlreadyExists Admin account with that email address already exists.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"030\",\n\t\"status\": 409,\n\t\"message\": \"Admin already exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/app/add",
    "title": "AppCreate",
    "description": "<p>Creates a application for the admin. The request body should contain the application itself.</p> ",
    "name": "AdminAppAdd",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"icon\": \"fa-bullhorn\",\n\t\"name\": \"The Voice\",\n\t\"keys\": [\n\t\t\"3406870085495689e34d878f09faf52c\"\n\t]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t \"admin_id\": \"email@example.com\",\n\t\t \"icon\": \"fa-bullhorn\",\n\t\t \"name\": \"The Voice\",\n\t\t \"type\": \"application\",\n\t\t \"keys\": [\n\t\t \t\"3406870085495689e34d878f09faf52c\"\n\t\t ]\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/app.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/admin/app/remove",
    "title": "RemoveApp",
    "description": "<p>Removes an application from the admin.</p> ",
    "name": "AdminAppRemove",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"App removed\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": true,
            "field": "011",
            "description": "<p>ApplicationNotFound Application with that ID doesn't exist.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"011\",\n\t\"status\": 404,\n\t\"message\": \"Application with ID $APPID does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/app.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/app/update",
    "title": "UpdateApp",
    "description": "<p>Updates an app</p> ",
    "name": "AdminAppUpdate",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the app to update</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"patches\": [\n\t\t{\n\t\t\t\"op\": \"replace\",\n\t\t\t\"path\": \"application/application_id/field_name\",\n\t\t\t\"value\": \"new value\"\n\t\t}\n\t ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": true,
            "field": "011",
            "description": "<p>ApplicationNotFound Application with that ID doesn't exist.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"011\",\n\t\"status\": 404,\n\t\"message\": \"Application with ID $APPID does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/app.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/apps",
    "title": "Applications",
    "description": "<p>Lists the application for the current admin</p> ",
    "name": "AdminApps",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"20\": {\n\t\t \t\"admin_id\": \"email@example.com\",\n\t\t \t\"icon\": \"fa-bullhorn\",\n\t\t \t\"name\": \"The Voice\",\n\t\t \t\"type\": \"application\",\n\t\t \t\"keys\": [\n\t\t \t\t\"3406870085495689e34d878f09faf52c\"\n\t\t \t]\n\t\t},\n\t\t...\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/login",
    "title": "Authenticate",
    "description": "<p>Authenticates an admin and returns the authorization token</p> ",
    "name": "AdminAuthenticate",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>(REQUIRED) Email of admin</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>(REQUIRED) Password of admin</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"email@example.com\",\n\t\"password\": \"5f4dcc3b5aa765d61d8327deb882cf99\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\ttoken: \"TOKEN\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "016",
            "description": "<p>AdminBadLogin If the provided email and password are not correct</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"016\"\n\t\"status\": 401,\n\t\"message\": \"Wrong user email address or password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/app/authorize",
    "title": "AuthorizeAdmin",
    "description": "<p>Authorizes an admin to an application</p> ",
    "name": "AdminAuthorize",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the admin to authorize for the application</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"admin@telepat.io\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Admin added to application\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": true,
            "field": "011",
            "description": "<p>ApplicationNotFound Application with that ID doesn't exist.</p> "
          },
          {
            "group": "404",
            "optional": true,
            "field": "033",
            "description": "<p>AdminNotFound Admin with that email address does not exist</p> "
          }
        ],
        "409": [
          {
            "group": "409",
            "optional": true,
            "field": "017",
            "description": "<p>AdminAlreadyAuthorized Admin with email address already authorized for application</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"011\",\n\t\"status\": 404,\n\t\"message\": \"Application with ID $APPID does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/app.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context/add",
    "title": "CreateContext",
    "description": "<p>Creates a new context</p> ",
    "name": "AdminCreateContext",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "appId",
            "description": "<p>ID of the application</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"name\": \"Episode 2\",\n\t\"meta\": {\"info\": \"some meta info\"}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"name\": \"Episode 2\",\n\t\t\"state\": 0,\n\t\t\"meta\": {\"info\": \"some meta info\"},\n\t\t\"type\": \"context\",\n\t\t\"application_id\": \"20\"\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/context.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/app/deauthorize",
    "title": "DeauthorizeAdmin",
    "description": "<p>Deauthorizes an admin from an application</p> ",
    "name": "AdminDeauthorize",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of the admin to deauthorize from the application</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"admin@telepat.io\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Admin removed from application\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": true,
            "field": "011",
            "description": "<p>ApplicationNotFound Application with that ID doesn't exist.</p> "
          },
          {
            "group": "404",
            "optional": true,
            "field": "033",
            "description": "<p>AdminNotFound Admin with that email address does not exist.</p> "
          },
          {
            "group": "404",
            "optional": true,
            "field": "019",
            "description": "<p>AdminNotFoundInApplication Admin does not belong to this application.</p> "
          }
        ],
        "409": [
          {
            "group": "409",
            "optional": true,
            "field": "018",
            "description": "<p>AdminDeauthorizeLastAdmin Admin with email address cannot be deauthorized because he's the only one left. We can't have &quot;orphan&quot; applications.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"011\",\n\t\"status\": 404,\n\t\"message\": \"Application with ID $APPID does not exist.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/app.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/admin/delete",
    "title": "Delete",
    "description": "<p>Deletes the currently logged admin.</p> ",
    "name": "AdminDelete",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/admin/user/delete",
    "title": "UserDelete",
    "description": "<p>Deletes an user from an application</p> ",
    "name": "AdminDeleteUser",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The email address of an user from an application</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"user@example.com\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\" : \"User deleted\"\n}",
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
            "field": "404",
            "description": "<p>[023]UserNotFound If the user doesn't exist.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin/user.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context",
    "title": "GetContext",
    "description": "<p>Retrieves a context</p> ",
    "name": "AdminGetContext",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to get</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"name\": \"Episode 1\",\n\t\t\"state\": 0,\n\t\t\"meta\": {},\n\t\t\"type\": \"context\",\n\t\t\"application_id\": \"20\"\n\t}\n}",
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
            "field": "404",
            "description": "<p>[020]ContextNotFound ContextNotFound</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"020\",\n\t\"status\": 404,\n\t\"message\": \"Context not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/context.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/contexts",
    "title": "GetContexts",
    "description": "<p>Get all contexts</p> ",
    "name": "AdminGetContexts",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [{\n\t\t\"name\": \"Episode 1\",\n\t\t\"state\": 0,\n\t\t\"meta\": {},\n\t\t\"type\": \"context\",\n\t\t\"application_id\": \"20\"\n\t},\n\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/context/all",
    "title": "GetContexts",
    "description": "<p>Get all contexts</p> ",
    "name": "AdminGetContexts",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [{\n\t\t\"name\": \"Episode 1\",\n\t\t\"state\": 0,\n\t\t\"meta\": {},\n\t\t\"type\": \"context\",\n\t\t\"application_id\": \"20\"\n\t},\n\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/context.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/schema/all",
    "title": "GetSchemas",
    "description": "<p>Gets the model schema for an application</p> ",
    "name": "AdminGetSchemas",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "\t{\n\t\t\"status\": 200,\n\t\t\"content\" :{\n\t\t\t\"answer\": {\n  \t\t\t\"properties\": {},\n  \t\t\t\"belongsTo\": [\n    \t\t\t\t{\n      \t\t\t\t\"parentModel\": \"event\",\n      \t\t\t\t\"relationType\": \"hasSome\"\n    \t\t\t\t}\n  \t\t\t],\n  \t\t\t\"read_acl\": 6,\n  \t\t\t\"write_acl\": 6,\n  \t\t\t\"meta_read_acl\": 6\n\t\t\t},\n\t\t...\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/schema.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/schemas",
    "title": "GetSchemas",
    "description": "<p>Gets the model schema for an application</p> ",
    "name": "AdminGetSchemas",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "\t{\n\t\t\"status\": 200,\n\t\t\"content\" :{\n\t\t\t\"answer\": {\n  \t\t\t\"properties\": {},\n  \t\t\t\"belongsTo\": [\n    \t\t\t\t{\n      \t\t\t\t\"parentModel\": \"event\",\n      \t\t\t\t\"relationType\": \"hasSome\"\n    \t\t\t\t}\n  \t\t\t],\n  \t\t\t\"read_acl\": 6,\n  \t\t\t\"write_acl\": 6,\n  \t\t\t\"meta_read_acl\": 6\n\t\t\t},\n\t\t...\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/user/all",
    "title": "GetAppUsers",
    "description": "<p>Gets all users of the application</p> ",
    "name": "AdminGetUsers",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "\n{\n\t\t\"page\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\" : [\n\t\t{//user props}, ...\n\t]\n}",
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
            "field": "404",
            "description": "<p>[011]ApplicationNotFound If the application doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin/user.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/users",
    "title": "GetAppusers",
    "description": "<p>Gets all users of the application</p> ",
    "name": "AdminGetUsers",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\" : [\n\t\t{//user props}, ...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/me",
    "title": "Me",
    "description": "<p>Gets information about the logged admin</p> ",
    "name": "AdminMe",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t  \t\"id\": 3,\n\t  \t\"email\": \"email@example.com\",\n\t  \t\"password\": \"5f4dcc3b5aa765d61d8327deb882cf99\",\n\t  \t\"name\": \"General Specific\",\n\t  \t\"isAdmin\": true\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/admin/schema/remove_model",
    "title": "RemoveAppModel",
    "description": "<p>Removes a model from the application (all items of this type will be deleted)</p> ",
    "name": "AdminRemoveAppModel",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Updated schema object</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"model_name\": \"events\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>[011]ApplicationNotFound If the application doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin/schema.js",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/admin/context/remove",
    "title": "RemoveContext",
    "description": "<p>Removes a context and all associated objects</p> ",
    "name": "AdminRemoveContext",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to remove</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>[020]ContextNotFound ContextNotFound</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"020\",\n\t\"status\": 404,\n\t\"message\": \"Context not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/context.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/update",
    "title": "Update",
    "description": "<p>Updates the currently logged admin. Every property in the request body is used to update the admin.</p> ",
    "name": "AdminUpdate",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"patches\": [\n\t\t{\n\t\t\t\"op\": \"replace\",\n\t\t\t\"path\": \"admin/admin_id/field_name\",\n\t\t\t\"value\": \"new value\"\n\t\t}\n\t]\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "400": [
          {
            "group": "400",
            "optional": true,
            "field": "041",
            "description": "<p>InvalidAdmin Invalid admin ID in the patch object</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"041\",\n\t\"status\": 400,\n\t\"message\": \"Invalid Admin\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/admin.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/context/update",
    "title": "UpdateContext",
    "description": "<p>Updates the context object</p> ",
    "name": "AdminUpdateContext",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to update</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "patches",
            "description": "<p>An array of patches</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1,\n\t\"patches\": [\n\t\t{\n\t\t\t\"op\": \"replace\",\n\t\t\t\"path\": \"context/context_id/field_name\",\n\t\t\t\"value\" \"New value\"\n\t\t}\n\t]\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>[020]ContextNotFound ContextNotFound</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>[021]ContextNotAllowed This context doesn't belong to you</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"020\",\n\t\"status\": 404,\n\t\"message\": \"Context not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/admin/context.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/schema/update",
    "title": "UpdateSchema",
    "description": "<p>Updates the model schema</p> ",
    "name": "AdminUpdateSchema",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "schema",
            "description": "<p>Updated schema object</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"schema\": \"see example at /schemas\"\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>[011]ApplicationNotFound If the application doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin/schema.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/user/update",
    "title": "UserUpdate",
    "description": "<p>Updates an user from an application</p> ",
    "name": "AdminUpdateUser",
    "group": "Admin",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "patches",
            "description": "<p>Array of patches containing describing the updates</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"patches\": [\n\t\t{\n\t\t\t\"op\": \"replace\",\n\t\t\t\"path\": \"user/user_id/field_name\",\n\t\t\t\"value\": \"new value\n\t\t}\n\t]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\" : \"User has been updated\"\n}",
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
            "field": "404",
            "description": "<p>[023]UserNotFound If the user doesn't exist.</p> "
          }
        ]
      }
    },
    "filename": "./controllers/admin/user.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/context",
    "title": "GetContext",
    "description": "<p>Retrieves a context</p> ",
    "name": "GetContext",
    "group": "Context",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the context to get</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"id\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [\n\t\t{\n\t\t\t\"name\": \"Episode 1\",\n\t\t\t\"state\": 0,\n\t\t\t\"meta\": {},\n\t\t\t\"type\": \"context\",\n\t\t\t\"application_id\": \"20\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "404": [
          {
            "group": "404",
            "optional": true,
            "field": "020",
            "description": "<p>ContextNotFound Context not found</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response",
          "content": "{\n\t\"code\": \"020\",\n\t\"message\": \"Context not found\",\n\t\"status\": 404\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/context.js",
    "groupTitle": "Context"
  },
  {
    "type": "get",
    "url": "/context/all",
    "title": "GetContexts",
    "description": "<p>Get all contexts</p> ",
    "name": "GetContexts",
    "group": "Context",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [\n\t\t{\n\t\t\t\"name\": \"Episode 1\",\n\t\t\t\"state\": 0,\n\t\t\t\"meta\": {},\n\t\t\t\"type\": \"context\",\n\t\t\t\"application_id\": \"20\"\n\t\t},\n\t\t...\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/context.js",
    "groupTitle": "Context"
  },
  {
    "type": "post",
    "url": "/device/register",
    "title": "Register",
    "description": "<p>Registers a new device or updates an already existing one. If device UDID is supplied in info it will try to search for a device with this UDID and return the device ID.</p> ",
    "name": "DeviceRegister",
    "group": "Device",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID if you want to update device info, or 'TP_EMPTY_UDID' string when you want to register a new device (a device id will be generated in this case)</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header containing the application ID on which to register the device</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the hashed API key</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Register new device",
        "content": "{\n\t\t\"info\": {\n\t\t\t\"os\": \"Android\",\n\t\t\t\"version\": \"4.4.3\",\n\t\t\t\"sdk_level\": 19,\n\t\t\t\"manufacturer\": \"HTC\",\n\t\t\t\"model\": \"HTC One_M8\",\n\t\t\t\"udid\": \"some unique identifier\"\n\t\t}\n\t\t\"persistent\": {\n  \t\t\"type\": \"android\",\n  \t\t\"token\": \"android pn token\",\n  \t\t\"active\": 1\n\t\t}\n}",
        "type": "json"
      },
      {
        "title": "Update existing device",
        "content": "{\n\t\t\"info\": {\n\t\t\t\"os\": \"Android\",\n\t\t\t\"version\": \"5.0.1\",\n\t\t\t\"sdk_level\": 20,\n\t\t\t\"manufacturer\": \"HTC\",\n\t\t\t\"model\": \"HTC One_M8\"\n\t\t}\n\t\t\"persistent\": {\n  \t\t\"type\": \"android\",\n  \t\t\"token\": \"android pn token\"\n\t\t}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "'Created' Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"identifier\": \"2397bfc7-a3b3-47c0-b677-a4a2eee036e4\"\n\t}\n}",
          "type": "json"
        },
        {
          "title": "'Updated' Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Device has been updated\"\n}",
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
            "field": "400",
            "description": "<p>[004]MissingRequiredField When registering a new device and info field is missing</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>[025]DeviceNotFound When updating existing device that doesn't exist</p> "
          }
        ]
      }
    },
    "filename": "./controllers/device.js",
    "groupTitle": "Device"
  },
  {
    "type": "post",
    "url": "/object/count",
    "title": "Count",
    "description": "<p>Gets the object count of a certain filter/subscription</p> ",
    "name": "ObjectCount",
    "group": "Object",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "channel",
            "description": "<p>The object representing a channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "filters",
            "description": "<p>Additional filters to the subscription channel</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/create",
    "title": "Create",
    "description": "<p>Creates a new object. The object is not immediately created.</p> ",
    "name": "ObjectCreate",
    "group": "Object",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>Content of the object</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"model\": \"comment\",\n\t\t\"context\": 1,\n\t\t\"content\": {\n\t\t\t//object properties\n\t\t}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "delete",
    "url": "/object/delete",
    "title": "Delete",
    "description": "<p>Deletes an object. The object is not immediately deleted.</p> ",
    "name": "ObjectDelete",
    "group": "Object",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to delete</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"model\": \"comment\",\n\t\t\"id\": 1,\n\t\t\"context\": 1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"Deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/subscribe",
    "title": "Subscribe",
    "description": "<p>Subscribe to an object or a collection of objects (by a filter). Returns a the resulting object(s). Subsequent subscription on the same channel and filter will have no effect but will return the objects.</p> ",
    "name": "ObjectSubscribe",
    "group": "Object",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "channel",
            "description": "<p>Object representing the channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "filters",
            "description": "<p>Object representing channel filters</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"channel\": {\n\t\t\t\"id\": 1,\n\t\t\t\"context\": 1,\n\t\t\t\"model\": \"comment\",\n\t\t\t\"parent\": {\n\t\t\t\t\"id\": 1,\n\t\t\t\t\"model\": \"event\"\n\t\t\t},\n\t\t\t\"user\": 2\n\t\t},\n\t\t\"filters\": {\n\t\t\t\"or\": [\n\t\t\t\t{\n\t\t\t\t\t\"and\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t  \"is\": {\n\t\t\t\t\t\t\t\"gender\": \"male\",\n\t\t\t\t\t\t\t\"age\": 23\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t  \"range\": {\n\t\t\t\t\t\t\t\"experience\": {\n\t\t\t\t\t\t\t  \"gte\": 1,\n\t\t\t\t\t\t\t  \"lte\": 6\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t}\n\t\t\t\t\t  ]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t  \"and\": [\n\t\t\t\t\t\t{\n\t\t\t\t\t\t  \"like\": {\n\t\t\t\t\t\t\t\"image_url\": \"png\",\n\t\t\t\t\t\t\t\"website\": \"png\"\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t}\n\t\t\t\t\t  ]\n\t\t\t\t\t}\n\t\t\t\t  ]\n\t\t}\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": [\n\t\t{\n\t\t\t//item properties\n\t\t}\n\t]\n}",
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
            "field": "400",
            "description": "<p>[027]InvalidChannel When trying to subscribe to an invalid channel</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/unsubscribe",
    "title": "Unsubscribe",
    "description": "<p>Unsubscribe to an object or a collection of objects (by a filter)</p> ",
    "name": "ObjectUnsubscribe",
    "group": "Object",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "channel",
            "description": "<p>Object representing the channel</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Object</p> ",
            "optional": false,
            "field": "filters",
            "description": "<p>Object representing the filters for the channel</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t//exactly the same as with the subscribe method\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Subscription removed\"\n}",
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
            "field": "400",
            "description": "<p>[027]InvalidChannel When trying to subscribe to an invalid channel</p> "
          }
        ]
      }
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "post",
    "url": "/object/update",
    "title": "Update",
    "description": "<p>Updates an existing object. The object is not updated immediately.</p> ",
    "name": "ObjectUpdate",
    "group": "Object",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the object (optional)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Number</p> ",
            "optional": false,
            "field": "context",
            "description": "<p>Context of the object</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "model",
            "description": "<p>The type of object to subscribe to</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>Array</p> ",
            "optional": false,
            "field": "patch",
            "description": "<p>An array of patches that modifies the object</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\t\"model\": \"comment\",\n\t\t\"id\": 1,\n\t\t\"context\": 1,\n\t\t\"patches\": [\n\t\t\t{\n\t\t\t\t\"op\": \"replace\",\n\t\t\t\t\"path\": \"comment/1/text\",\n\t\t\t\t\"value\": \"some edited text\"\n\t\t\t},\n\t\t\t...\n\t\t],\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"Created\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/object.js",
    "groupTitle": "Object"
  },
  {
    "type": "get",
    "url": "/user/refresh_token",
    "title": "Refresh Token",
    "description": "<p>Sends a new authentication token to the user. The old token must be provide (and it may or not may not be already expired).</p> ",
    "name": "RefreshToken",
    "group": "User",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\ttoken: \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmlAYXBwc2NlbmQuY29tIiwiaXNBZG1pbiI6dHJ1ZSwiaW\n\t\tF0IjoxNDMyOTA2ODQwLCJleHAiOjE0MzI5MTA0NDB9.knhPevsK4cWewnx0LpSLrMg3Tk_OpchKu6it7FK9C2Q\"\n\t}\n}",
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
            "field": "400",
            "description": "<p>[013]AuthorizationMissing  If authorization header is missing</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/delete",
    "title": "Delete",
    "description": "<p>Deletes a user</p> ",
    "name": "UserDelete",
    "group": "User",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>number</p> ",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the user</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"User deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login",
    "description": "<p>Log in the user through Facebook.</p> ",
    "name": "UserLogin",
    "group": "User",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook access token.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"access_token\": \"fb access token\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": {\n\t\t\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmlAYXBwc2NlbmQuY29tIiwiaXNBZG1pbiI6dHJ1ZSwi\n\t\taWF0IjoxNDMyOTA2ODQwLCJleHAiOjE0MzI5MTA0NDB9.knhPevsK4cWewnx0LpSLrMg3Tk_OpchKu6it7FK9C2Q\"\n\t\t\"user\": {\n\t\t\t \"id\": 31,\n\t\t\t\"type\": \"user\",\n\t\t\t\"email\": \"abcd@appscend.com\",\n\t\t\t\"fid\": \"facebook_id\",\n\t\t\t\"devices\": [\n\t\t\t\t\"466fa519-acb4-424b-8736-fc6f35d6b6cc\"\n\t\t\t],\n\t\t\t\"friends\": [],\n\t\t\t\"password\": \"acb8a9cbb479b6079f59eabbb50780087859aba2e8c0c397097007444bba07c0\"\n\t\t}\n\t}\n}",
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
            "field": "400",
            "description": "<p>[028]InsufficientFacebookPermissions User email is not publicly available (insufficient Facebook permissions)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>[023]UserNotFound User not found</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login_password",
    "title": "Password login",
    "description": "<p>Logs in the user with a password</p> ",
    "name": "UserLoginPassword",
    "group": "User",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The email</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"email\": \"user@example.com\",\n\t\"password\": \"magic-password1337\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"content\": {\n\t\t\"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImdhYmlAYXBwc2NlbmQuY29tIiwiaXNBZG1pbiI6dHJ1ZSwi\n\t\taWF0IjoxNDMyOTA2ODQwLCJleHAiOjE0MzI5MTA0NDB9.knhPevsK4cWewnx0LpSLrMg3Tk_OpchKu6it7FK9C2Q\"\n\t\t\"user\": {\n\t\t\t\"id\": 31,\n\t\t\t\"type\": \"user\",\n\t\t\t\"email\": \"abcd@appscend.com\",\n\t\t\t\"fid\": \"\",\n\t\t\t\"devices\": [\n\t\t\t\t\"466fa519-acb4-424b-8736-fc6f35d6b6cc\"\n\t\t\t],\n\t\t\t\"friends\": [],\n\t\t\t\"password\": \"acb8a9cbb479b6079f59eabbb50780087859aba2e8c0c397097007444bba07c0\"\n\t\t}\n\t}\n}",
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
            "field": "401",
            "description": "<p>[031]UserBadLogin User email and password did not match</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/logout",
    "title": "Logout",
    "description": "<p>Logs out the user removing the device from his array of devices.</p> ",
    "name": "UserLogout",
    "group": "User",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 200,\n\t\"content\": \"Logged out of device\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/me",
    "title": "Me",
    "description": "<p>Info about logged user</p> ",
    "name": "UserMe",
    "group": "User",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>The authorization token obtained in the login endpoint. Should have the format: <i>Bearer $TOKEN</i></p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>The password</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "email",
            "description": "<p>The email</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"content\": {\n\t\t\"id\": 31,\n\t\t\"type\": \"user\",\n\t\t\"email\": \"abcd@appscend.com\",\n\t\t\"fid\": \"\",\n\t\t\"devices\": [\n\t\t\t\"466fa519-acb4-424b-8736-fc6f35d6b6cc\"\n\t\t],\n\t\t\"friends\": []\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/register",
    "title": "Register",
    "description": "<p>Registers a new user using a Facebook token or directly with an email and password. User is not created immediately.</p> ",
    "name": "UserRegister",
    "group": "User",
    "version": "0.2.3",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-type",
            "description": "<p>application/json</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-APPID",
            "description": "<p>Custom header which contains the application ID</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-SIGN",
            "description": "<p>Custom header containing the SHA256-ed API key of the application</p> "
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-BLGREQ-UDID",
            "description": "<p>Custom header containing the device ID (obtained from device/register)</p> "
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "access_token",
            "description": "<p>Facebook access token.</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Facebook Request",
        "content": "{\n\t\"access_token\": \"fb access token\"\n}",
        "type": "json"
      },
      {
        "title": "Client Request (with password)",
        "content": "\n{\n\t\t\"email\": \"example@appscend.com\",\n\t\t\"password\": \"secure_password1337\",\n\t\t\"name\": \"John Smith\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"User created\"\n}",
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
            "field": "400",
            "description": "<p>[028]InsufficientFacebookPermissions User email is not publicly available (insufficient facebook permissions)</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "409",
            "description": "<p>[029]UserAlreadyExists User with that email address already exists</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/update",
    "title": "Update",
    "description": "<p>Updates the user information. This operation is not immediate.</p> ",
    "name": "UserUpdate",
    "group": "User",
    "version": "0.2.3",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>Object[]</p> ",
            "optional": false,
            "field": "patches",
            "description": "<p>Array of patches that describe the modifications</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Client Request",
        "content": "{\n\t\"patches\": [\n\t\t{\n\t\t\t\"op\": \"replace\",\n\t\t\t\"path\": \"user/user_id/field_name\",\n\t\t\t\"value\": \"new value\n\t\t}\n\t]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success Response",
          "content": "{\n\t\"status\": 202,\n\t\"content\": \"User updated\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "042",
            "description": "<p>400 InvalidPatch Invalid patch supplied</p> "
          }
        ]
      }
    },
    "filename": "./controllers/user.js",
    "groupTitle": "User"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p> "
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./documentation/main.js",
    "group": "_home_andrei_nodeDev_telepat_api_documentation_main_js",
    "groupTitle": "_home_andrei_nodeDev_telepat_api_documentation_main_js",
    "name": ""
  }
] });