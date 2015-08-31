```html
<div id="user-panel">
Hi there, <span class="username"> John Smith </span> | <a href="#profile"> Profile </a> | <a href="#logout"> Logout </a>
</div>
```

(You can also see it on the left along with the preview)

We have used a div to wrap the whole user panel and gave it an id of "user-panel" so we can target it later.
Also we have used a span around "John Smith" with a class "username" so we can apply a special styling for the user name.

{Check It!|assessment}(test-1476603851)

|||guidance

Solution :

```html
<!DOCTYPE html>
<html>
<head>
  <title>Divs and spans</title>
  <style>
    #user-panel {
      font-family:Arial,sans-serif;
      font-size:1.2em;
    }

    #user-panel a { text-decoration:none; }

    .username {
      font-weight:bold;
      color:#13ad58;
    }
    
    .my-div {
      background-color:#3fb7ea;
      border:1px dashed #12749e;
      border-radius:10px;
      margin-top:10px;
    }
  </style>
</head>
<body>
  <h1> Divs and spans </h1>
  
  <h2> A concrete example </h2>
  
  <div id="user-panel">
    Hi there, <span class="username"> John Smith </span> | <a href="#profile">Profile</a> | <a href="#logout">Logout</a>
  </div>
  
  <div class="my-div">
    This if my first div!
  </div>
</body>
</html>
```

|||