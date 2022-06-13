<?php
    include '../conn.php';

?>

<?php
    if(isset($_SESSION['success']))
	{
		echo $_SESSION['success'];
		unset($_SESSION['success']);
	}
	?>

    <?php
    $ubid = $_GET['id'];
    $ubid2 = $_GET['id'];
    $sql = "select * from blog where `bviewed`= 0 order by date ASC";
    $sql2 = "select * from blog where bviewed = 1 order by date ASC";
    
    $result = $conn->query($sql) or die($conn->error);
    $result2 = $conn->query($sql2) or die($conn->error);
    $res=mysqli_query($conn,$sql);
    $row = mysqli_fetch_array($res);
    
	// $bid=$_GET['bid'];
	// $query="select * from blog where user_id='$user_id'";
	// $res=mysqli_query($conn,$query);
	// $data=mysqli_fetch_array($res);

    $myqu = "select * from blog where `bid`='$ubid'";
    $myqu2 = "select * from blog where `bid`='$ubid2'";
    $mysql = mysqli_query($conn,$myqu);
    $mysql2 = mysqli_query($conn,$myqu2);

    $myrow = mysqli_fetch_array($mysql);
    $myrow2 = mysqli_fetch_array($mysql2);
     ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blogs | Dashboard</title>
    <link rel="shortcut icon" type="image/x-icon" href="../common_images/favicon.png">
    <link rel="stylesheet" href="../common_styles/navbar.css">
    <link rel="stylesheet" href="blog-dashboard-style.css">
</head>
<body>
    <div class="menu_icon flex-col">
        <div class="bars"></div>
        <div class="bars"></div>
        <div class="bars"></div>
    </div>

    <div class="left flex-col hideleft">
        <div class="left_wrap">
            <div class="navigation_bl flex-col">
                <div class="searchbar flex-row">
                    <input type="search" name="" id="search_blogs" placeholder="search topic, date, user">
                    <button><i class="fas fa-search"></i></button>
                </div>
                <div class="options flex-row">
                    <!-- <button class="active_list">Pending</button>
                    <button>Reviewed</buttton> -->
                    <a href="#pending "class="active_list">Pending</a>
                    <a href="#rev">Reviewed</a>        
                </div>
            </div>
            <div class="lists flex-row">
                <ul class="pending_li bl_list flex-col">

                    <li class="d1 datewise flex-col">
                        <div class="date1 dates"></div>
                        <div class="date1_blogs pending_blogs">

                        </div>
                    </li>

                    <li class="d2 datewise">
                        <div class="date2 dates"></div>
                        <div class="date2_blogs pending_blogs">

                        </div>
                    </li>

                    <li class="d3 datewise">
                        <div class="older dates">older</div>
                        <div class="older_blogs pending_blogs">

                        <?php 
                            while($row=mysqli_fetch_assoc($result))
                            {
                                ?>
                            <div class="blog_card flex-col">
                                <div class="a_ttl"><?php echo $row['btitle'] ?></div>
                                <div class="a_det">by <span class="a_name"><?php echo $row['uname'] ?></span>, <span class="a_date"><?php echo $row['date']?></span></div>
                                <a href="blog-dashboard2.php?id=<?php echo $row['bid']?>">read more</a>
                            </div>
                            <?php
                            }
                            ?>
                            <!-- <div class="blog_card flex-col">
                                <div class="a_ttl">new blogs</div>
                                <div class="a_det">by <span class="a_name">someone blogger</span>, <span class="a_date">25 december</span></div>
                                <a href="blog-dashboard2.html">read more</a>
                            </div>
                            <div class="blog_card flex-col">
                                <div class="a_ttl">new blogs</div>
                                <div class="a_det">by <span class="a_name">someone blogger</span>, <span class="a_date">25 december</span></div>
                                <a href="blog-dashboard2.html">read more</a>
                            </div>
                            <div class="blog_card flex-col">
                                <div class="a_ttl">new blogs</div>
                                <div class="a_det">by <span class="a_name">someone blogger</span>, <span class="a_date">25 december</span></div>
                                <a href="blog-dashboard2.html">read more</a>
                            </div>
                            <div class="blog_card flex-col">
                                <div class="a_ttl">new blogs</div>
                                <div class="a_det">by <span class="a_name">someone blogger</span>, <span class="a_date">25 december</span></div>
                                <a href="blog-dashboard2.html">read more</a>
                            </div> -->

                        </div>
                    </li>

                </ul>

                <ul class="reviewed_li bl_list">
                <?php
                        while($rowx=mysqli_fetch_assoc($result2))
                            {
                                ?>
                    <li class="result_blogs">
                        
                        <div class="result_card">
                        
                            <div class="check"></div>
                            <div class="flex-col">
                                <div class="a_ttl"><?php echo $rowx['btitle'] ?></div>
                                <div class="a_det">by <span class="a_name"><?php echo $rowx['uname'] ?></span>, <span class="a_date"><?php echo $rowx['date']?></span></div>
                                <a href="blog-dashboard2.php?id=<?php echo $rowx['bid']?>">read more</a>
                            </div>
                        </div>
                        <?php
                            }
                            ?>

                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="right flex-col">

        <!-- add post -->
        <div class="add_post_par flex-col inactive2">
            <form class="add_post flex-col">
                <div class="attl atc_fields flex-col">
                    <label for="a_title">Article title</label>
                    <input type="text" name="atcl_title" id="a_title" required>
                </div>
                <div class="aauth atc_fields flex-col">
                    <label for="a_author">Author</label>
                    <input type="text" name="atcl_auth" id="a_author" required>
                </div>
                <div class="ades atc_fields flex-col">
                    <label for="a_desc">Article Description</label>
                    <input type="text" name="atcl_desc" id="a_desc" required>
                </div>
                <div class="astry atc_fields flex-col">
                    <label for="a_story">Story</label>
                    <textarea name="atcl_story" id="a_story" required></textarea>
                </div>
                <div class="atags atc_fields flex-col">
                    <label for="a_tags">Tags</label>
                    <input type="text" name="atcl_tags" id="a_tags" placeholder="Ex. tag1, tag2, tag3 etc">
                </div>
                <div class="buttons flex-row">
                    <button type="submit" class="publish_b">Publish</button>
                    <button type="reset" class="cancel_b">Cancel</button>
                </div>
                
            </form>
        </div>

        <div class="select_post_par flex-row inactive2">
            <div class="select_post flex-col">
                <img src="images/select_img.png" alt="">
                <div class="select_msg">select a post from menu to proceed</div>
            </div>
        </div>
        <div class="sucs inactive2">Success !</div>
        <div class="right_wrap flex-col inactive22">
            <div class="blog_complete flex-col">
                <div class="top flex-col">
                    <div class="ttl_page"><?php echo $myrow['btitle'];?></div>
                    <div class="auth_page">by <span class="authname_page"><?php echo $myrow['uname'];?></span>, <span class="authdate_page"><?php echo $myrow['date']; ?></span></div>
                    <div class="desc_page">
                        <?php echo $myrow['bdescription']; ?>
                    </div>
                </div>
                <div class="story_page">
                    <p class="main_story">
                        <?php echo $myrow['bstory'];?>
                    </p>
                </div>
            </div>
            
            <form class="buttons flex-row" method="post">
            <button type="submit" id="pass" name="app" value="app" class="button" ><i class="fas fa-check"></i></input>
            
                <button type="reset" id="reject" name="reject"><i class="fas fa-times"></i></button>
                <input type="text" name="rsn" id="reason" placeholder="mention reason" class="inactive2">
                <button type="submit" id="confirm_reject" class='inactive2' name="confirm" value="confirm" class=>Confirm</input></button>
                <button type="button" id="add_post"><i class="fas fa-plus"></i></button>
                <button type="button" id="reveal"><i class="fas fa-chevron-up"></i></button>                
            <!-- </form>
            <form class="buttons flex-row" method="post"> 
            <button type="submit" id="pass" name="app" value="app" class="button" ><i class="fas fa-check"></i></input>
            </form>  -->
            
        </div>
        <button type="button" id="add_post_main"><i class="fas fa-plus"></i></button>
    </div>

