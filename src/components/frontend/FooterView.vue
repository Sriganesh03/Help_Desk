<template>
<footer class="footer-top">
        <div class="container">
            <div class="row">
                <img src="/frontend/assets/img/logo.png" alt="Italian Trulli"  style=" float:left;width:150px;height:150px;">
                <div class="footer-col">
                    <h4>TCE Help Desk</h4>
                    <p>Address<br>Thiagarajar College of Engineering<br>Madurai 625 015</p>
                    
                </div>
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><router-link class="active" to="/">Home</router-link></li>
                        <li><a href="#">Events</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy Program</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>TCE Page</h4>
                    <ul>
                        <li><a href="https://www.tce.edu/">Official Page</a></li>
                    </ul>
                </div>
                
                <div class="footer-col">
                    <h4>Call Us: 22257896 <br>Mail:<a href="mailto:admin@tce.edu?">admin@tce.edu</a></h4>
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/TheOfficialTCEPage/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/tceofficialpage?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/tce_madurai/?hl=en"><i class="fab fa-instagram"></i></a>
                        <a href="https://in.linkedin.com/school/thiagarajar-college-of-engineering/"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class="footer-bottom">
            <p>CopyRights Reserved &copy;. All Rights Reserved 2020-2021</p>
        </div>
   </footer>
</template>

<script>
export default {
    name:'FooterView',
};
</script>

<style>

</style>