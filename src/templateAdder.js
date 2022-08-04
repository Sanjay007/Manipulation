export const sdgDataSetRequestTemplate = {
  "basicAggregationData": {
    "dataSetsMap": {
      "BASIC_AGG_DATA.HOLDINGS": false,
      "BASIC_AGG_DATA.BASIC_ACCOUNT_INFO": false,
      "BASIC_AGG_DATA.ACCOUNT_DETAILS": false,
      "BASIC_AGG_DATA.STATEMENTS": false,
      "BASIC_AGG_DATA.TRANSACTIONS": false,
      "BASIC_AGG_DATA.STATEMENTS.maxStmtDurationLimit": "",
      "BASIC_AGG_DATA.TRANSACTIONS.maxTxnSelectionDuration": ""
    }
  },
  "accountProfile": {
    "dataSetsMap": {
      "ACCT_PROFILE.PAYMENT_PROFILE": false,
      "ACCT_PROFILE.FULL_ACCT_NUMBER": false,
      "ACCT_PROFILE.HOLDER_NAME.scrapeMultiHolderName": false,
      "ACCT_PROFILE.HOLDER_NAME": false,
      "ACCT_PROFILE.HOLDER_DETAILS.EMAIL": false,
      "ACCT_PROFILE.HOLDER_DETAILS.PHONE": false,
      "ACCT_PROFILE.HOLDER_DETAILS.ADDRESS": false,
      "ACCT_PROFILE.HOLDER_DETAILS.CONSUMER IDENTIFIER": false,
      "ACCT_PROFILE.HOLDER_DETAILS.DOB": false,
      "ACCT_PROFILE.HOLDER_DETAILS": false,
      "ACCT_PROFILE.BANK_TRANSFER_CODE": false
    }
  },
  "document": {
    "dataSetsMap": {
      "DOCUMENT.EBILLS": false,
      "DOCUMENT.STATEMENTS": false,
      "DOCUMENT.TAX": false
    },
    "startDate": "",
    "endDate": "",
    "startYear": "",
    "endYear": ""
  },
  "advanceAggregationData": {
    "dataSetsMap": {
      "ADVANCE_AGG_DATA.COVERAGE": false,
      "ADVANCE_AGG_DATA.INTEREST_DETAILS": false,
      "ADVANCE_AGG_DATA.PAYMENT_DETAILS": false
    }
  }
};

export const manipulationElement = {
  "type": "",
  "methodName": "",
  "uuid": "",
  "methodClass": '',
  "arguments": [
  ],
  "variable": "",
  "expression": "",
  "nestedStatements": []
}

export const postManipulationsTemplate = {
  "manipulations": [
    { ...JSON.parse(JSON.stringify(manipulationElement)) }
  ]
}

export const taxDocDownloadConstants = {
  "taxFormStatus": ['ORIGINAL', 'MIDYEAR', 'CORRECTED', 'ERRATA', 'REVISED', 'INPROCESS'],
  "taxFormType": ['26AS', 'FORM-16', '1099-K', '1099-B', '1099-R', '1099-DIV', '1099-NIT', '1099-INT', '1099-MISC', '1099-OID', '1098', '1098-E', '1098-C', '1099-A', '1099-COMPOSITE', '5498', '1099-Q', '1099-SA']
}

export const manipulationElementArgument = {
  "uuid": "",
  "value": "",
  "type": "",
  "name": "",
  "dataType": ""
};

export const defaultAssignManipulationElement = {
  "type": "auto",
  "uuid": "",
  "methodName": "assign",
  "methodClass": 'ConditionalOpertaion',
  "arguments": [
    {
      "type": "FIELD",
      "value": "",
      "name": "lhs",
      "dataType": "String"
    },
    {
      "value": "",
      "type": "",
      "name": "rhs",
      "dataType": "String"
    }
  ],
  "variable": "",
  "expression": "",
  "nestedStatements": []
}

export const errorCodeTemplate = {
  "errorCode": "",
  "uuid": "",
  "messageList": [
    {
      "uuid": "",
      "errorMessage": "",
      "frameLocators": ""
    }
  ]
}

