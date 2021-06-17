<template>
  <div id="messages-page">
    <nav-bar-profile></nav-bar-profile>
    <div id='messages-container'>
        <div class="header-messages-main">
            <div class="row header-messages">
                <div class="icon-photo-message">
                    {{data.user.photo}}
                </div>
                <div class="column header-title-and-btn">
                    <div class="row header-title">
                        <div class="h-title">
                        {{data.title}}
                        </div>
                        <div class="seguir">
                            <div class="btn-menu btn-acompanhar">Acompanhar</div>
                        </div>
                    </div>
                    <div class="row h-name"> {{data.user.name}}</div>
                </div>
            </div>
            <div class="row tags">
                <tags :data="data.tags"></tags>
            </div>
        </div>
        <div class="description-message">
        {{data.body}}
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
        <field-send-message></field-send-message>
        <area-comments :data='data'></area-comments>
    </div>

  </div>
</template>

<script>
import NavBarProfile from '@/features/navbar/pages/NavBarProfile'
import Tags from '@/features/forum/widgets/Tags'
import AreaComments from '@/features/forum/widgets/AreaComments'
import FieldSendMessage from '@/features/forum/widgets/FieldSendMessage'
export default {
  name: 'ForumMessages',
  components: {
    Tags,
    AreaComments,
    FieldSendMessage,
    NavBarProfile
  },
  data () {
    return {
      data: {
        user: {
          name: 'Jeferson Gonçalves',
          photo: 'JG'
        },
        title: 'Como faz isso aqui?',
        tags: ['problema', 'ingles', 'portugues', 'fire'],
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

        likes: 10,
        date: '2020-11-20',
        comments: 10,
        list_coments: [
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          },
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          },
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          },
          {
            name: 'Lucas Sena',
            photo: 'SL',
            likes: 1,
            date: '2020-11-20',
            body: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'
          }
        ]
      }
    }
  }
}
</script>

<style>
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
.btn-acompanhar {
    background-color: #66f2d5;
    transition: .4s;
}

.btn-acompanhar:hover {
    box-shadow: inset 1px 1px 0 1px  #00b08c;
    background-color: #00b08c;
    border: 0.5px solid #00b08c;
    color: white;
}
.icon-photo-message{
    min-width: 80px;
    max-width: 85px;
    min-height: 80px;
    max-width: 85px;
    padding: 0;
    margin: 0;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:  #FEF0F0;
    border-radius: 1000px;
    box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);
    font-size: 30px;
    font-weight: 700;
    color: rgb(100, 100, 100);
}
#messages-page{
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    height: 754px;
    width: 100%;
    align-items: center;
}
.h-title{
    padding-left: 14px;
    display: flex;
    flex-direction: row;
    justify-content: justify;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
}
.h-name{
    padding-left: 14px;
    display: flex;
    flex-direction: row;
    justify-content: justify;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    color: rgb(100, 100, 100);
}
div.header-messages-main{
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
}
div.header-title-and-btn{
    width: 100%;
}
#messages-container{
    width: 980px;
    margin-top: 10px;
}
.column{
    display: flex;
    flex-direction: column;
}

.row{
    display: flex;
    flex-direction: row;
}
.header-messages{
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
    justify-content: start;
    align-items: center;
}
.header-title{
    width: 100%;
    justify-content: space-between;
}
.tags{
    padding: 5px 0px 5px 0px ;
    margin: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
}
i.far{
    font-size: 18px;
}
.details-content{
    margin: 0;
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
div.description-message{
    width: 100%;
    background-color: #FDF4F4;
    display: flex;
    padding: 15px;
    font-size: 14px;
    text-align: left;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
}
</style>
