window.addEventListener('load', function() {

function getUsers() {
    fetch("http://127.0.0.1:8080/mockdata/user.json", {
        mode: 'no-cors' // 'cors' by default
      }) .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        var data = json;
        let userlistEl = document.getElementById('userList');
        let userEl = ''
        for(let i = 0; i < data.length; i++) {
            userEl += `<span>Name: ${data[i].name}</span><br/><span> Email: ${data[i].email}</span> <br/>`;
        }
        userlistEl.innerHTML = userEl;
    })
    .catch(function () {
        this.dataError = true;
    })
 }
      
    

getUsers();
})