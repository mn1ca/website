document.writeln('<div id="statuscafe"><div id="statuscafe-username"></div><div id="statuscafe-content"></div></div>');
fetch("https://status.cafe/users/mn1ca/status.json")
  .then( r => r.json() )
  .then( r => {
    if (!r.content.length) {
      document.getElementById("statuscafe-content").innerHTML = "No status yet."
      return
    }
    document.getElementById("statuscafe-username").innerHTML = '<h style="font-size:100%">feeling &#160;</h>' + r.face + ' ' + '&#160;' + r.timeAgo
    document.getElementById("statuscafe-content").innerHTML = r.content
  })