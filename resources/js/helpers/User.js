import AppStorage from "./AppStorage";
import Token from "./Token";

class User {

    responseAfterLogin(response) {
        console.log(response)
        const access_token = response.access_token;
        const name = response.name
        const id = response.id
        const email = response.email
        if (Token.isValid(access_token)) {
            AppStorage.store(access_token, { name, email, id })
        }
    }

    hasToken() {
        const storeToken = AppStorage.getToken()
        if (storeToken) {
            return Token.isValid(storeToken) ? true : false
        }
        return false
    }

    loggedIn() {
        return this.hasToken()
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken())
            return payload.sub
        }
        return false
    }

    name() {
        return AppStorage.getUser().name;
    }

    email() {
        return AppStorage.getUser().email;
    }

}

export default new User();
