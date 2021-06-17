<template>
<div class="login">
    <nav-bar></nav-bar>
    <div class="content-login">
        <header class="login">
            <h1 class="title-login">Bem-vindo de volta!</h1>
            <h3 class="title-login">Learn English</h3>
        </header>
        <div>
            <form>
                <div class="form-group">
                    <label id="labelForm">Email</label>
                    <input type="email" v-model="email" class="form-control" id="" placeholder="Digite seu email">
                </div>
                <div class="form-group">
                    <label id="labelForm">Senha</label>
                    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
                </div>
                <button id="button" type="submit" class="btn btn-secondary" @click.stop.prevent='login'>Entrar</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '@/features/navbar/pages/NavBar'

export default {
  name: 'Login',
  components: {
    NavBar
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    toForum: function () {
      this.$router.push('/forum')
    },
    login: function () {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      this.password = ''
      this.toForum()
    },
    typeprofiles: function () {
      console.log('Passou')
      this.$request.typeprofiles.findAll().then(res => {
        console.log('aqui deu bom')
        console.log(res)
      })
    }
  }
}
</script>

<style src="../style.css" scoped></style>
