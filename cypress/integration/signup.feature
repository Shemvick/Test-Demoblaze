Feature: Demoblaze signup functionality test

    Application regression​

    @login2
    Scenario: sign up with valid details
        Given I navigate to demoblaze ecommerce page
        When I click on the signup button
        When I enter a valid username and password
        When I click the signup button
        Then I should see the message alert
    @login2
    Scenario: sign up without inputing username and password
        Given I navigate to demoblaze ecommerce page
        When I click on the signup button
        When I do not enter a valid username and password
        When I click the signup button
        Then I should see the message alert displayed to fill username and password
    @login2
    Scenario: sign up inputing invalid username and invalid password
        Given I navigate to demoblaze ecommerce page
        When I click on the signup button
        When I enter an invalid username and invalid password
        When I click the signup button
        Then I should see an message alert displayed to input correct credentials