export const autoPopCriteriaTemplate = {
  "_attributes": {
    "result": "",
    "priority": "0"
  },
  "field": [{
    "_attributes": {
      "compare": "",
      "name": ""
    },
    "_text": [""]
  }]
};

export const autoPopRuleTemplate = {
  "_attributes": {
    "type": ""
  },
  "criteria": []
};

export const inlineRuleConfigTemplate = {
  "taxonomy": [
  ],
  "inlineRule": [
    {
      "name": "",
      "params": [
      ],
      "applyRule": false
    }
  ]
}

export const framesSchema = {
  "locatorType": "",
  "path": ""
}

export const locatorSchema = {
  "uuid": "",
  "locatorType": "",
  "path": "",
  "direction": "",
  "startX": "",
  "endX": "",
  "startY": "",
  "endY": "",
  "pageNumber": "",
  "manipulationPath": {
    "dynamicValues": [
      {
        "replaceText": "",
        "replaceWith": "",
        "replacingType": "",
        "postManipulations": {}
      }
    ]
  }
}

export const headerLessConfig = {
  "uuid": "",
  "startY": -1,
  "endY": -1,
  "headerLessStartCriteria": {
    "locators": []
  },
  "headerLessEndCriteria": {
    "locators": []
  },
  "masterEndLocators": {
    "locators": []
  },
}

export const manipulationPathSchema = {
  "uuid": "",
  "dynamicValues": [
    {
      "uuid": "",
      "replaceText": "",
      "replaceWith": "",
      "replacingType": "",
      "postManipulations": {}
    }
  ]
}

export const dynamicValue = {
  "uuid": "",
  "replaceText": "",
  "replaceWith": "",
  "replacingType": "",
  "postManipulations": {}
}

export const waitSchema = {
  "wait": {
    "waitDelay": "",
    "waitLocators": [
      {
        "frames": [],
        "locator": JSON.parse(JSON.stringify(locatorSchema)),
      }
    ]
  }
}

export const preActionTemplate = {
  "uuid": "",
  "name": "",
  "description": "",
  "scrapingType":"",
  "variations": []
}

export const commandInputTemplate = {
  "uuid": "",
  "locator": JSON.parse(JSON.stringify(locatorSchema)),
  "action": "",
  "frames": [],
  "wait": JSON.parse(JSON.stringify(waitSchema.wait)),
  "metadata": {
    "type": ""
  },
  "postManipulations": JSON.parse(JSON.stringify(postManipulationsTemplate)),
}

export const postManipulations = {
  manipulations: [
    {
      "uuid": "",
      "type": "",
      "methodName": "",
      "arguments": [
      ],
      "variable": "",
      "expression": "",
      "nestedStatements": []
    }
  ]
}


export const variationTemplate = {
  "uuid": "",
  "id": "",
  "description": "",
  "lastAccessedTime": "",
  "ASStateIdentifier": [],
  "waitTime": "",
  "identifiers": [],
  "throwException": true,
  "commandInput": JSON.parse(JSON.stringify(commandInputTemplate)),
  "manipulationBlocks": []
}

export const paginateExitCriteria = {
  "uuid": "",
  "commandInput": JSON.parse(JSON.stringify(commandInputTemplate)),
}

export const retryTemplate = {
  "isRetryOn": "",
  "numberOfRetry": "",
  "retryCriteria": "",
  "erorrMessage": "",
  "erorrCode": ""
}

export const statesTemplate = {
  "uuid": "",
  "id": "",
  "name": "",
  "subType": "",
  "waitTime": "",
  "dateFormat": "",
  "currencyCode": "",
  "identifiers": [],
  "metadata": {
    "uuid": "",
    "type": "",
    "repeat": ""
  },
  "retry": JSON.parse(JSON.stringify(retryTemplate)),
  "preProcessingPhase": {
    "actions": [],
    "stateStatusIdentifiers": []
  },
  "isStateComplete": true,
  "isPrimary": false,
  "paginate": {
    "uuid": "",
    "commandInput": JSON.parse(JSON.stringify(commandInputTemplate)),
    "exitCriteria": [{
      "uuid": "",
      "commandInput": JSON.parse(JSON.stringify(commandInputTemplate)),
    }]
  },
  "outNavigations": [],
  "inNavigations": [],
  "fieldsGroupings": [],
  "supportedContainerForField": "",
  "fields": [],
  "listing": {
    "uuid": "",
    "listingType": "",
    "dateFormat": "",
    "eBillDateType": "",
    "isConsolidatedStatement": ""
  },
  "postProcessingPhase": {
    "actions": [],
    "stateStatusIdentifiers": []
  }
};

