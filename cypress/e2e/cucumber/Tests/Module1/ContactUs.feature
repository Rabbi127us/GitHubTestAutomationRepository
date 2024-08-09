Feature: Verify Zanoo contact us page

  Background: A user can navigate to the homepage
    Given the user is on the Zanoo homepage

  # Jira reference
  @smoke
  @regression
  Scenario: Verify that Zanoo contact page is visible
    When the user clicks Contact Us
    Then the user is taken to the Contact Us page
    When the user clicks Home
    Then the user is taken to the Home page