<template>
  <div id="nav-profile">
    <div id="header-profile">
        <div class="logo-profile">
            <img src="@/assets/svg/logo_le.svg" alt="logo">
            <span id="nav-title">Learning English</span>
        </div>
        <div class="items">
            <ul>
                <router-link v-for='(item, index) in itens_menu' :key="index" class="router-login" :to="{name:item.link}">
                    <li  :class="item.css">
                        {{item.name}}
                    </li>
                </router-link>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBarProfile',
  props: [],
  data () {
    return {
      'itens_menu': [
        // {name: 'Aprender', link: '*', css: 'blue'},
        {name: 'Cards', link: 'Memorycards', css: 'yellow'},
        {name: 'Fórum', link: 'Forum', css: 'green'},
        {name: 'Dicionário', link: 'Dictionary', css: 'pink'},
        {name: 'Perfil', link: 'Profile', css: 'white'},
        {name: 'Sair', link: 'Logout', css: 'black'}
      ]
    }
  }
}

</script>

<style>
#nav-profile{
    display: flex;
    background-color: #fff;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: center;
    width: 100%;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
}
div.logo-profile span#nav-title{
    font-family: 'Nova Mono', monospace;
    color: rgb(80, 80, 80);
    font-weight: 700;
    font-size: 22px;
    margin-left: 8px;
}

#header-profile{
    min-width: 980px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
div.logo-profile img{
    width: 50px;
    height:50px;
}
div.items ul{
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style: none;
     padding: 0;
    margin: 0;
}
div.items ul li{
    display: flex;
    flex-direction: row;
    padding: 10px 25px 10px 25px;
    margin-left: 2px;
    margin-right: 2px;
    font-weight: 600;
    border-radius: 3px;

}
div.items ul li.black:hover{
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    background-color: #fff;
    color: #dd1233;
}

div.items ul li.white:hover{
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    background-color: #fff;
    color: #5F48EA;
}
div.items ul li.blue:hover{
    background-color: #EEF1FF;
    color: #5577FF;
}
div.items ul li.green:hover{
    background-color: #E5F8F3;
    color: #6BC950;
}
div.items ul li.pink:hover{
    background-color: #FFF1F7;
    color: #FD71AF;
}

div.items ul li.yellow:hover{
    background-color: #FFF9E5;
    color: #FFC800;
}
.router-login, .router-login:link, .router-login:visited, .router-login:active{
    text-decoration: none;
  list-style: none;
  color: rgb(55, 55, 55);
}

</style>
