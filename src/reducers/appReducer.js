let data = {
  manipulationMethods:[
    {
      "javaDoc": {
        "string": "hello"
      },
      "name": "if",
      "className": "ConditionalOpertaion",
      "arguments": [
        {
          "dataType": "String",
          "name": "lhs"
        },
        {
          "dataType": "Operator",
          "name": "operator"
        },
        {
          "dataType": "String",
          "name": "rhs"
        }
      ],
      "type": "default",
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the formatted date string.\r\n\t * \r\n\t * @param date\r\n\t *            - Date object to be formatted.\r\n\t * @param format\r\n\t *            - expected format for date\r\n\t * @return - Date string for the given date in the given format.\r\n\t */\r\n"
      },
      "name": "assign",
      "className": "ConditionalOpertaion",
      "arguments": [
        {
          "dataType": "String",
          "name": "lhs"
        },
        {
          "dataType": "String",
          "name": "rhs"
        }
      ],
      "type": "default",
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the formatted date string.\r\n\t * \r\n\t * @param date\r\n\t *            - Date object to be formatted.\r\n\t * @param format\r\n\t *            - expected format for date\r\n\t * @return - Date string for the given date in the given format.\r\n\t */\r\n"
      },
      "name": "formatDate",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "Date",
          "name": "date"
        },
        {
          "dataType": "String",
          "name": "format"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the parsed date object.\r\n\t * \r\n\t * @param date\r\n\t *            - Date string to be parsed.\r\n\t * @param format\r\n\t *            - expected format for date\r\n\t * @return - Parsed date object for the given date in the given format.\r\n\t */\r\n"
      },
      "name": "parseDate",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "date"
        },
        {
          "dataType": "String",
          "name": "format"
        }
      ],
      "returnType": "Date"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the new updated date string.\r\n\t * \r\n\t * @param date\r\n\t *            - Date string to be modified.\r\n\t * @param format\r\n\t *            - expected format for date\r\n\t * @param days\r\n\t *            - number of days to be added to the date string\r\n\t * @return - new updated Date string.\r\n\t */\r\n"
      },
      "name": "addDays",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "date"
        },
        {
          "dataType": "String",
          "name": "format"
        },
        {
          "dataType": "int",
          "name": "days"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the new updated date string.\r\n\t * \r\n\t * @param date\r\n\t *            - Date string to be modified.\r\n\t * @param format\r\n\t *            - expected format for date\r\n\t * @param days\r\n\t *            - number of days to be subtracted to the date string\r\n\t * @return - new updated Date string.\r\n\t */\r\n"
      },
      "name": "subtractDays",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "date"
        },
        {
          "dataType": "String",
          "name": "format"
        },
        {
          "dataType": "int",
          "name": "days"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns true/false if date1 object is less than date2 object .\r\n\t * \r\n\t * @param date1\r\n\t *            - Date1 object to be compared.\r\n\t * @param date2\r\n\t *            - Date2 object to be compared\r\n\t * @return - true/false.\r\n\t */\r\n"
      },
      "name": "isBeforeDate",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "Date",
          "name": "date1"
        },
        {
          "dataType": "Date",
          "name": "date2"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns true/false if date1 object is greater than date2 object .\r\n\t * \r\n\t * @param date1\r\n\t *            - Date1 object to be compared.\r\n\t * @param date2\r\n\t *            - Date2 object to be compared\r\n\t * @return - true/false.\r\n\t */\r\n"
      },
      "name": "isAfterDate",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "Date",
          "name": "date1"
        },
        {
          "dataType": "Date",
          "name": "date2"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns true/false if date1 string is less than date2 string .\r\n\t * \r\n\t * @param date1\r\n\t *            - Date1 string to be compared.\r\n\t * @param date2\r\n\t *            - Date2 string to be compared\r\n\t * @param format\r\n\t *            - expected format for date\r\n\t * @return - true/false.\r\n\t */\r\n"
      },
      "name": "isBeforeDate",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "date1"
        },
        {
          "dataType": "String",
          "name": "date2"
        },
        {
          "dataType": "String",
          "name": "format"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns true/false if date1 string is greater than date2 string .\r\n\t * \r\n\t * @param date1\r\n\t *            - Date1 string to be compared.\r\n\t * @param date2\r\n\t *            - Date2 string to be compared\r\n\t * @param format\r\n\t *            - expected format for date\r\n\t * @return - true/false.\r\n\t */\r\n"
      },
      "name": "isAfterDate",
      "className": "DateManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "date1"
        },
        {
          "dataType": "String",
          "name": "date2"
        },
        {
          "dataType": "String",
          "name": "format"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Converts the given number string to BigDecimal for arithmetic operations.\r\n\t * <br>\r\n\t * Throws exceptions if the provided string is not number.\r\n\t * \r\n\t * @param number\r\n\t *            - number string\r\n\t * @return\r\n\t */\r\n"
      },
      "name": "toBigDecimal",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "number"
        }
      ],
      "returnType": "BigDecimal"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the plain string representation of given number.\r\n\t * \r\n\t * @param number - BigDecimal object\r\n\t * @return - plain string representation of given number\r\n\t */\r\n"
      },
      "name": "toString",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "BigDecimal",
          "name": "number"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the sum of the given number string.\r\n\t * \r\n\t * @param operand1 - number string\r\n\t * @param operand2 - number string\r\n\t * @return - sum of given numbers\r\n\t */\r\n"
      },
      "name": "add",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "operand1"
        },
        {
          "dataType": "String",
          "name": "operand2"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the sum of the given number string with given scale.\r\n\t * \r\n\t * @param operand1 - number string\r\n\t * @param operand2 - number string\r\n\t * @param scale - number of integers post decimal point\r\n\t * @return - sum of given numbers\r\n\t */\r\n"
      },
      "name": "add",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "operand1"
        },
        {
          "dataType": "String",
          "name": "operand2"
        },
        {
          "dataType": "int",
          "name": "scale"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the difference of the given number strings.\r\n\t * <br>\r\n\t * returns (operand1 - operand2)\r\n\t * \r\n\t * @param operand1 - number string\r\n\t * @param operand2 - number string\r\n\t * @return - difference of given numbers\r\n\t */\r\n"
      },
      "name": "subtract",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "operand1"
        },
        {
          "dataType": "String",
          "name": "operand2"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the difference of the given number strings with given scale.\r\n\t * <br>\r\n\t * returns (operand1 - operand2)\r\n\t * \r\n\t * @param operand1 - number string\r\n\t * @param operand2 - number string\r\n\t * @param scale - number of integers post decimal point\r\n\t * @return - difference of given numbers\r\n\t */\r\n"
      },
      "name": "subtract",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "operand1"
        },
        {
          "dataType": "String",
          "name": "operand2"
        },
        {
          "dataType": "int",
          "name": "scale"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the quotient after performing division operation.\r\n\t * <br>\r\n\t * quotient = dividend / divisor\r\n\t * <br><br>\r\n\t * Scale of the quotient is limited to given scale.\r\n\t * \r\n\t * @param dividend - number string for dividend\r\n\t * @param divisor - number string for divisor\r\n\t * @param scale - number of integers post decimal point\r\n\t * @return - quotient after performing division\r\n\t */\r\n"
      },
      "name": "divide",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "dividend"
        },
        {
          "dataType": "String",
          "name": "divisor"
        },
        {
          "dataType": "int",
          "name": "scale"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**Returns the quotient after performing division operation.\r\n\t * <br>\r\n\t * quotient = dividend / divisor\r\n\t * <br><br>\r\n\t * Scale of the quotient is limited to given scale.\r\n\t * <br>\r\n\t * Based on removeTrailingZeroes flag, trailing zeros post decimal will be removed or retained.\r\n\t * \r\n\t * @param dividend - number string for dividend\r\n\t * @param divisor - number string for divisor\r\n\t * @param scale - number of integers post decimal point\r\n\t * @param removeTrailingZeroes - if set to <i>true</i>, removes trailing zeros else does nothing.\r\n\t * @return - quotient after performing division\r\n\t */\r\n"
      },
      "name": "divide",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "dividend"
        },
        {
          "dataType": "String",
          "name": "divisor"
        },
        {
          "dataType": "int",
          "name": "scale"
        },
        {
          "dataType": "boolean",
          "name": "removeTrailingZeroes"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the remainder after performing division (dividend / divisor).\r\n\t * \r\n\t * @param dividend - number string for dividend\r\n\t * @param divisor - number string for divisor\r\n\t * @return - remainder after performing division\r\n\t */\r\n"
      },
      "name": "modulus",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "dividend"
        },
        {
          "dataType": "String",
          "name": "divisor"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Changes the number of digits post decimal point with the given scale.\r\n\t * <br>\r\n\t * Scale is the number of digits post decimal point.\r\n\t * <br>\r\n\t * <pre>\r\n\t * \t\tscale('123.200', 2) will return '123.20'\r\n\t * \t\tscale('123', 2)     will return '123.00'\r\n\t * \t\tscale('123.236', 2) will return '123.24'\r\n\t * </pre>\r\n\t * \r\n\t * @param number - number string\r\n\t * @param scale - number of integers post decimal point\r\n\t * @return - number string with expected scale\r\n\t */\r\n"
      },
      "name": "scale",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "number"
        },
        {
          "dataType": "int",
          "name": "scale"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns a new string which is reverse of the {@code input} string. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input   = 'input'\r\n\t * reverse = 'tupni'\r\n\t * \r\n\t * input   = 'some string'\r\n\t * reverse = 'gnirts emos'\r\n\t * \r\n\t * input   = {@code null}\r\n\t * reverse = {@code null}\r\n\t * </pre>\r\n\t * \r\n\t * @param input - string to be reversed\r\n\t * @return - reversed input string\r\n\t */\r\n"
      },
      "name": "reverse",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method is used for comparing two strings lexicographically. \r\n\t * Each character of both the strings is converted into a Unicode value for comparison. \r\n\t * If both the strings are equal then this method returns 0 else it returns positive or negative value.\r\n\t * This is case sensitive. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * anotherString = 'input'\r\n\t * value = 0\r\n\t * \r\n\t * input = 'hello'\r\n\t * obj = 'meklo'\r\n\t * value = -5\r\n\t * \r\n\t * input = 'hello'\r\n\t * obj = 'flag'\r\n\t * value = 2\r\n\t * </pre>\r\n\t * \r\n\t * @param input - String parameter to be compared\r\n\t * @param anotherString - String parameter to be compared\r\n\t * @return - integer value\r\n\t */\r\n"
      },
      "name": "compareTo",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "anotherString"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns a character at the given index of the {@code input} string. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * character at 4 = 't'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - string value\r\n\t * @param index - integer value\r\n\t * @return - Character\r\n\t */\r\n"
      },
      "name": "charAt",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "index"
        }
      ],
      "returnType": "char"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method replaces the first substring of this string that matches the given regular expression with the given replacement. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'Welcome to JAVA'\r\n\t * replaceFirst(input, 'JAVA', 'C') = 'Welcome to C'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input String to be manipulated.\r\n\t * @param regex - the regular expression to which this string is to be matched.\r\n\t * @param replacement - the string which would replace found expression.\r\n\t * @return - replaced String\r\n\t */\r\n"
      },
      "name": "replaceFirst",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "regex"
        },
        {
          "dataType": "String",
          "name": "replacement"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t *  This method returns a string replacing all the sequence of characters matching regex and replacement string. </br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'Welcome to JAVA'\r\n\t * replaceAll(input, 'A', 'C') = 'Welcome to JCVC'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input String to be manipulated.\r\n\t * @param regex - the regular expression to which this string is to be matched.\r\n\t * @param replacement - the string which would replace found expression.\r\n\t * @return - replaced String\r\n\t */\r\n"
      },
      "name": "replaceAll",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "regex"
        },
        {
          "dataType": "String",
          "name": "replacement"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method combines specified string at the end of this input string. It returns combined string. It is like appending another string. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'Spring'\r\n\t * concat(input, 'Framework') = 'SpringFramework'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input String to concatenated.\r\n\t * @param anotherString - another string i.e. to be combined at the end of this input string.\r\n\t * @return - concatenated String\r\n\t */\r\n"
      },
      "name": "concat",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "anotherString"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method returns an Array of chars after converting a String into sequence of characters.\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'JAVA'\r\n\t * toCharArray(input) = {'J','A','V','A'}\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input String to be converted to character array.\r\n\t * @return - character array.\r\n\t */\r\n"
      },
      "name": "toCharArray",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "char[]"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method gives the string representation of an object.</br>\r\n\t * \r\n\t * @param input - input String\r\n\t * @return - String object \r\n\t */\r\n"
      },
      "name": "toString",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method checks if this string ends with given suffix. \r\n\t * It returns true if this string starts with given suffix else returns false.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * ends with 'ut' = true\r\n\t * \r\n\t * input = 'input'\r\n\t * ends with 'j' = false\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param prefix - String value\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "endsWith",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "suffix"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "This method checks if this string is Blank. It returns true if this string starts with given suffix else returns false."
      },
      "name": "isBlank",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "type": "default",
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns index of given character value.\r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input123'\r\n\t * index of '1' = 5\r\n\t * \r\n\t * input = 'input'\r\n\t * index of '4' = -1\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param ch - character value\r\n\t * @return integer value - index position of a given character\r\n\t */\r\n"
      },
      "name": "indexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "ch"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns index of given character value from given index. \r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'some12 string123'\r\n\t * index of '2' from index 6 = 14\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param ch - character value\r\n\t * @param fromIndex - index position from where index of the char value is returned\r\n\t * @return integer value - index position of a given character\r\n\t */\r\n"
      },
      "name": "indexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "ch"
        },
        {
          "dataType": "int",
          "name": "fromIndex"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns index of given string value.\r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * index of 'p' = 2\r\n\t * \r\n\t * input = 'input'\r\n\t * index of 'j' = -1\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param str - String value\r\n\t * @return integer value - index position of a given string\r\n\t */\r\n"
      },
      "name": "indexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "str"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns index of given string value from given index. \r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'some string'\r\n\t * index of 's' from index 2 = 5\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param str - String value\r\n\t * @param fromIndex - index position from where index of the char value is returned\r\n\t * @return integer value - index position of a given string\r\n\t */\r\n"
      },
      "name": "indexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "str"
        },
        {
          "dataType": "int",
          "name": "fromIndex"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns last index of given character value.\r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input122'\r\n\t * index of '2' = 7\r\n\t * \r\n\t * input = 'input'\r\n\t * index of '4' = -1\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param ch - character value\r\n\t * @return integer value - index position of a given character\r\n\t */\r\n"
      },
      "name": "lastIndexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "ch"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns last index of given character value from given index. \r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'some12 string123'\r\n\t * last index of '2' from index 6 = 14\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param ch - character value\r\n\t * @param fromIndex - index position from where index of the char value is returned\r\n\t * @return integer value - index position of a given character\r\n\t */\r\n"
      },
      "name": "lastIndexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "ch"
        },
        {
          "dataType": "int",
          "name": "fromIndex"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns last index of given string value.\r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * index of 'p' = 2\r\n\t * \r\n\t * input = 'input'\r\n\t * index of 'j' = -1\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param str - String value\r\n\t * @return integer value - index position of a given string\r\n\t */\r\n"
      },
      "name": "lastIndexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "str"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns last index of given string value from given index. \r\n\t * If it is not found, it returns -1. The index counter starts from zero.</br>\r\n\t *  <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'some string'\r\n\t * index of 's' from index 2 = 5\r\n\t * </pre> \r\n\t * \r\n\t * @param input - String value\r\n\t * @param str - String value\r\n\t * @param fromIndex - index position from where index of the char value is returned\r\n\t * @return integer value - index position of a given string\r\n\t */\r\n"
      },
      "name": "lastIndexOf",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "str"
        },
        {
          "dataType": "int",
          "name": "fromIndex"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the length of the {@code input} string. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input   = 'input'\r\n\t * length = 5\r\n\t * \r\n\t * input   = 'some string'\r\n\t * length = 11\r\n\t * </pre>\r\n\t * \r\n\t * @param input - string whose length to be determined \r\n\t * @return - length of input string\r\n\t */\r\n"
      },
      "name": "lengthFind",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the length of the {@code input} string. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input   = 'input'\r\n\t * length = 5\r\n\t * \r\n\t * input   = 'some string'\r\n\t * length = 11\r\n\t * </pre>\r\n\t * \r\n\t * @param input - string whose length to be determined \r\n\t * @return - length of input string\r\n\t */\r\n"
      },
      "name": "length",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "int"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method is used for checking prefix of a String. \r\n\t * It returns boolean value true if the String begins with prefix, it starts looking from the specified index �toffset�.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * starts with 'in' = true\r\n\t * </pre>\r\n\t * \r\n\t * @param input - String value\r\n\t * @param prefix - String value\r\n\t * @param toffset - Integer value\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "startsWith",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "prefix"
        },
        {
          "dataType": "int",
          "name": "toffset"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * This method checks if this string starts with given prefix. \r\n\t * It returns true if this string starts with given prefix else returns false.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * starts with 'in' = true\r\n\t * \r\n\t * input = 'input'\r\n\t * starts with 'j' = false\r\n\t * </pre>\r\n\t * \r\n\t * @param input - String value\r\n\t * @param prefix - String value\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "startsWith",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "prefix"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns boolean value true if the content of input string and content of the string to be compared is equal else returns false.\r\n\t * This is case sensitive. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * obj = 'input'\r\n\t * value = true\r\n\t * \r\n\t * input = 'input'\r\n\t * obj = 'Input'\r\n\t * value = false\r\n\t * \r\n\t * input = 'some'\r\n\t * obj = 'example'\r\n\t * value = false\r\n\t * </pre>\r\n\t * \r\n\t * @param input - string to be checked\r\n\t * @param obj - an string to be checked\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "equals",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "obj"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns boolean value true if the content of input string and content of the object to be compared is equal else returns false.\r\n\t * This is case insensitive. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * obj = 'input'\r\n\t * value = true\r\n\t * \r\n\t * input = 'input'\r\n\t * obj = 'Input'\r\n\t * value = false\r\n\t * \r\n\t * input = 'some'\r\n\t * obj = 'example'\r\n\t * value = false\r\n\t * </pre>\r\n\t * \r\n\t * @param input - string to be checked\r\n\t * @param anotherString - an object to be checked\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "equalsIgnoreCase",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "anotherString"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns boolean value true if the content of input string and content of the stringBuffer to be compared is equal else returns false.\r\n\t * This is case insensitive. </br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * anotherString = 'input'\r\n\t * value = true\r\n\t * \r\n\t * input = 'some'\r\n\t * obj = 'example'\r\n\t * value = false\r\n\t * </pre>\r\n\t * \r\n\t * @param input - string to be checked\r\n\t * @param anotherString - stringBuffer to be compared\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "contentEquals",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "StringBuffer",
          "name": "anotherString"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns true if and only if this string contains the specified sequence of char values.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * s = 'pu'\r\n\t * value = true\r\n\t * \r\n\t * input = 'some'\r\n\t * s = 'eg'\r\n\t * value = false\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param s - sequence to search for\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "contains",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "CharSequence",
          "name": "s"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns true if string matches the given regular expression else false.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * regex = 'in(.*)'\r\n\t * value = true\r\n\t * \r\n\t * input = 'some'\r\n\t * regex = 'so'\r\n\t * value = false\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param regex - regular expression to be matched\r\n\t * @return - boolean value true/false\r\n\t */\r\n"
      },
      "name": "matches",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "regex"
        }
      ],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns a string replacing all the old charSequence to new charSequence.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'put'\r\n\t * oldChar = 'pu'\r\n\t * newChar = 'ba'\r\n\t * value = 'bat'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param target - character to be replaced\r\n\t * @param replacement - character to be replaced with\r\n\t * @return - replaced String\r\n\t */\r\n"
      },
      "name": "replace",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "CharSequence",
          "name": "target"
        },
        {
          "dataType": "CharSequence",
          "name": "replacement"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Method splits input string against given regular expression and returns a string array.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input string'\r\n\t * regex = ' '\r\n\t * limit = 1\r\n\t * value = '[input]'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param regex - regular expression to be applied on string\r\n\t * @param limit - limit for the number of strings in array. If it is zero, it will returns all the strings matching regex\r\n\t * @return - string array\r\n\t */\r\n"
      },
      "name": "split",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "regex"
        },
        {
          "dataType": "int",
          "name": "limit"
        }
      ],
      "returnType": "String[]"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Method splits input string against given regular expression and returns a string array.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input string'\r\n\t * regex = ' '\r\n\t * value = '[input, string]'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param regex - regular expression to be applied on string\r\n\t * @param limit - limit for the number of strings in array. If it is zero, it will returns all the strings matching regex\r\n\t * @return - string array\r\n\t */\r\n"
      },
      "name": "split",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "regex"
        }
      ],
      "returnType": "String[]"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns a new character sequence that is a subsequence of this sequence.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input string'\r\n\t * beginIndex = '2'\r\n\t * endIndex = '5'\r\n\t * value = 'put'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param beginIndex - the begin index, inclusive.\r\n\t * @param endIndex - the end index, exclusive\r\n\t * @return - subsequence\r\n\t */\r\n"
      },
      "name": "subSequence",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "beginIndex"
        },
        {
          "dataType": "int",
          "name": "endIndex"
        }
      ],
      "returnType": "CharSequence"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns a part of the string.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input string'\r\n\t * beginIndex = '2'\r\n\t * value = 'put string'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param beginIndex - the begin index, inclusive.\r\n\t * @return - sub string\r\n\t */\r\n"
      },
      "name": "substring",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "beginIndex"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns a part of the string.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input string'\r\n\t * beginIndex = '2'\r\n\t * endIndex = '5'\r\n\t * value = 'put'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param beginIndex - the begin index, inclusive.\r\n\t * @param endIndex - the end index, exclusive\r\n\t * @return - sub string\r\n\t */\r\n"
      },
      "name": "substring",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "int",
          "name": "beginIndex"
        },
        {
          "dataType": "int",
          "name": "endIndex"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the string in lowercase letter using the rules of given Locale.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'INPUT'\r\n\t * locale = Locale.FRANCE\r\n\t * value = 'input'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param locale - any locale defining rules.\r\n\t * @return - lowercase string\r\n\t */\r\n"
      },
      "name": "toLowerCase",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "Locale",
          "name": "locale"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the string in lowercase letter.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'INPUT'\r\n\t * locale = Locale.FRANCE\r\n\t * value = 'input'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @return - lowercase string\r\n\t */\r\n"
      },
      "name": "toLowerCase",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the string in uppercase letter using the rules of given Locale.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * locale = Locale.FRANCE\r\n\t * value = 'INPUT'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @param locale - any locale defining rules.\r\n\t * @return - uppercase string\r\n\t */\r\n"
      },
      "name": "toUpperCase",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "Locale",
          "name": "locale"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Returns the string in uppercase letter.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = 'input'\r\n\t * locale = Locale.FRANCE\r\n\t * value = 'INPUT'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @return - uppercase string\r\n\t */\r\n"
      },
      "name": "toUpperCase",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * Method eliminates leading and trailing spaces and returns the string.</br>\r\n\t * <b>e.g. -</b>\r\n\t * \r\n\t * <pre>\r\n\t * input = '                input string              '\r\n\t * value = 'input string'\r\n\t * </pre>\r\n\t * \r\n\t * @param input - input string\r\n\t * @return - string\r\n\t */\r\n"
      },
      "name": "trim",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "* Returns the same value, to be used to set intermediate* variable values. * @param value* @return"
      },
      "name": "setValue",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "value"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "* Method removes the character from the given input and return the String* @param input -- input String* @param removeString -- subString to remove from input* @return -- String"
      },
      "name": "remove",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "removeString"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "* Method removes all matching character and return the remaining string* @param input -- input String * @param removeString -- subString to remove* @return -- String(\"Empty String\")"
      },
      "name": "removeAll",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "input"
        },
        {
          "dataType": "String",
          "name": "removeString"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "Returns the product of given number strings.@param operand1 - number string @param operand2 - number string @return - product of given numbers "
      },
      "name": "multiply",
      "className": "NumberManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "operand1"
        },
        {
          "dataType": "String",
          "name": "operand2"
        }
      ],
      "type": "default",
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "Returns the current date in format Thu Nov 21 18:26:11 IST 2019"
      },
      "name": "getSysdate",
      "className": "DateManipulators",
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "/**\r\n\t * swaps data of the lhs and rhs .\r\n\t * \r\n\t *"
      },
      "name": "swap",
      "className": "StringManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "lhs"
        },
        {
          "dataType": "String",
          "name": "rhs"
        }
      ],
      "returnType": "void"
    },
    {
      "javaDoc": {
        "string": "* Returns null value. * @param value* @return"
      },
      "name": "clearValue",
      "className": "ConditionalOpertaion",
      "arguments": [
        {
          "dataType": "String",
          "name": "fieldName"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "boolean": "* To check if recon holding enrichment is requested.* @return"
      },
      "name": "isReconHoldingsRequested",
      "className": "RequestManipulators",
      "arguments": [],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "boolean": "* To check if recon transaction enrichment is requested.* @return"
      },
      "name": "isReconTransactionsRequested",
      "className": "RequestManipulators",
      "arguments": [],
      "returnType": "boolean"
    },
    {
      "javaDoc": {
        "string": "* Get server type from Request.* @return serverType"
      },
      "name": "getServerType",
      "className": "AIMCommonPlugin",
      "arguments": [],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "* Get Database id from Request.* @return databaseId"
      },
      "name": "getDatabaseId",
      "className": "AIMCommonPlugin",
      "arguments": [],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "* Get NumSuccessfulRefresh from request.* @return numSuccessfulRefresh"
      },
      "name": "getNumSuccessfulRefresh",
      "className": "AIMCommonPlugin",
      "arguments": [],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "* Get URL.* @return url"
      },
      "name": "getUrl",
      "className": "AIMCommonPlugin",
      "arguments": [],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "boolean": "convert epoch string to Date string w.r.t given format and timezone"
      },
      "name": "epochToDate",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "epochString"
        },
        {
          "dataType": "String",
          "name": "dateFormat"
        },
        {
          "dataType": "String",
          "name": "timezone"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "boolean": "convert Date string to epoch miliSeconds string of w.r.t format and timezone"
      },
      "name": "dateToEpoch",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "dateString"
        },
        {
          "dataType": "String",
          "name": "dateFormat"
        },
        {
          "dataType": "String",
          "name": "timezone"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "boolean": "seconds string to milliseconds string"
      },
      "name": "secToMilliSec",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "seconds"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "boolean": "milliseconds string to seconds string"
      },
      "name": "milliSecToSec",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "miliSec"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "* Get get Cobrand Id from Request.* @return get Cobrand Id"
      },
      "name": "getCobrandId",
      "className": "AIMCommonPlugin",
      "arguments": [],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "Used this method generate Crypto Account by Mem site Id and with some prefix."
      },
      "name": "generateCryptoAccount",
      "className": "AIMCommonPlugin",
      "returnType": "String"
    },
    {
      "javaDoc": {
        "boolean": "* Get Json Node value.* @return"
      },
      "name": "getJsonNodeValue",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "feedRequestName"
        },
        {
          "dataType": "Operator",
          "name": "locatorPath"
        },
        {
          "dataType": "String",
          "name": "locatorType"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "boolean": "Extracts data from the response of {@code feedRequestName} by given"
      },
      "name": "getAttributeValue",
      "className": "FeedManipulators",
      "arguments": [
        {
          "dataType": "String",
          "name": "feedRequestName"
        },
        {
          "dataType": "Operator",
          "name": "locatorPath"
        },
        {
          "dataType": "String",
          "name": "locatorType"
        }
      ],
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "getCombinedValue : This method returns the combined value of fieldName and values based on the parameters passed. @param tag  @param fieldName @param prefix @param suffix @param delimiter @return combinedValue"
      },
      "name": "getCombinedValue",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "tag"
        },
        {
          "dataType": "String",
          "name": "fieldName"
        },
        {
          "dataType": "String",
          "name": "prefix"
        },
        {
          "dataType": "String",
          "name": "suffix"
        },
        {
          "dataType": "String",
          "name": "delimiter"
        }
      ],
      "type": "default",
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "getCombinedValueWithSuffix : This method returns the combined value of fieldName and values based on the parameters passed. @param tag  @param fieldName  @param suffix @param delimiter @return combinedValue"
      },
      "name": "getCombinedValueWithSuffix",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "tag"
        },
        {
          "dataType": "String",
          "name": "fieldName"
        },
        {
          "dataType": "String",
          "name": "suffix"
        },
        {
          "dataType": "String",
          "name": "delimiter"
        }
      ],
      "type": "default",
      "returnType": "String"
    },
    {
      "javaDoc": {
        "string": "getCombinedValueWithPrefix : This method returns the combined value of fieldName and values based on the parameters passed. @param tag  @param fieldName  @param prefix @param delimiter @return combinedValue"
      },
      "name": "getCombinedValueWithPrefix",
      "className": "AIMCommonPlugin",
      "arguments": [
        {
          "dataType": "String",
          "name": "tag"
        },
        {
          "dataType": "String",
          "name": "fieldName"
        },
        {
          "dataType": "String",
          "name": "prefix"
        },
        {
          "dataType": "String",
          "name": "delimiter"
        }
      ],
      "type": "default",
      "returnType": "String"
    }
  ],
  fieldList:[],
  toolSiteJson:{},
  baseStateLists: [],
  conversionStart: false,
  convertedBlock: null,
  converionSuccess: false,

  openSandBox: false,
  currentValidatedText: "",
  pathValidatedStatus: 'INIT',

  dropDownValue_sandBox: null,
  sandBoxFlag: false,

  manipulationServiceTriggerStatus: 'INIT',
  manipulationServiceData: null,
  manipulationServiceFailure: null,
  onlineAutoManipulations: null,
  autoManipulationStatus: 'INIT',

  //To show message on failure of auto manipulation service
  serviceExceptionMsg: null,
  elasticDeleteResponse: null
}

