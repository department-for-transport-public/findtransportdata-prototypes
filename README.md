# Department for Transport - Find Transport Data service
## Prototypes

### Get started:
1. Clone this repo locally: `git@github.com:department-for-transport-public/findtransportdata-prototypes.git`
2. Set up your SSH keys: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
3. Check the version of Node installed: `node --version`, this needs at least Node 18.x.x, if less, update to the latest
4. Install the Node dependencies: `npm install`
5. Run: `npm run dev`
6. Open up `localhost:3000` in your browser


## Step to make pages
1. Add .html file to the app/views folder.
2. Add `{% extends "layouts/main.html" %}` on top of the .html file.
3. To add a component, import it from govuk/components, e.g. `{% from "govuk/components/button/macro.njk" import govukButton %}` on top of the .html files.
4. For more components, visit the following link: `https://design-system.service.gov.uk/get-started/prototyping/`
5. For more information, look for the pages that have already been created.
6. To access the newly created page, define a route in the app/routes.js file; an example is already added there.