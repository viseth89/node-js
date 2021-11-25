function userSignUp() {
    console.log("userSignUp Function Called")
    let userEmail = document.getElementById("emailSignup").value;
    let userPass = document.getElementById("pwdSignup").value;

    let newUserData = {
        user: {
            email: userEmail,
            password: userPass
        }
    }
    console.log(`newUserDate --> ${newUserData.user.email} ${newUserData.user.password}`);

    // Part 2

    fetch(`http://localhost:3000/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUserData)
    })
        .then(response=>response.json())
        .then(data => {
            console.log(data);
            let token = data.sessionToken;
            localStorage.setItem('sessionToken', token);
            tokenChecker()
        })
        .catch(err => {
            console.error(err)
        })
};

function userLogin() {
    console.log("userLogin Function Called")
    let userEmail = document.getElementById("emailSignup").value;
    let userPass = document.getElementById("pwdSignup").value;

    let UserData = {
        user: {
            email: userEmail,
            password: userPass
        }
    }
    console.log(`UserData --> ${UserData.user.email} ${UserData.user.password}`);
    // Part 2
    fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(UserData)
    })
        .then(response=>response.json())
        .then(data => {
            console.log(data);
            let token = data.sessionToken;
            localStorage.setItem('sessionToken', token);
            tokenChecker()
        })
        .catch(err => {
            console.error(err)
        })

}

function userLogout() {
    localStorage.setItem('sessionToken', undefined);
    tokenChecker()
    console.log("userLogout Function Called")
}

function tokenChecker() {
    console.log("tokenChecker Function Called")
}
tokenChecker()