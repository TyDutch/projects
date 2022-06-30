function loginOnClick()
{
    var user = document.getElementById("email").value;
    
    var password = document.getElementById("password").value;
    var process = true;
    if (user.length < 1)
    {
        alert("username is required");
        process = false;
    }
    
    if (password.length < 1)
    {
        alert("password is required");
        process = false;
    }
    
    if (process)
    {
        alert (user);
        alert (password);
    }    
    
    console.log("HERE");
    return false;
}
