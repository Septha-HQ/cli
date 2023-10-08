import { password } from "@inquirer/prompts";
import isValid from "../utils/validation.js";
import logger from "../utils/logger.js";
import KeyManager from "../lib/KeyManager.js";

const key = {
    async set() {
        try {
            const keymanager = new KeyManager();
            const answer = await password({
                message: "Enter the api key: ", validate: isValid
            })
            const key = keymanager.setKey(answer);
            logger.success("Api key set successfully");
            logger.output(key);
        } catch (error) {
            logger.error("Exiting...");
        }
    },
}

export default key;
