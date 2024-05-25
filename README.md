# tf-parser
A parser for converting Team Fortress 2 language files to JSON format.

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

```js
import { readFile } from "fs/promises";
import { TFParser } from "@mann-conomy/tf-parser";

(async () => {
    try {
        // Read the contents of tf_english.txt
        const file = await readFile("tf_english.txt");

        // Parse english language translations
        const { lang } = TFParser.parse(file);

        console.log(lang.Language); // English
        console.log(lang.Tokens.rarity4); // Unusual
    } catch (error) {
        console.error("Error parsing tf_english.txt", error.message);
    }
})();
```

Some more examples are available in the [test](https://github.com/Mann-Conomy/tf-parser/tree/main/test) directory.

## Documentation

See the [Wiki pages](https://github.com/Mann-Conomy/tf-parser/wiki) for further documentation.

## License

[MIT](LICENSE)

Copyright 2024, The Mann-Conomy Project
