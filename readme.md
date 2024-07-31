# Contact Component

This project contains a simple React component for a contact form that requires a password for authorization. The purpose of this component is to display contact information only to authorized users.

## Component Overview

The Contact component is a class-based React component. It manages state to handle the authorization logic and conditionally renders either a login form or contact information based on the user’s authorization status.

### Key Features

- State Management: The component uses state to store the password and the authorization status.
- Form Handling: It includes a form that accepts a password input and validates it against a predefined password.
- Conditional Rendering: Depending on the authorization status, the component renders either a login form or the contact information.
