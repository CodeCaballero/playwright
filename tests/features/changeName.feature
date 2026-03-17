Feature: Change First Name and Last name

    User is able to change first name and last name successfully and see the success message

  Scenario: Verify user can update account information successfully
    Given I navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on "My account"
    And I enter E-Mail Address "pranav@testroverautomation.com"
    And I enter password "Test1234"
    When I click on login button
    Then I should verify url contains "route=account/account"
    When I click on "Edit your account information" on change account information page
    And I change first name to "Srk"
    And I change last name to "Doego"
    And I click on Continue button
    Then I should see the success message "Success: Your account has been successfully updated."