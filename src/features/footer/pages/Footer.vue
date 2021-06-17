<template>
<footer id="footer_main">
  <div class="footer">
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-6 mt-md-0 mt-3 footer-col">
         <p class="text-justify"><span id="footer-title">Learning English</span></p>
          <p class="text-left">

            <span id="footer-content"> It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </span>
          </p>
        </div>
        <div class="col-md-3 mb-md-0 mb-3">
          <p class="text-left foo-subtitle">Links </p>
           <p class="text-left"><a href="#" class="foo-link">Home</a></p>
           <p class="text-left"><a href="#" class="foo-link">Sobre</a></p>
           <p class="text-left"><a href="#" class="foo-link">FAQ</a></p>

        </div>
        <div class="col-md-3 mb-md-0 mb-3">
          <p class="text-left foo-subtitle">Contato </p>
          <p class="text-left">
            <span class="glyphicon glyphicon-envelope"  style="padding-right:2px;" aria-hidden="true">
            </span>
            suport.le@mail.com
          </p>
          <p class="text-left">
            <span class="glyphicon glyphicon-earphone"  style="padding-right:2px;" aria-hidden="true">
            </span>
            +55 (88) 12345-6789
          </p>
          <p class="text-left">
            <span class="glyphicon glyphicon-map-marker"  style="padding-right:2px;" aria-hidden="true">
            </span>
            IFCE - Campus Aracati-Ce
          </p>
        </div>

    </div>
    </div>
      <div class="copyright">
      <div class="row d-flex align-items-center">
      <div class="col-md-6 col-lg-8">
        <p class="text-left text-md-left">COPYRIGHT &copy; BY LEARNING ENGLISH CORPORATION.
        </p>
        <p class="text-left text-md-left">
            2020 - ALL RIGHTS RESERVED.
        </p>
      </div>
      <div class="col-md-6 col-lg-4 ml-lg-0">
      <div class="text-right text-md-right">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
                <i class="fa fa-facebook-official"></i>
            </li>
            <li class="list-inline-item">
                <i class="fa fa-twitter"></i>
            </li>
            <li class="list-inline-item">
                <i class="fa fa-linkedin"></i>
            </li>
            <li class="list-inline-item">
                <i class="fa fa-instagram"></i>
            </li>
            <li class="list-inline-item">
                <i class="fa fa-google"></i>
            </li>
          </ul>
        </div>

      </div>

    </div>
  </div>
</div>
</footer>
</template>
<script>
export default {
  name: 'Footer'
}
</script>

<style>
#footer_main{
  /*background-color: #313a45;
  color: rgba(255, 255, 255, 0.53);
*/
  background-color: #45526e;
  color: #dfe3ea;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', monospace;
}
.footer{
  padding: 20px 0px 0px 0px;
  max-width: 1000px;
}
span#footer-title{
  font-family: 'Poppins', monospace;
  font-size: 22px;
  color: #dfe3ea;
}
span#footer-title:hover{
  color:#7b68ee;
}
span#footer-content{
  font-size: 15px;
  font-weight: 200;
}
.footer-col{
  padding-bottom: 20px;
}
.copyright{
  border-top: 1px solid rgba(255, 255, 255, 0.53);
  padding: 10px;
  font-size: 12px;
  font-weight: 200;
}
.foo-subtitle{
  font-size: 18px;
  font-weight: 500;
}
.foo-link{
  font-size: 14px;
  text-decoration: none;
  color: #dfe3ea;
}
.foo-link:link{
  text-decoration: none;
  color: #dfe3ea;
}
.foo-link:visited {color: #dfe3ea;}  /* Mouse over link */
.foo-link:active {color: #dfe3ea;}

.foo-link:hover{
  color: #7b68ee;
}

.list-inline-item{
  margin: 5px;
  height: 40px;
  width: 40px;
  padding-top: 8px;
  border-radius: 50%;
  font-size: 18px;
  text-align: center;
  background: transparent;
  box-shadow: 0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15);

}
.fa {
  font-family: 'FontAwesome' !Important;
  font-weight: 200 !Important;
}
.list-inline-item:hover{
  color: #7b68ee;

}
</style>
