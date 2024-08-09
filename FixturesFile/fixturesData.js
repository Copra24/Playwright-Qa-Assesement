function UserData() {
    return {
      //Valid data
      first_name: ['John','John%-+', 'John123-'],
      last_name: 'Smith',
      email_: 'john.smith@example.com',
      password_: 'P@ssw0rd',
      confirm_password: 'P@ssw0rd',
      gender_: 'male',
      date_Of_birth: '1990-01-01',
      phone_number: '1234567890',
      address_: '123 Main St, Apt 1',
      linkedin_url: 'https://www.linkedin.com/in/johnsmith',
      github_url: ' https://github.com/johnsmith',
      

    };
  }
  
  module.exports = { UserData };
  