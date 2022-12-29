const config = require("./lib/services/config");
const app = require("./lib/app");
const validate = require("./lib/services/Validator");
const TranslationsDB = require("./lib/appDatabases/translationsDB");
const DBTableSchemes = require("./lib/services/DatabaseTablesSchemes");

async function main() {
    try {
        const translationsDB = new TranslationsDB(config.dbCredentials.db);

        await translationsDB.testConnection();

        const services = {
            translationsDB,
            validate,
            DBTableSchemes,
        }
        await app(config, services);
    }catch(error){
        console.log(error);
    }
}
main();