import ItemsParser from "../src/classes/items.parser";

(async() => {
    try {
        // Fetch the items_game file from Steam
        const response = await fetch("https://media.steampowered.com/apps/440/scripts/items/items_game.bdc614ad776fb2d43c1f247fce870485d2299152.txt");

        // Resolve the response into a UTF-8 string
        const items = await response.text();

        // Parse the in-game items
        const { items_game } = ItemsParser.parse(items);

        console.log(items_game.rarities.unusual?.value); // 99
        console.log(items_game.qualities.vintage?.value); // 3
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("Error parsing items_game.txt", error.message);
        }
    }
})();
