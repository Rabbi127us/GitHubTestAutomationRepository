Feature: Zanoo About Us page is visible

  Background: A user can navigate to the homepage
    Given the user is on the Zanoo homepage

  # Jira reference
  @smoke
  @regression
  Scenario: A user can navigate to the About Us page
    When the user clicks About Us
    Then the user is taken to the About Us page
    When the user clicks Our Services button
    Then the user is taken to the Our Services page