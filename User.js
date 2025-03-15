class User{
    constructor(id, firstName, lastName, maidenName, email, password, gender)
 {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.maidenName = maidenName;
    this.email = email;
    this.password = password;
    this.gender = gender;

}
displayInfo(){
    console.log(`User: ${this.id} ${this.firstName} ${this.lastName} ${this.maidenName} ${this.email} ${this.password} ${
        this.gender}`);
}

}