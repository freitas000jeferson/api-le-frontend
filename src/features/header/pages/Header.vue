<template>
<div id="header-main">
    <div class="background">
        <nav-bar></nav-bar>
        <div class="header">
            <div class="details">
                <div class="title"> What is Lorem Ipsum? </div>
                <div class="content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book.
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/features/navbar/pages/NavBar'

export default {
  name: 'Header',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
#header-main {
    display: flex;
    height: 650px;
    flex-direction: column;
    justify-content: start;
}
.background {
    box-sizing: border-box;
    background-image: url("./../../../assets/svg/bg_main_header.svg");
    background-size: 62%;
    background-repeat: no-repeat;
    background-position: start;
    width: 100%;
    height: 650px;
    display: flex;
    justify-content: center;
    /*width: 100%;
    height: 100%;
    -webkit-transform: translate(-22%, -50%);
    -ms-transform: translate(-22%, -50%);
    transform: translate(-22%, -50%);
    left: 50%;
    top: 50%;
    */
}
.header{
    min-width:  980px;
    margin-top: 70px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: end;
    align-items: center;
}
.details{
    min-width: 300px;
    max-width: 480px;
    padding: 20px;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    color: rgb(90, 90, 90);
}
.title{
    font-size: 40px;
    font-weight: 900;
}
.content{
    margin-top: 10px;
    font-size: 22px;
    font-weight: 400;
    color: rgb(110, 110, 110);
}
</style>
