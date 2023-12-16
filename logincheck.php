<?php
$servername="localhost";
$username="root";
$password="";
$database="user";
$conn=mysqli_connect($servername,$username,$password,$database);

if($_SERVER['REQUEST_METHOD']=='POST')
$email=$_POST['email'];
$pass=$_POST['password'];

$sql="select * from users where email='$email' AND password='$pass';";
$result=mysqli_query($conn,$sql);
$row=mysqli_num_rows($result);
if($row>=1){
    header("location:index.html");

}
else{
    header("location:singup.html");
}
?>