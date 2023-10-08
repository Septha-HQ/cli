import Configstore from "configstore";
import require from "../utils/require.js";
import hash from "../utils/hash.js";
import logger from "../utils/logger.js";

const pkg = require("../package.json");

class KeyManager {
    private config: Configstore;

    constructor() {
        this.config = new Configstore(pkg.name);
    }

    setKey(key: string) {
        this.config.set("apiKey", key);
        return hash(key)
    }

    deleteKey() {
        const key = this.config.get("apiKey");
        if (!key) logger.error("No api key found");
        this.config.delete("apiKey");
    }
}

export default KeyManager;
