import { Component } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-user-help',
  standalone: true,
  imports: [CdkAccordionModule, NgFor],
  templateUrl: './user-help.component.html',
  styleUrl: './user-help.component.css'
})
export class UserHelpComponent {
  items = [
    
{
  key: 'Registration Process', value: [
  `Click on the "Register" or "Sign Up" button prominently displayed on the homepage to initiate the registration process.`,
  'Fill out the registration form with accurate information. Typically, this includes entering a username, email address, password, and any other required details.',
  'Ensure the password meets the specified criteria (e.g., minimum length, combination of letters, numbers, and special characters).',
  'After completing the form, review the entered information for accuracy and click on the "Submit" or "Create Account" button.',
  'Check your email inbox for a verification message. Click on the verification link provided in the email to confirm your registration and activate your account.',
  ]
  },
  {
  key: 'Password Reset', value: [
  `If you forget your password, navigate to the login page and click on the "Forgot Password" or "Reset Password" link.`,
  'Enter the email address associated with your account in the provided field.',
  'Check your email inbox for instructions on resetting your password. This typically involves clicking on a password reset link.',
  'Follow the prompts to create a new password. Ensure the new password is secure and meets any specified requirements.',
  ]
  },
  {
  key: 'Dashboard Navigation', value: [
  `Familiarize yourself with the navigation menu, usually located on the left-hand side or at the top of the dashboard interface.`,
  'The navigation menu may include sections such as Home, Dashboard, Reports, Settings, etc.',
  'Click on each menu item to navigate to different sections of the dashboard and access relevant features or information.',
  ]
  },
  {
  key: 'Profile Management', value: [
  `Access your profile settings by clicking on your username or profile picture in the dashboard interface.`,
  'Within the profile settings, you can update personal information such as name, email address, and profile picture.',
  'Additionally, you can change your password, update notification preferences, and manage other account settings as needed.',
  ]
  },
  {
  key: 'Data Visualization', value: [
  `Explore the various charts, graphs, and visualizations available on the dashboard to analyze data effectively.`,
  'Hover over data points within the visualizations to view detailed information or insights.',
  'Utilize interactive features such as zooming, filtering, and sorting to customize your data viewing experience and gain deeper insights.',
  ]
  },
  {
  key: 'Support and Feedback', value: [
  `If you encounter any difficulties or have suggestions for improving the dashboard experience, utilize the provided support and feedback channels.`,
  'Click on the "Support" or "Feedback" link to access the respective form or contact information.',
  `Provide detailed information about the issue you're experiencing or the feedback you wish to share to facilitate prompt assistance or consideration.`,
  ]
  },
  {
  key: 'Privacy and Security', value: [
  `Prioritize the security of your account by following best practices such as choosing a strong, unique password and enabling two-factor authentication if available.`,
  'Review the privacy policy and terms of service to understand how your personal information is collected, used, and protected by the dashboard website.',
  'Be cautious about sharing sensitive information and avoid clicking on suspicious links or providing login credentials to unauthorized sources.',
  ]
  },
  {
  key: 'Contact Information', value: [
  `Locate the contact information for customer support or assistance within the dashboard interface.`,
  'This information may include email addresses, phone numbers, or links to support documentation and resources.',
  'Reach out to the support team for help with technical issues, account-related inquiries, or general assistance as needed.',
  ]
  }
  ];
  expandedIndex = 0;
}
