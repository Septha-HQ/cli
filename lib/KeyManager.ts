import Configstore  from "configstore";
import require from "../utils/require.js";
import hash from "../utils/hash.js";

const pkg = require("../package.json");

class KeyManager{
    private config:Configstore;
    
    constructor(){
        this.config = new Configstore(pkg.name);
    }

    setKey(key:string){
        this.config.set("apiKey", key);
        return hash(key)
    }
}

export default KeyManager;
