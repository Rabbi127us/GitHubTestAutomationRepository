Feature: Module 1 Flows 2

  Background: A user can navigate to the homepage
    Given the user is on the Zanoo homepage

  # Jira reference
  @smoke
  @regression
  Scenario: Scenario 1
    When the user clicks Contact Us
    Then the user is taken to the Contact Us page
    When the user clicks Home
    Then the user is taken to the Home page