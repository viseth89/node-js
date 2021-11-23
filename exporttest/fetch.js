const fetch = require('node-fetch');

(async () => {


    var headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    
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
    
    var options = {
        // url: 'https://ap.datalogics.com/actpro/api/akey.php',
        json: true,
        headers: headers,
        body: data,
        auth: auth
    };


  try {
    const res = await fetch('https://ap.datalogics.com/actpro/api/akey.php', {options:options});
    const headerDate = res.headers && res.headers.get('date') ? res.headers.get('date') : 'no response date';
    console.log('Status Code:', res.status);
    console.log('Date in Response header:', headerDate);

    const users = await res.json();
    for(user of users) {
      console.log(`Got user with id: ${user.id}, name: ${user.name}`);
    }
  } catch (err) {
    console.log(err.message); //can be console.error
  }
})();