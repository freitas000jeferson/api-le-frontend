<template>
<div>
    <div id="cards-page">
        <nav-bar-profile></nav-bar-profile>
        <div id='cards-container'>
            <header class="header-main">
                <div class="header-cards">
                    <h1> <i class='fas fa-angle-double-right'></i> Cards de Memória</h1>
                </div>
                <div class="nav-memory">
                <div class="itens-nav">
                    <ul class="itens-nav">
                        <li @click="alterItem(0)">Todos</li>
                        <li @click="alterItem(1)">Novos</li>
                        <li @click="alterItem(2)">Treinar</li>
                    </ul>
                </div>
            </div>
            </header>
            <div v-if="selectItem==0"><mycards></mycards></div>
            <div v-else-if="selectItem==1"><newscards></newscards></div>
            <div v-else><training></training></div>
        </div>
    </div>
</div>
</template>

<script>
import NavBarProfile from '@/features/navbar/pages/NavBarProfile'
import ItemChat from '@/features/forum/widgets/ItemChat'
import mycards from '@/features/memorycards/widgets/mycards'
import newscards from '@/features/memorycards/widgets/newscards'
import training from '@/features/memorycards/widgets/training'
export default {
  name: 'Memorycards',
  components: {
    ItemChat,
    NavBarProfile,
    mycards,
    newscards,
    training
  },
  data () {
    return {
      selectItem: 0
    }
  },
  methods: {
    alterItem: function (id) {
      this.selectItem = id
    }
  }
}
</script>

<style>
#cards-page {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 754px;
    width: 100%;
    align-items: center;
}

#cards-container {
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

.header-cards {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.header-cards h1 {
    font-size: 23px;
    font-weight: 600;
}
.nav-memory {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
div.itens-nav ul {
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: 0;
    margin: 0;
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
