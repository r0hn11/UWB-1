<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UWB | Blogs</title>
    <link rel="shortcut icon" type="image/x-icon" href="../common_images/favicon.png">
    <link rel="stylesheet" href="../common_styles/navbar.css">
    <link rel="stylesheet" href="../common_styles/user-dashboard.css">
    <link rel="stylesheet" href="../common_styles/footer.css">
    <link rel="stylesheet" href="blog-style.css">
</head>
<body>

    <a href="#blog-section" class="skip_nav">Skip navigation</a>

    <!-- MAIN NAVIGATION -->
    <div class="preloader">
        <div class="pre_wrap">
            <div class="circle"></div>
            <div class="pre_logo">uwb</div>
            <div class="fo">foundation</div>
            <div class="ad">Gwalior, MP</div>
        </div>
    </div>
    <div class="navigation flex-row">
        <div class="menu_bar flex-row">
            <div class="logo_img"></div>
            <h1 class="logo_txt title">united well-being foundation</h1>
            <h1 class="logo_txt_min title">united well-being fo.</h1>
            <h1 class="logo_txt_min2 title">UWB FO.</h1>
            <nav class="menu_wide">
                <ul class="flex-row">
                    <li><a href="../landing_page/index.html">Home</a></li>
                    <li><a href="#about-section">About Us</a></li>
                    <li><a href="../blogs/blog-home.html" class="active_page">Blogs</a></li>
                    <li>
                        <button id="team_drop">Team</button>
                        <ul id="team_menu" class="team_sub flex-col inactive">
                            <li><a href="../teams/teams-management.html" id="m_team">Management Team</a></li>
                            <span class="divider"></span>
                            <li><a href="../teams/team-directors.html" id="brd">Board of Directors</a></li>
                        </ul>
                    </li>
                    <li><a href="../contact_us/contact-us.html">Contact</a></li>
                    <li><button id="acc">Account</button>
                    </li>
                </ul>
            </nav>
            <div class="menu_icon flex-col">
                <div class="bars bar1"></div>
                <div class="bars bar2"></div>
                <div class="bars bar3"></div>
            </div>
        </div>
    </div>
    
    <!-- SIDE NAVIGATION -->
    <nav class="menu_mini flex-col">
        <ul class="main_menu_min flex-col">
            <li><a class='menu_links' href="../landing_page/index.html">Home</a></li>
            <li><a class='menu_links' href="#about-section">About Us</a></li>
            <li><a class='menu_links active_page_min' href="../blogs/blog-home.html">Blogs</a></li>
            <li><a class='menu_links' href="../teams/teams-management.html">Management Team</a></li>
            <li><a class='menu_links' href="../teams/team-directors.html">Board of Directors</a></li>
            <li><a class='menu_links' href="../contact_us/contact-us.html">Contact</a></li>
            <li><button class='menu_links' id="acc2">Account</button></li>
        </ul>
    </nav>

    <!-- ACCOUNT OPTIONS -->
    <div class="acc_par inactive2">
        <div class="acc_bg flex-row">
            <div class="acc_wrapper flex-col" id="acc_wrapperid">
                <div class="top flex-col" id="topid">
                    <img src="../common_images/profile.svg" alt="profile-picture" class="avatar">
                    <div class="name" id="nameid">Signed out</div>
                </div>
                <div class="low flex-col" id="acc_links">
                    <div id="mng"><button class="disabled2">Manage profile</button></div>
                    <div id="auth_login"><a href="../admin_login/admin-login.html">Authorized signin</a></div>
                    <div id="usr_login"><a href="../user_signup/user-signup.html">User signin</a></div>
                </div>
            </div>
        </div>
    </div>

    <!-- USER DASHBOARD-MINI -->
    <div class="db_wrap_par inactive2">
        <div class="db_wrap flex-col">
            <i class="fas fa-times"></i>

            <div class="main_db flex-row">
                <div class="profile">
                    <img src="../common_images/profile.svg" alt="profile-picture" class="profile_picture">
                    <div class="ed_avt inactive2"><i class="fas fa-camera"></i></div>
                </div>
                <div class="edit_avatars flex-col inactive2">
                    <div class="ea_ttl">Select your Avatar</div>
                    <div class="ea_icons flex-row">
                        <img src="../common_images/avatars/av1.png" class="avatars" alt="avatar1">
                        <img src="../common_images/avatars/av2.png" class="avatars" alt="avatar2">
                        <img src="../common_images/avatars/av3.png" class="avatars" alt="avatar3">
                        <img src="../common_images/avatars/av4.png" class="avatars" alt="avatar4">
                        <img src="../common_images/avatars/av5.png" class="avatars" alt="avatar5">
                        <img src="../common_images/avatars/av6.png" class="avatars" alt="avatar6">
                    </div>
                    <div class="ea_cncl">Cancel</div>
                </div>
                <div class="side_db flex-col">
                    <div class="name">
                        <span class="field">Name :</span>
                        <span id='user_name' class="edit_value">-</span>
                        <input type="text" class="edit_fields" id="un">
                    </div>
                    <div class="location">
                        <span class="field">From :</span>
                        <span id='user_from' class="edit_value">-</span>
                        <input type="text" class="edit_fields" id="uf">
                    </div>
                </div>
            </div>
            <div class="extras flex-col">
                <div class="bio">
                    <span class="field">Bio :</span>
                    <span id='user_bio' class="edit_value">-</span>
                    <input type="text" class="edit_fields" id="ub" maxlength="70ch">
                </div>
                <div class="mail">
                    <span class="field">Email :</span>
                    <span id='user_mail' class="edit_value">-</span>
                </div>
                <div class="blogs">
                    <span class="field">Blogs :</span>
                    <div class="no_post_msg">No posts yet.</div>
                    <div class="blogs_table">
                        <table>
                            <thead>
                                <tr>
                                    <th width='100'>Title</th>
                                    <th width='100'>Date</th>
                                    <th width='100'>Status</th>
                                    <th width='300'>Reason</th>
                                </tr>
                            </thead>
                            <!-- <tr>
                                <td>lorem lorem</td>
                                <td>123asd123</td>
                                <td>lorem3</td>
                                <td>Lorem ipsum dolor sit amet.</td>
                            </tr> -->
                        </table>
                    </div>
                </div>
                <div class="btns flex-row">
                    <div class="edit"><i class="fas fa-pen"></i>Edit Profile</div>
                    <div class="save">Save changes</div>
                    <div class="cancel">Cancel</div>
                </div>
            </div>
        </div>
    </div>

    <!-- BREADCRUMB  -->
    <div class="breadcrumb_par flex-row">
        <div class="breadcrumb flex-row">
            <span class="home"><a href="../landing_page/index.html">Home</a></span>
            <span class="separator">/</span>
            <span class="blog"><a href="#">Blogs</a></span>
        </div>
    </div>

    <!-- BLOG SPACE -->
    
    <div class="blog_wrap_par flex-col">
        
        <div class="blog_main flex-col" id="blog-section">
            <h2 class="sect_ttl">Blogs</h2>
            <div class="blog_content flex-col">

                <button class="share_btn">share your story<span class="shr_fx"></span></button>
                
                <!-- search options -->
                <div class="blog_search"></div>
                
                <!-- no post -->
                <div class="no_post_wrap flex-col">
                    <img src="images/no_post_img.png" alt="" class="no_post_img">
                    <div class="no_post_msg_bl">Nothing to show here.</div>
                </div>
                
                <!-- cards container -->
                <ul class="blog_cards_container flex-row">

                    <!-- card sample -->
                    
                    <li class="blog_card flex-col">
                        <div class="bname">1</div>
                        <div class="bauth">adrian murloc</div>
                        <div class="bdesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet totam tempora non eius voluptatem reprehenderit autem eum eligendi rem, nihil doloremque perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde soluta nulla molestias impedit fuga eius, laudantium iure corporis quas quasi.</div>
                        <button class="rd_more">Read more</button>
                    </li>
                    
                </ul>
                
                <!-- load more -->

                <a id="load_more" href="blogs-all.html">load more</a>

                <!-- add post -->
                <div class="add_post_par flex-col" id='add_post'>
                    <form class="add_post flex-col" id="b_form">
                        <div class="attl atc_fields flex-col">
                            <label for="a_title">Article title</label>
                            <input type="text" name="atcl_title" id="a_title" required>
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
                        <div class="warn"><strong>Note :</strong> The articles that you publish are reviewed by our team before publishing. Inappropiate articles will not be published.</div>
                        <div class="buttons flex-row">
                            <button type="submit" class="publish_b" id="publish_b">Publish</button>
                            <button type="reset" class="cancel_b">Cancel</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>

    <!-- FOOTER -->
    <footer class="footer_main flex-col" id="about-section">
        <div class="site_footer flex-row">
            <div class="abt flex-col">
                <h1 class="about_ttl">united well-being foundation</h1>
                <h1 class="about_ttl_min">united well-being fo.</h1>
                <h1 class="about_ttl_min2">uwb fo.</h1>
                <div class="about_desc">We have started this organisation to help people in need, People who are going through tough times mentally. We help them by providing needful support.<br>Doing our best to decrease the depression rate of india which is currently increasing day by day.</div>
                <div class="contacts flex-row">
                    <ul class="flex-row">
                        <li><a href="https://facebook.com/unitedwellbeingfoundation"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://instagram.com/unitedwellbeing"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/uwb_fo"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://linkedin.com/company/unitedwell-being"><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="extras flex-col">
                <ul class="flex-col">
                    <li><a href="blog-home.html">Blogs</a></li>
                    <li><a href="../teams/teams-management.html">Team</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Policy</a></li>
                    <li><a href="">Location</a></li>
                    <li><a href="https://forms.gle/i87Qc7YetM1Xh5w26">Help</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright flex-row">&copy; 2021 | All rights reserved to United Well-Being Foundation</div>
        <a href="#blank" class="btt"><i class="fas fa-chevron-circle-up"></i></a>
    </footer>

    <div class="flag">1</div>

</body>

<script src="https://kit.fontawesome.com/7c7b8993a0.js" crossorigin="anonymous"></script>
<script src="../common_scripts/navbar.js"></script>
<script src="../common_scripts/dashboard.js"></script>
<script src="blog.js"></script>
<script type='text/javascript' src="jquery.js"></script>

<script type='text/javascript'>

    $(document).ready(function(){
      
        $("#publish_b").on("click",function(e){
            e.preventDefault();
            var a_title = $("#a_title").val();
            var a_desc = $("#a_desc").val();
            var a_story = $("#a_story").val();
            var a_tags = $("#a_tags").val();

            $.ajax({
                url: "blog-addpost.php",
                type: "POST",
                data: {a_title:a_title,a_desc:a_desc,a_story:a_story,a_tags:a_tags},
                success:function(data){
                    if(data == 1){
                    $("#b_form").trigger("reset");
                }
                    else{
                        alert("Could not enter data");
                    }
                }
            });
        })
    });

</script>
</html>