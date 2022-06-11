<?php
session_start();
    include '../conn.php';
    if($conn)
    {
        $aname = $_SESSION['aname'];
        $apw = $_SESSION['apw'];
        $departments = $_SESSION['departments'];
        $result=mysqli_query($conn,"select * from admin where aname='$aname' and apw='$apw' and departments='$departments'") or die("Cant connect to server!");
        if(mysqli_num_rows($result)>0){
            $_SESSION["admin-login"] = 1;
            $sql = "select * from blog where bviewed = 0 order by date ASC";
            $sql2 = "select * from blog where bviewed = 1 order by date ASC";
            $result = $conn->query($sql) or die($conn->error);
            $result2 = $conn->query($sql2) or die($conn->error);
        }
        else{
            echo"<script language='javascript'>
                 alert('Please enter correct credentials!!');
                 window.location.href='../admin_login/admin-login.html';
            </script>";
        }
    }
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
                    <a href="#query"><i class="fas fa-search"></i></a>
                </div>
                <div class="options flex-row">
                    <a href="#pending" class="active_list">Pending</a>
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
                            <!-- // Card Format for Outline -->
                            <?php 
                            while($row=mysqli_fetch_assoc($result))
                            {
                                ?>
                            <div class="blog_card flex-col">
                                <div class="a_ttl"><?php echo $row['btitle'] ?></div>
                                <div class="a_det">by <span class="a_name"><?php echo $row['uname'] ?></span>, <span class="a_date"><?php echo $row['date']?></span></div>
                                <a href="blog-dashboard2.php?id=<?php echo $row['bid'];?>">read more</a>
                            </div>
                            <?php
                            }
                            ?>
                        </form>
            

                        </div>
                    </li>

                </ul>
                
                <ul class="reviewed_li bl_list">
                <?php
                        while($row=mysqli_fetch_assoc($result2))
                            {
                                ?>
                    <li class="result_blogs">
                        
                        <div class="result_card">
                            
                            <div class="check"></div>
                            <div class="flex-col">
                                <div class="a_ttl"><?php echo $row['btitle'] ?></div>
                                <div class="a_det">by <span class="a_name"><?php echo $row['uname'] ?></span>, <span class="a_date"><?php echo $row['date']?></span></div>
                                <a href="blog-dashboard2.php?id=<?php echo $row['bid'];?>">read more</a>
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
            <form class="add_post flex-col" action="add_post.php" method="post">
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
                    <button type="submit" class="publish_b" name="publish">Publish</button>
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
        <div class="right_wrap flex-col inactive2">
            <div class="blog_complete flex-col">

                <div class="top flex-col">
                    <div class="ttl_page"></div>
                    
                    <div class="auth_page">by <span class="authname_page"></span>, <span class="authdate_page"></span></div>
                    <div class="desc_page">
                        
                    </div>
                </div>
                
                <div class="story_page">
                    <p class="main_story">story
                    </p>
                </div>
            </div>
            <form class="buttons flex-row">
                <button type="button" id="pass"><i class="fas fa-check"></i></button>
                <button type="reset" id="reject"><i class="fas fa-times"></i></button>
                <input type="text" name="rsn" id="reason" placeholder="mention reason" class="inactive2" required>
                <button type="submit" id="confirm_reject" class='inactive2'>Confirm</i></button>
                <button type="button" id="add_post"><i class="fas fa-plus"></i></button>
                <button type="button" id="reveal"><i class="fas fa-chevron-up"></i></button>
            </form>
        </div>
        <button type="button" id="add_post_main"><i class="fas fa-plus"></i></button>
    </div>

</body>
<script src="https://kit.fontawesome.com/7c7b8993a0.js" crossorigin="anonymous"></script>
<script src="blog-dashboard.js"></script>
</html>
