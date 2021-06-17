<template>
<div>

    <div id="data-chat">
        <div class="content-forum">
            <div class="title-content">
                <div class="text">
                    {{data.word}}
                </div>
                <div class="comments-forum">
                    <i class='fas fa-splotch'></i>
                    <div class="sizedbox"></div>
                    <div>{{data.level}}</div>
                </div>
            </div>
            <div class="details-content">
                <div>
                    <div>{{data.description}}</div>
                </div>

            </div>
            <div class="row tags">
                <tags :data="data.meanings"></tags>
            </div>
            <h4>Frases:</h4>
            <div class="list-phrases">
                <div v-for="(i,index) in data.phrases" :key="index" class="frase">
                    <i class='fa fa-quote-right'></i> {{i.text}}
                </div>

            </div>
            <div class="details-content">
                <div>
                    <i class='fas fa-eye'></i>
                    <div class="sizedbox"></div>
                    <div>{{data.step}}</div>
                </div>
                <div class="sizedbox"></div>
                <div>
                    <i class='far fa-calendar-alt'></i>
                    <div class="sizedbox"></div>
                    <div>{{new Date(parseInt(data.date_view)).toLocaleDateString("pt-BR")}}</div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Tags from '@/features/forum/widgets/Tags'
export default {
  name: 'dataCard',
  components: {
    Tags
  },
  props: {
    data: {
      'type': Object,
      'required': true,
      'default': {
        id: 'memorycard01',
        word: 'pendant',
        meanings: ['pingente', 'brinco'],
        id_user: 'ObjectId(user01)',
        description: 'texto em md',
        level: 1,
        date_view: '2020-11-12T10:10:10.2131231/* salvar como timestamp */',
        step: 2,
        phrases: ['ok']
      }
    }
  }
}
</script>

<style>
.list-phrases {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    align-items: flex-start;
    text-align: start;
}
.divider{
    width: 100%;
    background-color: red;
    height: 10px;
}
h4 {
    font-weight: 800;
    font-size: 20px;
}
.frase{
    margin-top: 10px;
}
.tags {
    padding: 5px 0px 5px 0px;
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
}

.row {
    display: flex;
    flex-direction: row;
}

#data-chat {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid grey;
}

.icon-user-forum {
    width: 60px;
    padding: 0;
    height: 55px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #FEF0F0;
    border-radius: 1000px;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);

}

.content-forum {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
}

.title-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

div.title-content div.text {
    font-size: 30px;
    font-weight: 800;
    overflow: hidden;
    text-align: left;
}

.comments-forum {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}

i.far,
i.fas {
    font-size: 20px;
}

.details-content {
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}

.details-content div {
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    margin-right: 10px;
}

.sizedbox {
    width: 5px;
}

.router,
.router:link,
.router:visited,
.router:active,
.router:hover {
    text-decoration: none;
    list-style: none;
    color: rgb(55, 55, 55);
}
</style>
