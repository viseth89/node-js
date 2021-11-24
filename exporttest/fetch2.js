const fetch = require('node-fetch');

function userSignUp() {
    console.log("userSignUp Function Called")
    // let userEmail = document.getElementById("emailSignup").value;
    // let userPass = document.getElementById("pwdSignup").value;

    // let newUserData = {
    //     user: {
    //         email: 'hi',
    //         password: 'there'
    //     }
    // }
    // console.log(`newUserDate --> ${newUserData.user.email} ${newUserData.user.password}`);

    // Part 2
    var data = {
        "header":
        {
            "user": "vsen",
            "password": "78714d0af4aeb50acc4eef9c4f81cabd",
            "table":"keyd", 
            "akey":"e44a2bbb-7a3a-4ab5-a747-a51214233d97"
        }
    }

    const auth = {
        'user': 'datalogicst9Xu',
        'pass': 'DwC8ncneS6EkJ6YGsKf3p4Rwtf76wLtu'
    }

    fetch('https://ap.datalogics.com/actpro/api/akey.php', {
        method: "POST",

        auth: auth,
        // data: data
        // body: JSON.stringify(newUserData)
    })
        .then(response=>response.json())
        .then(data => {
            console.log(data);
            // let token = data.sessionToken;
            // localStorage.setItem('sessionToken', token);
            // tokenChecker()
        })
        .catch(err => {
            console.error(err)
        })
};

userSignUp()