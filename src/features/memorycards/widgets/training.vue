<template>
<div class="body-messages">
    <ul class="messages">
        <li v-for="(item, index) in allCards" :key="index">
            <trainingcard :data="item"></trainingcard>
        </li>
    </ul>
</div>
</template>

<script>
import trainingcard from '@/features/memorycards/widgets/trainingcard'
export default {
  name: 'training',
  components: {
    trainingcard
  },
  data () {
    return {
      allCards: []
    }
  },
  created () {
    this.$request.users.findById(this.$store.state.auth.user).then(userRes => {
      this.$request.memoryCards.findById(`user/${userRes._id}/date/${new Date().getTime()}`).then(res => {
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
