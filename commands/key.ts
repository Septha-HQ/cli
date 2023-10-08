import { password, confirm } from "@inquirer/prompts";
import isValid from "../utils/validation.js";
import logger from "../utils/logger.js";
import KeyManager from "../lib/KeyManager.js";

const key = {
    async set() {
        try {
            const keymanager = new KeyManager();
            const answer = await password({
                message: "Get API key from -- https://pro.coinmarketcap.com \nEnter the api key:",
                mask: true,
                validate: isValid
            })
            const key = keymanager.setKey(answer);
            logger.success("Api key set successfully");
            logger.output(key);
        } catch (error) {
            logger.error("Exiting...");
            process.exit(1);
        }
    },
    async remove() {
        try {
            const keymanager = new KeyManager();
            const answer = await confirm({
                message: "Are you sure you want to delete the api key?",
                default: false
            })
            if (!answer) return logger.output("Api key deletion cancelled");
            keymanager.deleteKey();
            logger.success("Api key deleted successfully");
        } catch (error) {
            logger.error("Exiting...");
            process.exit(1);
        }
    }
}

export default key;
