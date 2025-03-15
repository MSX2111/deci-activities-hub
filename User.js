class User {
    constructor({
      id,
      firstName,
      lastName,
      maidenName,
      age,
      gender,
      email,
      phone,
      username,
      password,
      birthDate,
      image,
      bloodGroup,
      height,
      weight,
      eyeColor,
      hair,
      ip,
      address,
      macAddress,
      university,
      bank,
      company
    }) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.maidenName = maidenName;
      this.age = age;
      this.gender = gender;
      this.email = email;
      this.phone = phone;
      this.username = username;
      this.password = password;
      this.birthDate = birthDate;
      this.image = image;
      this.bloodGroup = bloodGroup;
      this.height = height;
      this.weight = weight;
      this.eyeColor = eyeColor;
      this.hair = hair;
      this.ip = ip;
      this.address = address;
      this.macAddress = macAddress;
      this.university = university;
      this.bank = bank;
      this.company = company;
    }
  
    displayInfo() {
      return `${this.firstName} ${this.lastName} is ${this.age} years old and works as a ${this.company.title} at ${this.company.name}.`;
    }
  }