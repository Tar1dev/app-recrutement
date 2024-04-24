fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    
})
.catch(err => console.log(err));