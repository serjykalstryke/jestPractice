import * as babel from "@babel/core";

import * as babelRegister from "@babel/register";

import * as readline from "readline";
import {
  capitalize,
  getAlpha2Code,
  countryListLookup,
  getResponse,
} from "./language_spoken.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Type a language to to see in how many countries it is spoken: ",
  async function (language) {
    try {
      const alpha2Code = getAlpha2Code(capitalize(language));
      const languageList = await countryListLookup(alpha2Code);
      const response = getResponse(language, languageList);
      console.log(response);
    } catch (error) {
      console.log(
        `We could not find ${language}, please check your spelling and try again!`
      );
    }
    process.exit(0);
  }
);
