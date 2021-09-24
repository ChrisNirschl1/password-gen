# password-gen


![image](https://user-images.githubusercontent.com/89895612/134629802-fd9b76d7-f236-4fbf-866a-3fcd79322385.png)
![image](https://user-images.githubusercontent.com/89895612/134630109-aa45b4f2-d06e-4bfa-9823-e85f074cc13e.png)
![image](https://user-images.githubusercontent.com/89895612/134630180-c0ebaec1-c13b-4a61-8011-8abb227297d1.png)
## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Build a password generator that will generate a password with between 8-128 characters, and at least 1 of lower case, upper case, special and number characters, with the user picing the length and what characters they want to use.