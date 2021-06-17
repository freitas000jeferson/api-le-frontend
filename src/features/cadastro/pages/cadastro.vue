<template>
    <div class="login">
        <nav-bar></nav-bar>
        <div class="content-login">
            <header class="login">
                <h1 class="title-login">Faça seu Cadastro!</h1>
            </header>
            <div>
                <form>
                    <div class="form-group">
                        <label id="labelForm" >Nome</label>
                        <input type="text" class="form-control"  placeholder="Digite seu nome" v-model="user.name">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Email</label>
                        <input type="email" class="form-control" placeholder="Digite seu email" v-model="user.email">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Senha</label>
                        <input type="password" class="form-control" placeholder="Digite sua senha" v-model="password">
                    </div>
                    <div class="form-group">
                        <label id="labelForm" >Confirmar senha</label>
                        <input type="password" class="form-control"  placeholder="Repita sua senha" v-model="confirmPassword">
                    </div>
                   <div id="button" type="submit" class="btn btn-secondary" @click.stop.prevent='cadastrar'>Cadastrar</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/features/navbar/pages/NavBar'

export default {
  name: 'Cadastro',
  components: {
    NavBar
  },
  data () {
    return {
      password: '',
      confirmPassword: '',
      user: {
        email: '',
        password: '',
        name: '',
        avatar: '',
        id_type_profile: '5f7b7ae23726b040e023dd6a'
      }
    }
  },
  methods: {
    cadastrar: function () {
      if (this.user.email !== '' && this.user.name !== '') {
        if (this.password !== '' && this.password === this.confirmPassword) {
          this.user.password = this.password
          this.user.avatar = this.user.name[0].toUpperCase()
          this.$request.users.create(this.user).then(res => {
            this.$router.push('/login')
          })
        }
      }
    }
  }
}
</script>

<style src="../style.css" scoped></style>
