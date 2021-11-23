function userSignUp() {
    console.log("userSignUp Function Called")
    // let userEmail = document.getElementById("emailSignup").value;
    // let userPass = document.getElementById("pwdSignup").value;

    let newUserData = {
        user: {
            email: 'hi',
            password: 'there'
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

userSignUp()