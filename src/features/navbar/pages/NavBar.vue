<template>
<div id="navbar-main">
    <div id="navbar">
        <div class="logo">
            <router-link class="router-login" :to="{name:'Home'}">
                <img src="@/assets/svg/logo_le.svg" alt="ok">
                <span id="nav-title">Learning English</span>
            </router-link>

        </div>
        <div class="items">
            <router-link class="router-login" :to="{name:'Login'}">
                <div class="btn-menu btn-login"> Entre</div>
            </router-link>
           <div class="sizedbox"></div>
            <router-link class="router-login" :to="{name:'Signup'}">
                <div class="btn-menu singin">Cadastre-se</div>
            </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'NavBar'
}
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction () {
  if (document.getElementById('navbar-main')) {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
      document.getElementById('navbar-main').style.backgroundColor = 'rgba(255, 255, 255, 1)'
      document.getElementById('navbar-main').style.boxShadow = '0px 3px 5px rgb(120, 120, 120)'
    } else {
      document.getElementById('navbar-main').style.backgroundColor = 'rgb(255, 255, 255, 0 )'
      document.getElementById('navbar-main').style.boxShadow = '0px 0px 0px rgba(120, 120, 120,0)'
    }
  }
}
</script>

<style>

#navbar-main {
    position: fixed;
    top: 0px;
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgb(250, 250, 255);
    box-shadow: 0px 3px 5px rgb(120, 120, 120);
    padding-bottom: 5px;
    padding-top: 5px;
}

#navbar {
    min-width: 980px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: rgb(55, 55, 55);
}

img {
    width: 50px;
    height:50px;
    padding: 0px;
}
.sizedbox{
    width: 20px;
}
.nav-title{
    color: rgb(80, 80, 80);
}
.logo {
    font-family: 'Nova Mono', monospace;
    font-weight: 700;
    font-size: 22px;
    margin-left: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;

}

.items {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.btn-menu {
    /* font-size: 15px;*/
    display: flex;
    flex-direction: row;
    padding: 10px 25px 10px 25px;
    font-weight: 400;
    box-shadow: inset 1px 1px 0 1px #fff;
    border: 0.5px solid grey;
    border-radius: 50px;
}

.singin {
    background-color: #ffe54c;
    transition: .4s;
}

.btn-login {
    /*background-color: #7b68ee;*/
    background-color: white;
    transition: .4s;

}

.singin:hover {
    box-shadow: inset 1px 1px 0 1px #f70;
    background-color: #f70;
    border: 0.5px solid #f70;
    color: white;
}

.btn-login:hover {
    /* box-shadow: inset 1px 1px 0 1px #5c4dbc;
    background-color: #5c4dbc;
    border: 0.5px solid #5c4dbc;
    color: white;*/
    box-shadow: inset 1px 1px 0 1px #00b08c;
    background-color: #00b08c;
    border: 0.5px solid #00b08c;
    color: white;
}
.router-login{
  text-decoration: none;
  color: rgb(55, 55, 55);
}
.router-login:link{
  text-decoration: none;
  color: rgb(55, 55, 55);
}
.router-login:visited {color: rgb(55, 55, 55);}  /* Mouse over link */
.router-login:active {color: rgb(55, 55, 55);}

</style>
