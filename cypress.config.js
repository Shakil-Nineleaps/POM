const { defineConfig } = require("cypress");
 async function setupNodeEvents(on, config){
  return config
 }
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern:'cypress/test/demo1.js',
    env:{
      OrangeHRM_HomePage :"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    }
  },
});
