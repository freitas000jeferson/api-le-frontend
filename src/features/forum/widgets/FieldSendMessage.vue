<template>
  <div class="field-send-main">
        <div class="send-message">
            <textarea name="send-message" id="send-message" cols="30" rows="5"></textarea>
            <div class="row buttons-message">
                <div class="btn-menu btn-send">Publicar</div>
                <div class="sizedbox"></div>
                <div class="btn-menu btn-cancel">Cancelar</div>
            </div>
        </div>

  </div>
</template>

<script>
export default {
  name: 'FieldSendMessage'
}
</script>

<style>
.field-send-main{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
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
.send-message{
    display: flex;
    flex-direction: column;
    width: 100%;
}
textarea#send-message{
    width: 100%;
    min-height: 120px;
    padding: 10px;
    max-width: 100%;
    min-width: 100%;
    border: 1px solid rgb(100, 100, 100);
}
.buttons-message{
    padding: 0;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(100, 100, 100);
}
.btn-send {
    /*background-color: #7b68ee;*/
    background-color: #fff;
    transition: .4s;
}
.btn-send:hover {
    box-shadow: inset 1px 1px 0 1px #5F48EA;
    background-color: #5F48EA;
    border: 0.5px solid #5F48EA;
    color: white;
}
.btn-cancel {
    background-color: #ffe54c;
    transition: .4s;
}
.btn-cancel:hover {
    box-shadow: inset 1px 1px 0 1px #f70;
    background-color: #f70;
    border: 0.5px solid #f70;
    color: white;
}
</style>
