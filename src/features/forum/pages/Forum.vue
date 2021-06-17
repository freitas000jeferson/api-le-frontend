<template>
<div id="forum-page">
    <nav-bar-profile></nav-bar-profile>
    <div id='forum-container'>
        <header class="header-main">
            <div class="header-forum">
                <h1> <i class='fas fa-angle-double-right'></i> Fóruns de idiomas</h1>
                <div class="search">
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Buscar">
                </div>
            </div>
            <div class="nav-foruns">
                <div class="itens-nav">
                    <ul class="itens-nav">
                        <li>Popular</li>
                        <li>Novos</li>
                        <li>Seguindo</li>
                    </ul>
                </div>
                <div class="seguir">
                    <div class="btn-menu btn-new-topic">Nova discursão</div>
                </div>
            </div>
        </header>
        <div class="body-messages">
            <ul class="messages">
                <li v-for="(item, index) in data" :key="index">
                    <item-chat :data="item"></item-chat>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import NavBarProfile from '@/features/navbar/pages/NavBarProfile'
import Footer from '@/features/footer/pages/Footer'
import ItemChat from '@/features/forum/widgets/ItemChat'
export default {
  name: 'Forum',
  components: {
    Footer,
    ItemChat,
    NavBarProfile
  },
  data () {
    return {
      data: [{
        'name': 'Jeferson Gonçalves',
        'photo': 'JG',
        'email': 'freitas@gmail.com',
        'title': 'Como é essa concordância..',
        'likes': 10,
        'date': '2020-10-11',
        'comments': 4
      },
      {
        'name': 'Matheus Ferreira',
        'photo': 'MF',
        'email': 'freitas@gmail.com',
        'title': 'Como é essa concordância..',
        'likes': 10,
        'date': '2020-10-11',
        'comments': 4
      },
      {
        'name': 'Samuel Lucas',
        'photo': 'SL',
        'email': 'freitas@gmail.com',
        'title': 'Como é essa concordância..',
        'likes': 10,
        'date': '2020-10-11',
        'comments': 4
      }
      ]
    }
  }
}
</script>

<style>
#forum-page {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 754px;
    width: 100%;
    align-items: center;
}

#forum-container {
    width: 980px;
    margin-top: 10px;
}

header.header-main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid #5e5e5e52;
    padding-bottom: 2px;
}

.header-forum {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header-forum h1 {
    font-size: 23px;
    font-weight: 600;
}

.nav-foruns {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.btn-menu {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    padding: 10px 25px 10px 25px;
    font-weight: 400;
    box-shadow: inset 1px 1px 0 1px #fff;
    border: 0.5px solid grey;
    border-radius: 50px;
}

.btn-new-topic {
    background-color: #66f2d5;
    transition: .4s;
}

.btn-new-topic:hover {
    box-shadow: inset 1px 1px 0 1px #00b08c;
    background-color: #00b08c;
    border: 0.5px solid #00b08c;
    color: white;
}

div.itens-nav ul {
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 0;
    margin: 0;
}

ul.messages {
    margin: 0;
    padding: 0;
}

div.itens-nav ul li {
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style: none;
    padding: 10px 25px 10px 25px;
    margin-right: 4px;
    font-weight: 600;
    border-radius: 10px 10px 0px 0px;
}

div.itens-nav ul li:hover {
    background-color: #EEF1FF;
    text-decoration: underline;
}
</style>
