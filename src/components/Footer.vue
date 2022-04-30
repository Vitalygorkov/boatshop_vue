<template>
<div>
<footer id="footer" class="footer">
    <div class="footer-container">
        <div class="footer1">
            <ul class="footer-info"> 
                <b>ИНФОРМАЦИЯ:</b>
                <li>
                    <a href="#" class="header-link">Доставка и оплата</a>
                </li>
                <li>
                    <a href="#" class="header-link">Как купить </a>
                </li>
                <li>
                        <a href="#" class="header-link">Скидки</a>
                </li>
                <li>
                    <a href="#" class="header-link">Как выбрать лодку</a>
                </li>
                <li>
                    <a href="#" class="header-link">Услуги</a>
                </li>
            </ul>
        </div> 
        <div class="footer2">
            <ul class="footer-contacts"> 
                <b>КОНТАКТЫ:</b>
                <div class="phone-footer">
                    <a href="tel:+79039274690">
                    <img src="../assets/img/phone-call.png"></a>
                    <a href="tel:+79039274690">
                        <h4>+79039274690</h4>
                    </a>
                </div>
                <li>
                    Email:9039274690@mail.ru
                </li>
                <li>
                    Адрес: город Омск
                    Доставка по всей территории России
                </li>
            </ul>
        </div> 
        <div class="footer3">
            <ul class="footer-zvonok"> 
                <b>Бесплатный звонок:</b>
            </ul>
            <div class="obratn-zvonok">
                <a href="#">ОБРАТНЫЙ ЗВОНОК</a>
            </div>
        </div>
        <div class="footer4">
                <b>Мы в соцсетях:</b><br>
                <div class="seti-icons">
                    <div>
                        <a href="#">
                            <img src="../assets/img/whatsapp.png">
                        </a>
                    </div>
                    <div>
                    <a href="#" >
                        <img src="../assets/img/youtube.png">
                    </a>
                    </div>
                    <div>
                        <a href="#">
                            <img src="../assets/img/vk.png">
                        </a>
                    </div>
                </div>
        </div>    
    </div>

</footer>

</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
		data() {
			return {			
			}
		},

    computed: {
    ...mapGetters(['GET_CATEGORIES',]),

    },

	methods: { 
	...mapActions(['']),

	},

}


</script>
<style scoped>
@media all and (max-width: 720px) {
    .footer3{
		display: none;
	}
}
.footer-container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #c2f3f9;
  }
  .footer-container ul{
    list-style-type: none;
  }
  .footer1{
    display: flex;
  }
  .footer1 a:hover{
    color: #6964f7;
  }
  .footer-info a{
    text-decoration: none;
    color: #000;
  }
  .footer2{
    display: flex;
  }
  .footer2 a:hover{
    color: #6964f7;
  }
  .footer-contacts a{
    text-decoration: none;
    color: #000;
  }
  .phone-footer {
    display: flex;
    flex-direction: row;
    justify-content: left;
    max-height: 30px;
    align-items: center;
  }
  .phone-footer:hover{
    color: #5650f6;
  }
    
.phone-footer img {
    height: 15px;
    opacity: 50%;
}
.obratn-zvonok{
  text-decoration: none;
  display: inline-block;
  padding: 15px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  box-shadow: 0 0 40px 40px #fbfefe inset, 0 0 0 0 #f8fdfe;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  color: rgb(255, 255, 255);
  transition: .15s ease-in-out;
}
.obratn-zvonok:hover {
  box-shadow: 0 0 10px 0 #fefbfb inset, 0 0 10px 4px #fffcfc;
  color: #fefefe;
}
.obratn-zvonok a{
  text-decoration: none;
  color: #000;
}
.footer4{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
}
.footer-seti{
  display: flex;
  flex-direction: column;

}
.seti-icons{
display: flex;
flex-direction: row;
justify-content: space-between;
}

</style>