</body>
<script src="https://kit.fontawesome.com/7c7b8993a0.js" crossorigin="anonymous"></script>
<script src="blog-dashboard.js"></script>
</html>


<?php


      
    if(isset($_POST['app'])){
        $status2= 1;
        $viewed2 = 1 ;
        // $comment=$_POST['comment'];
        // $id=$_POST['id'];
        
        $query4="UPDATE `blog` set `bviewed`='$viewed2',`bstatus`='$status2' where `bid`='$ubid'";
        
        $res4=mysqli_query($conn,$query4);
        
        if($res4){
            $_SESSION['success']="Row Updated successfully!";
            echo "set_status(".$ubid.",".$status2.");";
            echo "<script>window.location.href = 'blog-dashboard.php' </script>";
            
        }else{
            echo "
            <script>
                alert('Data not updated');
            </script>
            ";
        }
        }
    if(isset($_POST['confirm'])){
        $comment = $_POST['rsn'];
        $status = 1;
        $viewed = 1 ;
        // $comment=$_POST['comment'];
        // $id=$_POST['id'];
        
        $query3="UPDATE `blog` set `bviewed`='$viewed',`bstatus`='$status',`comment`='$comment' where `bid`='$ubid'";
        
        $res3=mysqli_query($conn,$query3);
        
        if($res3){
            $_SESSION['success']="Row Updated successfully!";
            echo "<script>window.location.href = 'blog-dashboard.php' </script>";
            
        }else{
            echo "
            <script>
                alert('Data not updated');
            </script>
            ";
        }
        }

?>