export const intermediateStatesTemplate = {
  "uuid": "",
  "id": "",
  "name": "",
  "waitTime": "",
  "identifiers": [],
  "description": "",
  "preProcessingPhase": {
    "actions": [],
    "stateStatusIdentifiers": []
  }
};
export const fieldTemplate = {
  "uuid": "",
  "name": "",
  "type": "",
  "scrapingType":"",
  "mandatory" : true,
  "variations": [
    { ...JSON.parse(JSON.stringify(variationTemplate)) }
  ]
};

export const manipulationBlockTemplate = {
  "uuid": "",
  "condition": {
    "uuid": "",
    "version": "",
    "leftOperand": "",
    "rightOperand": "",
    "operator": "",
    "convertedLeftOperand": "",
    "convertedRightOperand": "",
    "convertedOperator": ""
  },
  "expression": {
    "uuid": "",
    "version": "",
    "expression": "",
    "convertedExpression": ""
  }
}

export const stateStatusTemplate = {
  "uuid": "",
  "id": "",
  "name": "",
  "description": "",
  "lastAccessedTime": "",
  "commandInput": [JSON.parse(JSON.stringify(commandInputTemplate))],
  "status": {
    "statusCode": "",
    "statusType": ""
  }
};

export const identifierTemplate = {
  "uuid": "",
  "description": "",
  "commandInput": JSON.parse(JSON.stringify(commandInputTemplate)),
  "variations": [
    { ...JSON.parse(JSON.stringify(variationTemplate)) }
  ]
};

export const navigationTemplate = {
  "uuid": "",
  "destinations": [],
  "preProcessingPhase": {
    "actions": [],
  },
  "variations": [
    { ...JSON.parse(JSON.stringify(variationTemplate)) }
  ]
}

export const tableTemplate = {
  "uuid": "",
  "id": "",
  "type": "table",
  "name": "",
  "scrapingType":"",
  "supportedContainers": [],
  "mandatory": true,
  "variations": [
    { ...JSON.parse(JSON.stringify(variationTemplate)) }
  ]
}

export const processingTemplate = {
  "id": "",
  "name": "",
  "description": "",
  "variations": [
    { ...JSON.parse(JSON.stringify(variationTemplate)) }
  ]
}

export const qaTemplate = {
  "questionLocator": {
    "path": "",
    "locatorType": "",
    "elementType": ""
  },
  "answerLocator": {
    "path": "",
    "locatorType": "",
    "elementType": ""
  }
}
export const downloadStatusLocatorSchema = {
  "locator": { ...JSON.parse(JSON.stringify(locatorSchema)) },
  "frames": []
}

export const filterCriteriaSchema = {
  "query": "",
  "constraint": "",
  "operation": "",
  "parameters": [],
  "operand": [],
  "uuid": ""
}

export const groupCriteriaSchema = {
  "uuid": "",
  "rowCount": 1,
  "groupAttribute": "",
  "startCriteria": {
    "uuid": "",
    "index": "-1",
    "startRow": "START_FROM_ROW",
    "locators": []
  },
  "endCriteria": {
    "uuid": "",
    "index": "-1",
    "locators": []
  },
  "skipCriteria": {
    "uuid": "",
    "index": "-1",
    "locators": []
  }
}

export const headerInfoSchema = {
  ...locatorSchema,
  selectedHeaderAttribute: ""
}

