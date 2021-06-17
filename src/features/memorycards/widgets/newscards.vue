<template>
  <div>
      <div>
            <form>
                <div class="form-group">
                    <label class="labelForm">Palavra</label>
                    <input type="text" class="form-control" id="" placeholder="Digite sua palavra " v-model="word">
                </div>
                <div class="">
                    <label class="labelForm">Descrição</label>
                    <textarea name="send-message" id="send-message" cols="10" rows="5" v-model="description"></textarea>
                </div>
                <div class="">
                    <label class="labelForm">Palavras</label>
                    <textarea name="send-message" id="send-message" cols="10" rows="5" v-model="m"></textarea>
                </div>
                <div class="">
                    <label class="labelForm">Frases</label>
                    <textarea name="send-message" id="send-message" cols="10" rows="5" v-model="f"></textarea>
                </div>

                <button id="button" type="submit" class="btn btn-secondary" @click.stop.prevent='save' >Salvar</button>
            </form>
        </div>
  </div>
</template>

<script>
export default {
  name: 'newscards',
  data () {
    return {
      word: '',
      m: '',
      meanings: ['pingente', 'brinco'],
      id_user: 'ObjectId(user01)',
      description: '',
      level: 1,
      date_view: '',
      step: 1,
      f: '',
      phrases: []
    }
  },
  methods: {
    save () {
      this.meanings = this.m.split('.')
      let phrasesAux = this.f.split('.')

      for (let p in phrasesAux) {
        this.phrases.push({
          text: phrasesAux[p],
          detail: ''
        })
      }
      let date = new Date().getTime()

      this.$request.users.findById(this.$store.state.auth.user).then(userRes => {
        let dados = {
          'phrases': this.phrases,
          'meanings': this.meanings,
          'word': this.word,
          'id_user': userRes._id,
          'description': this.description,
          'step': 1,
          'level': 1,
          'date_view': date
        }
        // console.log(dados)
        this.$request.memoryCards.create(dados).then(res => {
          console.log('aqui deu bom')
          console.log(res)
        })
      })
    }
  }
}
</script>

<style>
.form-group{
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
}
.labelForm{
  margin-right: 20px;
}
.send-message{
    display: flex;
    flex-direction: column;
    width: 80%;
}
textarea#send-message{
    width: 80%;
    min-height: 120px;
    padding: 10px;
    max-width: 100%;
    min-width: 100%;
    border: 1px solid rgb(100, 100, 100);
}
</style>
