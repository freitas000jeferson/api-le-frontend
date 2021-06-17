<template>
    <div>

    </div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    this.$store.dispatch('logout').then(res => {
      this.$router.push('/')
    })
  }
}
</script>
