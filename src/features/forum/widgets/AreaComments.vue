<template>
    <div class="area-coments">
        <div class="comments-main">
            <div class="comments-title row">
                <div class="comment-title">{{data.comments}} Comentário(s)</div>
                <div class="comment-filtro">
                    <select name="filtro" id="filtro" class="form-control">
                        <option value="">Mais recentes</option>
                        <option value="">Mais antigos</option>
                        <option value="">Mais curtidos</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="coments">
        <item-comment v-for="(i,index) in data.list_coments" :key="index" :data="i"></item-comment>
        </div>
    </div>
</template>

<script>
import ItemComment from '@/features/forum/widgets/ItemComment'

export default {
  name: 'AreaComments',
  props: {data: {type: Object | Map | Array, default: {}}},
  components: {
    ItemComment
  }
}
</script>

<style>
.area-coments{
    display: flex;
    flex-direction: column;
}
.column{
    display: flex;
    flex-direction: column;
}
.row{
    display: flex;
    flex-direction: row;
}
.sizedbox{
    width: 10px;
}
.comments-title{
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;
    justify-content: start;
    align-items: center;
}
.comment-title{
    width: 100%;
    display: flex;
    justify-content: start;
}
.comment-filtro{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
}
.comments-main{
    padding-bottom: 20px;
}
#filtro{
    width: 180px;
}

</style>
