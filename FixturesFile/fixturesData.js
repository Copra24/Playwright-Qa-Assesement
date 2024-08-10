function UserData() {
    return {
      first_name: ['John', 'John%-+', 'John123-', 'Jo hn',''],
      last_name: ['Smith', 'SMITH', '12345', 'Smi th', 'Smith@','Smith%-','',''],
      email_: ['john.smith@example.com', 'john.smithexample.com', 'john.smith@example', 'JOHN.SMITH@EXAMPLE.COM', ''],
      password_: ['P@ssw0rd', 'P@ss w0rd', '1234567'],
      confirm_password: ['P@ssw0rd', 'P@ss w0rd', '1234567', 'Password_%' ],
      gender_: 'male',
      date_Of_birth: '1990-01-01',
      phone_number: ['1234567890', 'abc987654yt'],
      address_: ['123 Main St, Apt 1', '1234_+main St, %Apt 1'],
      linkedin_url: 'https://www.linkedin.com/in/johnsmith',
      github_url: ' https://github.com/johnsmith',
      

    };
  }
  
  module.exports = { UserData };
  