// Generated from: tests\features\changeName.feature
import { test } from "../../../tests/fixtures/fixtures.js";

test.describe('Change First Name and Last name', () => {

  test('Verify user can update account information successfully', async ({ Given, When, Then, And, ecomChangeNamePage, ecomLoginPage }) => { 
    await Given('I navigate to "https://ecommerce-playground.lambdatest.io/"', null, { ecomLoginPage }); 
    await And('I click on "My account"', null, { ecomLoginPage }); 
    await And('I enter E-Mail Address "pranav@testroverautomation.com"', null, { ecomLoginPage }); 
    await And('I enter password "Test1234"', null, { ecomLoginPage }); 
    await When('I click on login button', null, { ecomLoginPage }); 
    await Then('I should verify url contains "route=account/account"', null, { ecomLoginPage }); 
    await When('I click on "Edit your account information" on change account information page', null, { ecomChangeNamePage, ecomLoginPage }); 
    await And('I change first name to "Srk"', null, { ecomChangeNamePage }); 
    await And('I change last name to "Doego"', null, { ecomChangeNamePage }); 
    await And('I click on Continue button', null, { ecomChangeNamePage }); 
    await Then('I should see the success message "Success: Your account has been successfully updated."', null, { ecomChangeNamePage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\changeName.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given I navigate to \"https://ecommerce-playground.lambdatest.io/\"","stepMatchArguments":[{"group":{"start":14,"value":"\"https://ecommerce-playground.lambdatest.io/\"","children":[{"start":15,"value":"https://ecommerce-playground.lambdatest.io/","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"And I click on \"My account\"","stepMatchArguments":[{"group":{"start":11,"value":"\"My account\"","children":[{"start":12,"value":"My account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"And I enter E-Mail Address \"pranav@testroverautomation.com\"","stepMatchArguments":[{"group":{"start":23,"value":"\"pranav@testroverautomation.com\"","children":[{"start":24,"value":"pranav@testroverautomation.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"And I enter password \"Test1234\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Test1234\"","children":[{"start":18,"value":"Test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When I click on login button","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then I should verify url contains \"route=account/account\"","stepMatchArguments":[{"group":{"start":29,"value":"\"route=account/account\"","children":[{"start":30,"value":"route=account/account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When I click on \"Edit your account information\" on change account information page","stepMatchArguments":[{"group":{"start":11,"value":"\"Edit your account information\"","children":[{"start":12,"value":"Edit your account information","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I change first name to \"Srk\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Srk\"","children":[{"start":24,"value":"Srk","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And I change last name to \"Doego\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Doego\"","children":[{"start":23,"value":"Doego","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And I click on Continue button","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then I should see the success message \"Success: Your account has been successfully updated.\"","stepMatchArguments":[{"group":{"start":33,"value":"\"Success: Your account has been successfully updated.\"","children":[{"start":34,"value":"Success: Your account has been successfully updated.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end