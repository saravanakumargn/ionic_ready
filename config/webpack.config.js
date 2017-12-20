const chalk = require("chalk");
const fs = require('fs');
const path = require('path');
const useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

const env = process.env.IONIC_ENV;

console.log(env);

if (env === 'prod' || env === 'dev' || env === 'qa') {

  useDefaultConfig[env].resolve.alias = {
    "@env": path.resolve(environmentPath())
  };

} else {

  // Default to dev config
  useDefaultConfig[env] = useDefaultConfig.dev;
  useDefaultConfig[env].resolve.alias = {
    "@env": path.resolve(environmentPath())
  };

}

function environmentPath() {

  let filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';

  if (!fs.existsSync(filePath)) {
    console.log(chalk.red('\n' + filePath + ' does not exist!'));
  } else {
    return filePath;
  }
}

module.exports = function () {
  return useDefaultConfig;
};

/*
https://github.com/ionic-team/ionic-app-scripts/issues/1271
https://github.com/ionic-team/ionic-app-scripts/blob/master/config/webpack.config.js
module.exports = {
  dev: useDefaultConfig,
  prod: useDefaultConfig
}
*/

/*
"tabs-page": [ "pages/tabs/tabs" ]
"tabs-page": path.resolve('./src/pages/tabs/tabs.ts')
*/