// User model definition
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Method to get user information
    getUserInfo() {
        return { id: this.id, name: this.name, email: this.email };
    }
}

module.exports = User;