export default function appReducer(state = data, action) {
  switch (action.type) {
    case "MANIPULATION_FOR_MASTER_FORM_INIT":
      return { ...state, manipulationServiceTriggerStatus: 'INIT', manipulationServiceData: null, manipulationServiceFailure: null };
    case "MANIPULATION_FOR_MASTER_FORM_REQUEST":
      return { ...state, manipulationServiceTriggerStatus: 'REQUEST', manipulationServiceData: null, manipulationServiceFailure: null };
    case "MANIPULATION_FOR_MASTER_FORM_SUCCESS":
      return { ...state, manipulationServiceTriggerStatus: 'SUCCESS', manipulationServiceData: action.response };
    case "MANIPULATION_FOR_MASTER_FORM_FAILURE":
      return { ...state, manipulationServiceTriggerStatus: 'FAILURE', manipulationServiceData: null, manipulationServiceFailure: action.error };

    case "MANIPULATION_BLOCK_CONVERSION_REQUEST":
      return { ...state, conversionStart: true };
    case "MANIPULATION_BLOCK_CONVERSION_SUCCESS":
      return { ...state, convertedBlock: action.response, conversionStart: false, converionSuccess: true }
    case "MANIPULATION_BLOCK_CONVERSION_FAILURE":
      return { ...state, conversionStart: false, converionSuccess: false };

    case "MANIPULATION_VALIDATION_REQUEST":
      return { ...state, pathValidatedStatus: 'LOAD' };
    case "MANIPULATION_VALIDATION_SUCCESS":
      return { ...state, pathValidatedStatus: 'SUCCESS' }
    case "MANIPULATION_VALIDATION_FAILURE":
      return { ...state, pathValidatedStatus: 'FAIL' };
    case "UPDATE_INPUT_BOX_DATA":
      return { ...state, currentValidatedText: action.value };

    case "MANIPULATION_METHODS_REQUEST":
      return state;
    case "MANIPULATION_METHODS_SUCCESS":
      let newMethods = action.response.genericMethods.methods;
      if (action.response.customMethods !== undefined && action.response.customMethods.methods !== undefined) {
        newMethods = newMethods.concat(action.response.customMethods.methods)
      }
      return { ...state, manipulationMethods: newMethods };
    case "MANIPULATION_METHODS_FAILURE":
      return state;

    case "MANIPULATION_CONDITION_CONVERSION_REQUEST":
      return { ...state, pathValidatedStatus: 'LOAD' };
    case "MANIPULATION_CONDITION_CONVERSION_SUCCESS":
      return { ...state, pathValidatedStatus: 'SUCCESS' }
    case "MANIPULATION_CONDITION_CONVERSION_FAILURE":
      return { ...state, pathValidatedStatus: 'FAIL' };

    case "MANIPULATION_EXPRESSION_CONVERSION_REQUEST":
      return { ...state, pathValidatedStatus: 'LOAD' };
    case "MANIPULATION_EXPRESSION_CONVERSION_SUCCESS":
      return { ...state, pathValidatedStatus: 'SUCCESS', convertedBlock: action.response }
    case "MANIPULATION_EXPRESSION_CONVERSION_FAILURE":
      return { ...state, pathValidatedStatus: 'FAIL' };

    case "UPDATE_AUTO_MANIPULATION_RESULT":
      let newManipulations = JSON.parse(JSON.stringify(action.data));
      return { ...state, autoManipulationStatus: 'INIT', onlineAutoManipulations: newManipulations };

    case "CLEAR_AUTO_MANIPULATION_RESULT":
      return { ...state, onlineAutoManipulations: null };
    case "AUTO_MANIPULATION_REQUEST":
      return { ...state, autoManipulationStatus: 'REQUEST', serviceExceptionMsg: null };
    case "AUTO_MANIPULATION_FAILURE":
      return { ...state, autoManipulationStatus: 'FAILURE', serviceExceptionMsg: action.msg };
    case "AUTO_MANIPULATION_INIT":
      return { ...state, autoManipulationStatus: 'INIT', serviceExceptionMsg: null };
    case "RESET_ELASTIC_DELETE_RESPONSE":
      return { ...state, elasticDeleteResponse: null }
    case "SET_ELASTIC_DELETE_RESPONSE":
      return { ...state, elasticDeleteResponse: action.data }
    case "FETCH_AGENT_METADATA_SUCCESS":
      let baseStates = [];
      if (action.response.metaDataList) {
        for (var containerMetadata of action.response.metaDataList) {
          if (containerMetadata.containerType === 'Base') {
            baseStates = containerMetadata.metaData.stateList;
          }
        }
      }
      return { ...state, baseStateLists: baseStates };
    default:
      return state
  }
}
