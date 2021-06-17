<template>
  <div id="tag-message">
    <div  v-for="(i,index) in data" :key="index"
    v-bind:class="'item-tag ' + css(index)"
    >{{i}}</div>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    data: {
      type: Array | String,
      default: ['OK']
    },
    cor: 'color_0',
    colors: [
      'color_0', 'color_1', 'color_2', 'color_3', 'color_4', 'color_5', 'color_6', 'color_7', 'color_8'
    ]
  },
  methods: {
    css: function (index) {
      return 'color_' + (index % 9)
    }
  }
}
</script>

<style>
#tag-message{
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
}
.item-tag{
    padding: 4px 15px 4px 15px;
    border-radius: 100px;
    color: white;
    margin-right: 4px;
    font-weight: 600;
    font-size: 12px;
}
.item-tag:hover{
    color: rgb(55, 55, 55);
    background-color: #fff;
}
.color_0{
    background-color: #5577FF;
    border: 2px solid #5577FF;
}

.color_1{
    background-color: #F46E6E;
    border: 2px solid #F46E6E;

}
.color_2{
    background-color: #6BC950;
    border: 2px solid #6BC950;
}
.color_3{
    background-color: #49CCF9;
    border: 2px solid #49CCF9;
}
.color_4{
    background-color: #FD71AF;
    border: 2px solid #FD71AF;
}
.color_5{
    background-color: #8A79F0;
    border: 2px solid #8A79F0;
}
.color_6{
    background-color: #00B888;
    border: 2px solid #00B888;
}
.color_7{
    background-color: #FFC800 ;
    border: 2px solid #FFC800;
}
.color_8{
    background-color: #B660DD;
    border: 2px solid #B660DD;
}

</style>
