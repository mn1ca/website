// this code executes when the 'send' button is clicked
document.getElementById('send').onclick = function() {
    var request = new XMLHttpRequest();
    // change the webhook URL below (Discord channel settings > integration)
    request.open("POST", "https://discord.com/api/webhooks/1172444854601666580/QR40Tdc2yTiErEkYyihn5yTtXez9HdvHHNskLRG4h3hnMUIgoB3ME8EgX-qvlqJNAEJ6");
    request.setRequestHeader('Content-type', 'application/json');
    // the below variables combine a label (text) + the textarea value + a newline (\n)
    // add up to 2,000 characters (Discord's character limit)
    var name = "Name: " + document.getElementById("name").value + "\n";
    var question = "Question: " + document.getElementById("question").value;
  
    // you have to combine both into one single variable before you can pass it to discord
    var date = new Date();
    var f_date = date.toLocaleDateString("en-US");
    var username = f_date;
    var msg = name + question;
    // play with it a bit until you get a feel for how you want the incoming messages to look!
  
    var params = {
      // you can set the username to anything you want
        username: username,
        content: msg,
    }
    request.send(JSON.stringify(params));

    // below gives your user some helpful feedback letting them know their message has been sent
    alert('Test!');
    // below clears the form fields after submission
    document.getElementById("question").value = '';
}