export const metadataFilling = JSON.parse(JSON.stringify({
  "CLICK": {
    "uuid": "",
    "type": "CLICK",
    "loginMetafield": ""
  },
  "CHECK": {
    "uuid": "",
    "type": "CHECK",
    "checkIt": true
  },
  "HTTP_REQUEST": {
    "uuid": "",
    "type": "HTTP_REQUEST",
    "requestName": "",
    "scrapingType": "",
  },
  "INPUT": {
    "uuid": "",
    "type": "INPUT",
    "fillValue": "",
    "dateFormat": "",
    "optional": false,
    "fillInputManipulations": JSON.parse(JSON.stringify(postManipulationsTemplate))
  },
  "SWITCH": {
    "type": "SWITCH",
    "uuid": "",
    "index": 1
  },
  "SELECT": {
    "uuid": "",
    "type": "SELECT",
    "caseSensitiveMatch": "",
    "value": "",
    "attribute": "",
    "selectCriteria": "",
    "selectType": "",
    "selectManipulations": JSON.parse(JSON.stringify(postManipulationsTemplate))
  },
  "DOWNLOAD": {
    "uuid": "",
    "type": "DOWNLOAD",
    "downloadTimeout": 50,
    "fileType": "",
    "noDataFoundLocator": JSON.parse(JSON.stringify(locatorSchema)),
    "streamingReqd": false,
    "printPDF": false,
    "sortByPosition": false,
    "printWindow": false,
    "url": "",
    "frequency": "",
    "isThrowException": false,
    "isRetry": false,
    "downloadStatusLocator": [
    ]
  },
  "SCROLL": {
    "uuid": "",
    "type": "SCROLL",
    "sliderLocator": {
      "path": "",
      "locatorType": ""
    },
    "sliderBarLocator": {
      "path": "",
      "locatorType": ""
    },
    "toElement": {
      "path": "",
      "locatorType": ""
    },
    "scrollPercent": 10,
    "direction": ""
  },
  "PARSE_FILE": {
    "uuid": "",
    "type": "PARSE_FILE",
    "isThrowException": true,
    "fileType": "",
    "startCriteria": {
      "uuid": "",
      "index": "-1",
      "startRow": "START_FROM_ROW",
      "locators": []
    },
    "endCriteria": {
      "uuid": "",
      "index": "-1",
      "locators": []
    },
    "skipCriteria": {
      "uuid": "",
      "index": "-1",
      "locators": []
    },
    "sheetName": "",
    "ofxFieldPath": "",
    "dateFormat": "",
    "fields": []
  },
  "PICK_DATE": {
    "uuid": "",
    "type": "PICK_DATE",
    "fillValue": "",
    "dateFormat": "",
    "selectCalenderLocator": {
      "path": "",
      "locatorType": ""
    },
    "calenderDaysTableLocator": {
      "path": "",
      "locatorType": ""
    },
    "monthLocator": {
      "path": "",
      "locatorType": ""
    },
    "yearLocator": {
      "path": "",
      "locatorType": ""
    },
    "previousButtonLocator": {
      "path": "",
      "locatorType": ""
    },
    "optional": false,
    "fillInputManipulations": JSON.parse(JSON.stringify(postManipulationsTemplate))
  },
  "QA": {
    "uuid": "",
    "type": "QA",
    "questionAnswers": [
      {
        "questionLocator": {
          "path": "",
          "locatorType": "",
          "elementType": "",
          "frames": ""
        },
        "answerLocator": {
          "path": "",
          "locatorType": "",
          "elementType": "",
          "frames": ""
        },
        "manipulations": [
          { ...JSON.parse(JSON.stringify(manipulationElement)) }
        ]
      }
    ],
    "rememberMeLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    },
    "submitLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    }
  },
  "TOKEN": {
    "uuid": "",
    "type": "TOKEN",
    "displayText": "",
    "answerLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    },
    "rememberMeLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    },
    "submitLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    }
  },
  "CAPTCHA": {
    "uuid": "",
    "type": "CAPTCHA",
    "imageLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    },
    "answerLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    },
    "displayText": "",
    "rememberMeLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    },
    "submitLocator": {
      "path": "",
      "locatorType": "",
      "frames": ""
    }
  },
  "ATTRIBUTE": {
    "uuid": "",
    "type": "ATTRIBUTE",
    "attributeName": "",
    "dateFormat": "",
  },
  "NODE": {
    "uuid": "",
    "type": "NODE",
    "fileType":"",
    "feedRequestName": "",
    "isNodeConcatenationRequired": "",
    "nodeConcatenationDelimiter": ""
  },
  "NODE_LIST": {
    "isThrowException": true,
    "feedRequestName":"",
    "type": "NODE_LIST",
    "uuid": "",
    "fileType": "OFX",
    "loopLocator": JSON.parse(JSON.stringify(locatorSchema)),
    "fields": [],
    "startCriteria": {
      "uuid": "",
      "index": "-1",
      "startRow": "START_FROM_ROW",
      "locators": []
    },
    "endCriteria": {
      "uuid": "",
      "index": "-1",
      "locators": []
    },
    "skipCriteria": {
      "uuid": "",
      "index": "-1",
      "locators": []
    },
  },
  "TABLE": {
    "waitTime": "",
    "uuid": "",
    "isThrowException": true,
    "type": "TABLE",
    "loopLocator": JSON.parse(JSON.stringify(locatorSchema)),
    "headerLocator": JSON.parse(JSON.stringify(headerInfoSchema)),
    "startCriteria": {
      "uuid": "",
      "index": "-1",
      "startRow": "START_FROM_ROW",
      "locators": []
    },
    "endCriteria": {
      "uuid": "",
      "index": "-1",
      "locators": []
    },
    "skipCriteria": {
      "uuid": "",
      "index": "-1",
      "locators": []
    },
    "containerBasedManipulations":
      JSON.parse(JSON.stringify(postManipulationsTemplate))
    ,
    "filterCriteria": JSON.parse(JSON.stringify(filterCriteriaSchema)),
    "groupCriteria": JSON.parse(JSON.stringify(groupCriteriaSchema)),
    "getDataCriteria": "",
    "dateFormat": "",
    "fields": [],
    "innerTable": {
      "waitTime": "",
      "type": "TABLE",
      "loopLocator": JSON.parse(JSON.stringify(locatorSchema)),
      "startCriteria": {
        "uuid": "",
        "index": "-1",
        "startRow": "START_FROM_ROW",
        "locators": []
      },
      "endCriteria": {
        "uuid": "",
        "index": "-1",
        "locators": []
      },
      "skipCriteria": {
        "uuid": "",
        "index": "-1",
        "locators": []
      },
      "filterCriteria": JSON.parse(JSON.stringify(filterCriteriaSchema)),
      "getDataCriteria": "",
      "dateFormat": "",
      "fields": []
    }
  },
  "PDF_TABLE": {
    "uuid": "",
    "type": "PDF_TABLE",
    "scrapingMethod": "auto",
    "headerLessVariations": false,
    "scrapeFieldAsTable": false,
    "headerLessConfig": JSON.parse(JSON.stringify(headerLessConfig)),
    "numberOfHeaderLines": "-1",
    "numberOfHeaders": "-1",
    "dateFormat": "",
    "headerCriteria": {
      "locators": []
    },
    "bottomCriteria": {
      "locators": []
    },
    "leftCriteria": {
      "locators": []
    },
    "rightCriteria": {
      "locators": []
    },
    "skipCriteria": {
      "locators": []
    },
    "fields": []
  },
  "COMMUNICATOR": {
    "uuid": "",
    "type": "COMMUNICATOR",
    "questionAnswers": [
      {
        "questionLocator": {
          "uuid": "",
          "path": "",
          "locatorType": "TEXT",
          "elementType": "text",
          "defaultDisplayText": "Enter your Registered email id Or phone Number for receiving the verification code by text / mail",
          "frames": []
        },
        "answerLocator": {
          "uuid": "",
          "path": "",
          "locatorType": "",
          "elementType": "",
          "frames": [],
          "isV1RequestQA": true,
          "groupLocator": {
            "uuid": "",
            "path": "",
            "locatorType": "",
          },
          "loopLocator": {
            "uuid": "",
            "path": "",
            "locatorType": ""
          },
          "startCriteria": {
            "uuid": "",
            "index": "-1",
            "startRow": "START_FROM_ROW",
            "locators": []
          },
          "endCriteria": {
            "uuid": "",
            "index": "-1",
            "locators": []
          },
          "skipCriteria": {
            "uuid": "",
            "index": "-1",
            "locators": []
          },
          "optionElements": {
            "optionLabelLocator": {
              "uuid": "",
              "path": "",
              "locatorType": ""
            },
            "labelAttributeName": "innerText",
            "optionLocator": {
              "uuid": "",
              "path": "",
              "locatorType": ""
            },
            "optionAttributeName": "innerText"
          },

          "optionMetadata": [
            {
              "optionType": "",
              "optionMatchType": "COMMUNICATION",
              "patternReplaceText": "",
              "optionPattern": ""
            }
          ]
        }
      }
    ]
  }
}));

