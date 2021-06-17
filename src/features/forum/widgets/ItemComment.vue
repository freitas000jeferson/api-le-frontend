<template>
  <div id="item-chat">
    <div class="icon-user-forum">
    {{data.photo}}
    </div>
    <div class="content-forum">
        <div class="title-content">
            <div class="text-content">
            {{data.body}}
            </div>
        </div>
        <div class="details-content">
            <div>
                <i class='far fa-heart'></i>
                <div class="sizedbox"></div>
                <div>{{data.likes}}</div>
            </div>
                <div class="sizedbox"></div>
            <div>
                <i class='far fa-calendar-alt'></i>
                <div class="sizedbox"></div>
                <div>{{data.date}}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemComment',
  props: {
    data: {
      'type': Object,
      'required': true,
      'default': {
        'photo': 'JF',
        'name': 'Jeferson Gonçalves',
        'email': 'freitas@gmail.com',
        'body': 'Como é essa concordância..',
        'likes': 10,
        'date': '2020-10-11',
        'comments': 4
      }
    }
  },
  data () {
    return {
      x: {}
    }
  },
  created () {
  },
  methods: {

  },
  filters: {

  }
}
</script>

<style>
#item-chat{
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
    width: 100%;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-bottom: 10px;
    border-bottom: 1px solid  grey;
}
.icon-user-forum{
    width: 60px;
    padding: 0;
    height: 55px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #FEF0F0;
    border-radius: 1000px;
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);

}
.content-forum{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
}
.title-content{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
}
div.title-content div.text-content{
    font-size: 14px;
    overflow: hidden;
    text-align: left;
}
.comments-forum{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
}
i.far{
    font-size: 20px;
}
.details-content{
    margin-top: 15px;
    margin-bottom: 10px;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
}
.details-content div{
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    margin-right: 10px;
}
.sizedbox{
    width: 5px;
}
.router,.router:link, .router:visited, .router:active, .router:hover {
  text-decoration: none;
  list-style: none;
  color: rgb(55, 55, 55);
}
</style>
