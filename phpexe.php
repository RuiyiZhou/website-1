<!DOCTYPE html>

    <html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
        
        
<body>

<h1>我的第一张 PHP 页面</h1>

<?php
// 连主库
$con=mysql_connect("w.rdc.sae.sina.com.cn:3307","44oyw1ylml","zmi3lmhhk32124ihm30zj44i0340wly44j4i3klw");

// 连从库
// $link=mysql_connect(SAE_MYSQL_HOST_S.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);
if ($con)
  {
  echo("Success.<br>");
  }
mysql_select_db("app_ruiyizhou", $con);

// Create table in my_db database



// Read table in my_db database

$result = mysql_query("SELECT * FROM number");

while($row = mysql_fetch_array($result))
  {
  echo $row['name'] . " " . $row['age'] . " " . $row['gender'];
  echo "<br />";
  }


mysql_close($con);
?>

</body>
</html>