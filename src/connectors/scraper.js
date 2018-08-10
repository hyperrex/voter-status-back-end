const scrapeVoterReg = async (birthdate, identifier) => {
  try {
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();

    await page.goto(`https://musicbrainz.org/artist/${musicBrainzID}`);
    await page.waitFor(1000);

    const result = await page.evaluate(() => {
      let resultsArray = [];
      const titlesArray = ['address',
                           'birthdate',
                           'registration_date',
                           'vote_by_mail',
                           'party',
                           'language',
                           'todays_date']

      for (var i = 0; i < titlesArray.length; i++) {
        let name = titlesArray[i]
        let selectedUrl = document.querySelector(`.${name}-favicon a`)
        let url = selectedUrl ? selectedUrl.href : null
        let selectedTitle = document.querySelector(`.${name}-favicon`)
        let title = selectedTitle ? selectedTitle.textContent : null

        let linkObject = {
          name,
          url,
          title
        }
        resultsArray.push(linkObject)
      }
      return resultsArray
    })

    browser.close();
    return result

  } catch(err){
      return err
  }
};
