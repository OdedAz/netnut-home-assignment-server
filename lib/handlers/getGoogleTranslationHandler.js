async function translate(text, destination, key) {
  const { Translate } = require("@google-cloud/translate").v2;
  const translate = new Translate({
    key,
  });
  const translation = translate.translate(text, destination);
  return translation;
}

module.exports = (config, { translationsDB, validate, DBTableSchemes }) => {
  return async function (req, res) {
    // here i need to turn to google and get the translations and activate the handler witch return the data and save the new translation to the DB

    const response = await translate(
      req.body.phrase,
      req.body.toLanguage,
      config.googleTranslate.key
    );
    const body = validate(DBTableSchemes.translationScheme, {
      text_to_translate: req.body.phrase,
      language_to_translate: req.body.toLanguage,
      translation: response[0]
    })
    if (response[0]) {
      // save the new translation to our DB 
      translationsDB.createTranslation(body);
    }
    res.status(200).json(await translationsDB.returnTranslation(response));
  };
};
