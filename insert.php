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


$sql="INSERT INTO Persons (FirstName, LastName, Age)
VALUES
('$_POST[firstname]','$_POST[lastname]','$_POST[age]')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";

mysql_close($con)
?>