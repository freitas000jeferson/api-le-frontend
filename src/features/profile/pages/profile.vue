<template>
<div>
  <NavBarProfile></NavBarProfile>
  <div class="profile">
      <div class="content-login">
          <header class="profile">
              <div class="icon-photo-message">
                {{data.user.photo}}
              </div>
              <div class="nome-usuario">
                <div class="h-name">{{data.user.name}}</div>
              </div>
          </header>
          <div>
              <form>
                  <div class="form-group">
                      <label id="labelForm">Email</label>
                      <input type="email" v-model="data.user.email" class="form-control" id="" placeholder="Digite seu email">
                  </div>
                  <div class="form-group">
                      <label id="labelForm">Senha</label>
                      <input type="password" v-model="data.user.password" class="form-control" id="exampleInputPassword1" placeholder="Digite sua senha">
                  </div>
              </form>
          </div>
          <button id="button" type="submit" class="btn btn-secondary" @click.stop.prevent='login'>Atualizar</button>
      </div>
  </div>
</div>
</template>

<script>
import NavBar from '@/features/navbar/pages/NavBar'
import NavBarProfile from '@/features/navbar/pages/NavBarProfile'
import Footer from '@/features/footer/pages/Footer'

export default {
  name: 'Profile',
  components: {
    NavBar,
    NavBarProfile,
    Footer
  },
  data () {
    return {
      data: {
        user: {
          name: 'Matheus Ferreira',
          photo: 'MF',
          email: 'matheus@gmail.com',
          password: 'test1234'
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style src="../style.css" scoped></style>
