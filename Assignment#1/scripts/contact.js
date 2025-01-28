serialize(){
    if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
        return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
    } else {
        console.error("One or more of the properties of the contact object are missing or invalid");
        return null;
    }
}

deserialize(data){
    let propertyArray = data.split(",").map(prop => prop.trim());
    if (propertyArray.length === 3) {
        this.FullName = propertyArray[0];
        this.ContactNumber = propertyArray[1];
        this.EmailAddress = propertyArray[2];
    } else {
        console.error("Data is not properly formatted.");
    }
}