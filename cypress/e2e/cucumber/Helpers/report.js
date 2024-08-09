var filename;
var scenarioFolder;
var windowPointer

export class reportScripts{

  setup(folder, window){
    cy.log(folder);
    let folderSplit = folder.split('/');
    scenarioFolder = folderSplit[folderSplit.length - 2];
    windowPointer = window;
  };

  click(element){
    this.highlight(element);
    this.screenshot();
    element.click();
  };

  type(element, text){
    element.clear();
    if(text){
      element.type(text);
    };
    this.highlight(element);
  };

  highlight(element){
    element.should('exist').then($element =>{ 
      $element.css('border', '3px solid magenta');
    });
  };

  screenshot(element) {
    this.highlight(element);
    this.screenshot();
  };

  screenshotFullScreen(element) {
    this.highlight(element);
    this.screenshotFullScreen();
  };

  screenshot(){
    if (window.cucumberJson?.generate) {
      const testState = window.testState;
      cy.log(testState.currentScenario.name);
      const scenarioName = testState.currentScenario.name.endsWith('.') ?
          testState.currentScenario.name.substring(0, testState.currentScenario.name.length - 1) :
          testState.currentScenario.name;
      filename = scenarioName + '\\screenshot' + windowPointer.testState.currentStep;
      cy.screenshot(filename, {capture: 'viewport', overwrite: true});
    };
  };

  screenshotFullScreen(){
    if (window.cucumberJson?.generate) {
      const testState = window.testState;
      const scenarioName = testState.currentScenario.name.endsWith('.') ?
          testState.currentScenario.name.substring(0, testState.currentScenario.name.length - 1) :
          testState.currentScenario.name;
      filename = scenarioName + scenarioFolder + '\\screenshot' + windowPointer.testState.currentStep;
      cy.screenshot(filename, {capture: 'fullPage', overwrite: true});
    };
  };

  attachScreenshots(window){
    const screenshotsFolder = Cypress.config("screenshotsFolder");
    if (window.cucumberJson?.generate) {
      const testState = window.testState;
      const scenarioName = testState.currentScenario.name.endsWith('.') ?
          testState.currentScenario.name.substring(0, testState.currentScenario.name.length - 1) :
          testState.currentScenario.name;
      for(let i = 0; i <= testState.currentStep; i++) {
        const stepResult = testState.runTests[testState.currentScenario.name][i];
          const screenshotFileName = `screenshot${i}.png`;
          cy.task('readFileMaybe',
            `${screenshotsFolder}/${scenarioFolder}/${Cypress.spec.name}/${scenarioName}/${screenshotFileName}`
          ).then((imgData) => {
            if(imgData) {
              stepResult.attachment = {
                data: imgData,
                media: { type: "image/png" },
                index: i,
                testCase: testState.formatTestCase(testState.currentScenario),
              };
            };
          });
      };
      const stepResult = testState.runTests[testState.currentScenario.name][testState.currentStep];
      if(stepResult?.status === "failed"){
        const screenshotFileName = `${testState.feature.name} -- ${scenarioName} (failed).png`;
        cy.task('readFileMaybe',
            `${screenshotsFolder}/${scenarioFolder}/${Cypress.spec.name}/${screenshotFileName}`
          ).then((imgData) => {
            if(imgData) {
              stepResult.attachment = {
                data: imgData,
                media: { type: "image/png" },
                index: testState.currentStep,
                testCase: testState.formatTestCase(testState.currentScenario),
              };
            };
          });
      };
    };
  };
};
const report = new reportScripts();
export default report;