export const fields = {
  "parseFields": {
    "name": "",
    "type": "default",
    "columnHeader": "",
    "columnIndex": "",
    "isThrowException": true,
    "postManipulations": JSON.parse(JSON.stringify(postManipulationsTemplate)),
    locator: JSON.parse(JSON.stringify(locatorSchema))
  },
  "tableFields": {
    "uuid": "",
    "id": "",
    "name": "",
    "type": "",
    "postManipulations": JSON.parse(JSON.stringify(postManipulationsTemplate)),
    "column": {
      "uuid": "",
      "type": "COLUMN",
      "locator": JSON.parse(JSON.stringify(locatorSchema)),
      "label": "",
      "attributeName": "",
      "columnOffSet": "",
      "isThrowException": true
    },
    "rowIndex": 0,
    "rowText": "",
    "manipulationBlocks": []
  }
}

export const onlineManipulationRequest = {
  "scrapedValue": "",
  "derivedValue": "",
  "uuid": "",
  "baseAgent": "",
  "agentName": "",
  "container": "",
  "csid": "",
  "locator": "",
  "segmentId": "",
  "fieldName": "",
  "requestType": "",
  "response": "",
  "requestBy": "aim"
};

//For AJAX/FEED REQUEST

export const requestURL={
  "uuid":"",
  "env": "",
  "serverURL": "",
  "proxyURL":"",
  "serverManipulationPath":JSON.parse(JSON.stringify(manipulationPathSchema)),
  "proxyManipulationPath":JSON.parse(JSON.stringify(manipulationPathSchema))
}

