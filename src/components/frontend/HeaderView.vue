<template>
  <header>
        <div class="wrapper" style="width: 90%;float:center; padding-left:100px;" >
             <nav>
                <img src="/frontend/assets/img/logo.png" alt="Italian Trulli"  style=" float:left;width:150px;height:150px;">
                <span style="font-size: 20px;">THIAGARAJAR COLLEGE OF ENGINEERING<br><span style="font-size: 20px;">Madurai 625 015</span></span>
                <ul>
                    <li><router-link class="active" to="/">Home</router-link></li>
                    <li><a class="active" href="http://localhost:5000/viewbookdetails">Library Books</a></li>
                    <li><a class="active" href="http://localhost:5000/vieweventdetails">Events</a></li>
                    <li><a href="#">More<i class="fas fa-caret-down"></i></a>
                    <ul>
                        <li><router-link class="active" to="/faqs">FAQs</router-link></li>
                        <li><a href="https://www.mycamu.co.in/#/">Mycamu</a></li>
                        <li><a href="#">FeeStructure</a></li>
                        <li><router-link class="active" to="/career">Career</router-link></li>
                    </ul>
                    </li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="http://localhost:5000/login">Login</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name:'HeaderView',
};
</script>

<style>

</style>