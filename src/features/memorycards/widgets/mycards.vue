<template>
<div class="body-messages">
    <ul class="messages">
        <li v-for="(item, index) in allCards" :key="index">
            <itemcard :data="item"></itemcard>
        </li>
    </ul>
</div>
</template>

<script>
import itemcard from '@/features/memorycards/widgets/itemcard'
export default {
  name: 'mycards',
  components: {
    itemcard
  },
  data () {
    return {
      allCards: []
    }
  },
  created () {
    this.$request.users.findById(this.$store.state.auth.user).then(userRes => {
      this.$request.memoryCards.findById(`user/${userRes._id}`).then(res => {
        console.log('aqui deu bom')
        console.log(res)
        this.allCards = res.data
      })
    })
  }
}
</script>

<style>

</style>