export const requestNodeSchema={
  "uuid":"",
  "name": "",
  "value": "",
  "valueType":"",
  "valueManipulation":JSON.parse(JSON.stringify(manipulationPathSchema)),
  "attributes":[],
  "children":[],
  "values":[],
  "condition":{}
}

export const requestTemplate={
  "uuid":"",
  "isConsolidated":true,
  "scriptTimeout":"",
  "requestName":"",
  "httpMethod":"",
  "bodyFormat":"",
  "requestHeader":[],
  "requestBody":[],
  "signRequest":{},
  "connectionTags":[],
  "requestURLs":[],
  "connectionType":"",
  "retry":[]
}

export const genericLogoutLocator = "//*[contains(text(),'logout')]|//*[contains(text(),'Logout')]|//*[contains(text(),'LogOut')]|//*[contains(text(),'Log Out')]|//*[contains(text(),'log out')]|//*[contains(text(),'signoff')]|//*[contains(text(),'Signoff')]|//*[contains(text(),'SignOff')]|\r\n" + 
"//*[contains(text(),'log off')]|\r\n" + 
"//*[contains(text(),'Log Off')]|\r\n" + 
"//*[contains(text(),'signout')]|\r\n" + 
"//*[contains(text(),'Signout')]|\r\n" + 
"//*[contains(text(),'SignOut')]|\r\n" + 
"//*[contains(text(),'sign out')]|\r\n" + 
"//*[contains(text(),'Sign Out')]|\r\n" + 
"//*[contains(text(),'SIGN OUT')]|\r\n" + 
"//*[contains(text(),'logoff')]|\r\n" + 
"//*[contains(text(),'LogOff')]|\r\n" + 
"//*[contains(text(),'Logoff')]|\r\n" + 
"//*[contains(text(),'sign off')]|\r\n" + 
"//*[contains(text(),'Sign Off')]|\r\n" + 
"//*[contains(text(),'exit')]|\r\n" + 
"//*[contains(text(),'EXIT')]|\r\n" + 
"//*[contains(text(),'goodbye.')]|\r\n" + 
"//*[contains(text(),'Goodbye.')]|\r\n" + 
"//*[contains(text(),'disconnector')]|\r\n" + 
"//*[contains(text(),'Disconnector')]|//*[contains(text(),'fin de session')]|\r\n" + 
"//*[contains(text(),'Fin De Session')] ";

