# tf-parser

A Node.js parser for converting Team Fortress 2 game files to JSON objects.

[![npm version](https://img.shields.io/npm/v/@mann-conomy/tf-parser?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/tf-parser)
[![npm downloads](https://img.shields.io/npm/d18m/@mann-conomy/tf-parser?style=flat-square&logo=npm)](https://npmjs.com/package/@mann-conomy/tf-parser)
[![Node.js version](https://img.shields.io/node/v/@mann-conomy/tf-parser?style=flat-square&logo=nodedotjs)](https://nodejs.org/en/about/releases/)
[![GitHub actions](https://img.shields.io/github/actions/workflow/status/Mann-Conomy/tf-parser/test.yml?branch=main&style=flat-square&logo=github&label=test)](https://github.com/Mann-Conomy/tf-parser/blob/main/.github/workflows/test.yml)
[![GitHub license](https://img.shields.io/github/license/Mann-Conomy/tf-parser?style=flat-square&logo=github)](https://github.com/Mann-Conomy/tf-parser/blob/main/LICENSE)

## Installation

Using [npm](https://www.npmjs.com/package/@mann-conomy/tf-parser):

```bash
$ npm install @mann-conomy/tf-parser
```

Using [yarn](https://yarnpkg.com/package/@mann-conomy/tf-parser):

```bash
$ yarn add @mann-conomy/tf-parser
```

## Testing

Using [npm](https://docs.npmjs.com/cli/v8/commands/npm-run-script):
```bash
$ npm test
```

Using [yarn](https://classic.yarnpkg.com/lang/en/docs/cli/run/):
```bash
$ yarn test
```

## Examples

Parsing UTF-16 encoded localization files from the Team Fortress 2 game client into JSON objects.

```js
import { readFile } from "fs/promises";
import { LocalizationParser } from "@mann-conomy/tf-parser";

(async () => {
    try {
        // Read the contents of the tf_english.txt file
        const file = await readFile("tf_english.txt", { encoding: "utf16le" });

        // Parse english language translations
        const { lang } = LocalizationParser.parse(file);

        console.log(lang.Language); // English
        console.log(lang.Tokens.rarity4); // Unusual
    } catch (error) {
        console.error("Error parsing tf_english.txt", error.message);
    }
})();
```

Parsing the client schema from the Steam Web API.

```js
import { SchemaParser } from "@mann-conomy/tf-parser";

(async() => {
    try {
        // Fetch the client schema from the Steam Web API
        const response = await fetch("https://media.steampowered.com/apps/440/scripts/items/items_game.bdc614ad776fb2d43c1f247fce870485d2299152.txt");

        // Resolve the response into a UTF-8 string
        const items = await response.text();

        // Parse the in-game items
        const { items_game } = SchemaParser.parse(items);

        console.log(items_game.rarities.unusual?.value); // 99
        console.log(items_game.qualities.vintage?.value); // 3
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error parsing items_game.txt", error.message);
        }
    }
})();
```

Some more examples are available in the [examples](https://github.com/Mann-Conomy/tf-parser/tree/main/examples) and [test](https://github.com/Mann-Conomy/tf-parser/tree/main/test) directories.

## Documentation

See the [Wiki pages](https://github.com/Mann-Conomy/tf-parser/wiki) for further documentation.

## License

[MIT](LICENSE)

Copyright 2025, The Mann-Conomy Project
