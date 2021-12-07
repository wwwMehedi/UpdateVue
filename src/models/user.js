export default class User {
    constructor(first_name, last_name, birthday_day, birthday_month, birthday_year, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.birthday_day = birthday_day;
        this.birthday_month = birthday_month;
        this.birthday_year = birthday_year;
        this.email = email;
        this.password = password;
    }
}