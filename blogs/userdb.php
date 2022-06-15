<?php
    session_start();
    include '../conn.php';
    if(!isset($_SESSION['usignem'])){
        header('location: ../user_signup/user-signup.html');
    }
    else{
        $usignem = $_SESSION['usignem'];
        $usignnm = $_SESSION['usignnm'];
        $sql = "select * from blog";
        $sql2 = "select * from blog where bviewed = 1";

        $result = $conn->query($sql) or die($conn->error);
        $result2 = $conn->query($sql2) or die($conn->error);
        $mysql = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($mysql);

        $dataquery = mysqli_query($conn,"SELECT * from `usermain` where `Email-Id`='$usignem'");
        $datarow = mysqli_fetch_array($dataquery); 

        $sql3 = "select * from blog where uname ='$usignnm'";
        $result3 = $conn->query($sql3) or die($conn->error);
    }  
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UWB | User</title>
    <link rel="shortcut icon" type="image/x-icon" href="../common_images/favicon.png">
    <link rel="stylesheet" href="../common_styles/navbar.css">
    <link rel="stylesheet" href="../common_styles/footer.css">
    <link rel="stylesheet" href="userdb-style.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
</head>

<body>

    <main class="flex-row">

        <div class="open_menu flex-col"><i class="fa-solid fa-chevron-right"></i></div>
        <section class="sidebar flex-col">
            <h1 class="main_ttl flex-row"> <div class="icon"></div> <span>UWB<span>Dashboard</span></span></h1>
            <div class="user flex-row">
                <img src="../common_images/profile.svg" alt="avatar_mini" class="avatar">
                <div class="name"></div>
            </div>
            <ul class="links flex-col">
                <li class="blogsli"><i class="fa-solid fa-newspaper"></i><span>Blogs</span></li>
                <li class="mngli"><i class="fa-solid fa-user"></i><span>Manage profile</span></li>
                <li class="lgoli"><i class="fa-solid fa-arrow-right-from-bracket"></i><a href="user-logout.php"><span>Logout</span></a></li>
                <li class="close_menu"><i class="fa-solid fa-chevron-left"></i></li>
            </ul>
        </section>

        <section class="sect_parent flex-col">
            
            <section class="card_container_par flex-col">

                <!-- SECTION TITLE -->
                <div class="ttl blogsttl flex-row"><i class="fa-solid fa-newspaper"></i><span>all blogs</div>

                <!-- FILTERS -->
                <ul class="filters flex-row closed">
                    <li class="all filter flex-row"><div class="indic"></div><span>all</span></li>
                    <li class="appr filter flex-row"><div class="indic"></div><span>approved</span></li>
                    <li class="pend filter flex-row"><div class="indic"></div><span>pending</span></li>
                    <li class="rej filter flex-row"><div class="indic"></div><span>rejected</span></li>
                </ul>

                <!-- NO POST MESSAGE -->
                <div class="no_post flex-col noselect">
                    <img src="images/no_post_img.png" alt="no post" class="np_img">
                    <div class="np_msg flex-row">No posts yet. create by clicking <span><i class="fa-solid fa-plus"></i></span></div>
                </div>

                <!-- ADD POST -->

                
                <!-- CARDS BOX -->
                
                

                <div class="card_container flex-row">
               
                <?php 
                            while($myrow=mysqli_fetch_assoc($result3))
                            {
                                ?> 
<div class="blog_msg flex-row">No <span></span> blogs.</div>


                    <article class="blog_card flex-col">
                   
                        <p class="bname"><?php echo $myrow['btitle'] ?></p>
                        <p class="bdate"><?php echo $myrow['date']?></p>
                        <p class="bdesc"><?php echo $myrow['bdescription']; ?></p>
                        <p class="bstory"><?php echo $myrow['bstory'];?></p>
                        <p class="status">Status : <span><?php 
                        if($myrow['bstatus']==1 && $myrow['bviewed']==1){
                            echo "Approved" ;
                        }elseif($myrow['bstatus']==1 && $myrow['bviewed']==0){
                            echo "Rejected" ;

                        }else{
                            echo "Pending";
                        }
                        ?></span></p>
                    </article>
                    <?php
                            }
                            ?>
                   
                </div>
                

                <!-- VIEW STORY -->
                <div class="view_story_par flex-row inactive2">
                    <article class="view_story flex-col">
                        <div class="backbtn flex-row"><i class="fa-solid fa-chevron-left"></i><span>back to blogs</span></div>
                        <div class="vttl flex-row"></div>
                        <div class="vdate"></div>
                        <div class="vdescttl">Description</div>
                        <div class="vdesc"></div>
                        <div class="vstryttl">Story</div>
                        <div class="vstry"></div>
                    </article>
                </div>

                <!-- ADD POST -->
                <div class="add_btn"><i class="fa-solid fa-plus"></i></div>
                <div class="add_post_par flex-col inactive2">
                    <form class="add_post flex-col" id="b_form" action="blog-addpost.php" method="post">
                        <div class="attl atc_fields flex-col">
                            <label for="a_title">Article title</label>
                            <input type="text" name="atcl_title" id="a_title" required maxlength="40ch">
                        </div>
                        <div class="ades atc_fields flex-col">
                            <label for="a_desc">Article Description</label>
                            <input type="text" name="atcl_desc" id="a_desc" required maxlength="300ch">
                        </div>
                        <div class="astry atc_fields flex-col">
                            <label for="a_story">Story</label>
                            <textarea name="atcl_story" id="a_story" required></textarea>
                        </div>
                        <div class="atags atc_fields flex-col">
                            <label for="a_tags">Tags</label>
                            <input type="text" name="atcl_tags" id="a_tags" placeholder="Ex. tag1, tag2, tag3 etc">
                        </div>
                        <div class="warn"><strong>Note :</strong> The articles that you publish are reviewed by our team before publishing. Inappropiate articles will not be published.</div>
                        <div class="buttons flex-row">
                            <button type="submit" class="publish_b" id="submit">Publish</button>
                            <button type="reset" class="cancel_b">Cancel</button>
                        </div>
                    </form>
                    
                </div>
                

            </section>

            
            <!-- PROFILE SECTION -->
            <section class="profile_section flex-col inactive2">
                <!-- SECTION TITLE -->
                <div class="ttl blogsttl flex-row"><i class="fa-solid fa-user"></i><span>manage profile</div>
                
                <div class="usrmain_parent flex-row">
                    <form class="usrprofile flex-col" action="update-profile.php" method="POST">
                        <div class="profile_main flex-row">
                            <div class="img_par">
                                <img src="../common_images/profile.svg" alt="avatar" class="avatar">
                                <div class="editimg"><i class="fa-solid fa-camera"></i></div>
                                <ul class="avatar_list flex-row inactive2">
                                    <li> <img src="../common_images/profile.svg" alt="avatar" class="avatar1"> </li>
                                    <li> <img src="../common_images/avatars/av1.png" alt="avatar" class="avatar1"> </li>
                                    <li> <img src="../common_images/avatars/av2.png" alt="avatar" class="avatar1"> </li>
                                    <li> <img src="../common_images/avatars/av3.png" alt="avatar" class="avatar1"> </li>
                                    <li> <img src="../common_images/avatars/av4.png" alt="avatar" class="avatar1"> </li>
                                    <li> <img src="../common_images/avatars/av5.png" alt="avatar" class="avatar1"> </li>
                                    <li> <img src="../common_images/avatars/av6.png" alt="avatar" class="avatar1"> </li>

                                </ul>
                            </div>
                            <div class="basics flex-col">
                                <div class="uname_par flex-col">
                                    <div class="namettl">Name</div>
                                    <span class="uname"><?php echo $_SESSION['usignnm']; ?></span>
                                    <input type="text" name="usignnm">
                                </div>
                                <div class="uname_par flex-col">
                                    <div class="mailttl">Email</div>
                                    <span class="umail"><?php echo $_SESSION['usignem']; ?></span>
                                </div>
                            </div>
                        </div>

                        <div class="profile_extra flex-col">
                            <div class="uloc_par flex-col">
                                <div class="locttl">Location</div>
                                <span class="uloc"><?php echo $datarow['Location'] ?></span>
                                <input type="text" name="usignloc">
                            </div>
                            <div class="ubio_par flex-col">
                                <div class="biottl">User Bio</div>
                                <span class="ubio"><?php echo $datarow['User-Bio'] ?></span>
                                <textarea cols="10" rows="5" maxlength="250ch" name="usignbio"></textarea>
                            </div>
                        </div>
                        
                        <div class="btns flex-row">
                            <button id="edit" type="button">Edit</button>
                            <button id="save" type="submit">Save</button>
                            <button id="cancel" type="reset">Cancel</button>
                        </div>

                    </form>

                    <img src="../common_images/Profile Illustration.svg" alt="illustration">
                </div>

            </section>

        </section>        
    </main>

</body>
<script src="userdb.js"></script>
</html>