export const logoutLocatorTemplate = {
 "locatorType": "XPATH",
 "path": genericLogoutLocator
};

export const automaticLogoutOutNavigation = {
  "uuid": "AutomateLogout_18401_D089AF9E-18BA-47AE-8D95-8DF3678297GH",
  "destinations": [
    "BASE_LOGOUT_1"
  ],
  "preProcessingPhase": {
    "actions": []
  },
  "variations": [
    {
      "uuid": "AutomateLogout_18401_A4CB51CF-7AC0-44D3-94EF-D888778DF499",
      "id": "",
      "description": "",
      "lastAccessedTime": "",
      "ASStateIdentifier": [],
      "waitTime": "",
      "identifiers": [
        {
          "commandInput": {
            "uuid": "AutomateLogout_18401_2D3796FC-88EE-48A3-9E88-6819EE85F184",
            "action": "DETECT",
            "frames": [],
            "locator": {
              "uuid": "AutomateLogout_18401_538D2548-6875-4253-AD90-B68768D0496D",
              "locatorType": "XPATH",
              "path": genericLogoutLocator,
              "direction": "",
              "startX": "",
              "endX": "",
              "startY": "",
              "endY": "",
              "pageNumber": "",
              "manipulationPath": {
                "dynamicValues": [
                  {
                    "replaceText": "",
                    "replaceWith": "",
                    "replacingType": "",
                    "postManipulations": {}
                  }
                ]
              }
            }
          }
        }
      ],
      "throwException": true,
      "commandInput": {
        "uuid": "AutomateLogout_18401_D089AF9E-18BA-47AE-8D95-8DF4BA037049",
        "locator": {
          "uuid": "AutomateLogout_18401_0224809F-B489-407F-8982-58300F27C6C2",
          "locatorType": "XPATH",
          "path": genericLogoutLocator,
          "direction": "",
          "startX": "",
          "endX": "",
          "startY": "",
          "endY": "",
          "pageNumber": "",
          "manipulationPath": {
            "dynamicValues": [
              {
                "replaceText": "",
                "replaceWith": "",
                "replacingType": "",
                "postManipulations": {}
              }
            ]
          }
        },
        "action": "CLICK",
        "frames": [],
        "wait": {
          "waitDelay": "",
          "waitLocators": [
            {
              "frames": [],
              "locator": {
                "uuid": "AutomateLogout_18401_1009F4C1-EEF9-4B4D-9834-53527FE8492C",
                "locatorType": "",
                "path": "",
                "direction": "",
                "startX": "",
                "endX": "",
                "startY": "",
                "endY": "",
                "pageNumber": "",
                "manipulationPath": {
                  "dynamicValues": [
                    {
                      "replaceText": "",
                      "replaceWith": "",
                      "replacingType": "",
                      "postManipulations": {}
                    }
                  ]
                }
              }
            }
          ]
        },
        "metadata": {
          "type": "CLICK"
        },
        "postManipulations": {
          "manipulations": [
            {
              "type": "",
              "methodName": "",
              "uuid": "AutomateLogout_18401_62DCCF9C-9DDD-4057-9E42-93A789947279",
              "methodClass": "",
              "arguments": [],
              "variable": "",
              "expression": "",
              "nestedStatements": []
            }
          ]
        }
      },
      "manipulationBlocks": []
    }
  ]
};

