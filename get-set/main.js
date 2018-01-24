function User() {
    var firstName, surname;

    this.setFirstName = function(newFirstName) {
        firstName = newFirstName;
    }
    this.getFirstName = function() {
        return firstName;
    }
    this.setSurname = function(newSurname) {
        surname = newSurname;
    }
    this.getSurname = function() {
        return surname;
    }

    this.getFullName = function() {
        return firstName + ' ' + surname;
    }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
alert(user.getFullName()); // Петя Иванов