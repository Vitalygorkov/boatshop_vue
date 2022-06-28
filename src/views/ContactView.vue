<template>
<div class="form_box">
        <h2>Оставьте свои контакты и пожелания для покупки </h2>
    <h2>с помощью формы снизу и мы обязательно вам перезвоним!</h2>
<form v-on:submit.prevent class="form_contact">
<label for="fname">Ваше имя:</label><br>
<input v-model="first_name" type="text" name="name" ><br>
<input v-model="last_name" type="hidden" name="last_name">
<label for="fname">Телефон:</label><br>
<input v-model="phone" type="text" name="phone" ><br>
<label for="fname">Город:</label><br>
<input v-model="locality" type="text" name="city" ><br>
<label for="fname">Email:</label><br>
<input v-model="email" type="text" name="email" ><br>
<label for="fname">Сообщение:</label><br>
<textarea v-model="message" rows="10" cols="22" name="text"></textarea><br>
<input v-on:click="checkform()" type="submit">
</form>
  <p v-if="errors.length">
    <b>Пожалуйста исправьте указанные ошибки:</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
<!-- n: {{frm_dat}} text -->
</div>

</template>


<script>
export default {
    data() {
        return {
            showForm: true,
            errors: [],
            first_name: null,
            last_name: "",
            phone: null,
            locality: null,
            email: null,
            message: "Напишите дополнительную информацию и пожелания к заказу",

        }
    },
    props: ['title', 'content'],
    methods: {
        checkform(){
            console.log('функция отправки начало')
            if (this.first_name && this.phone && this.email && this.message){
                console.log('функция иф отправки начало')
                this.click_submit()
                console.log('функция иф отправки окончание')
                return true;
            }

            this.errors = [];

            if (!this.first_name){
                this.errors.push('Требуется указать имя.');
            }
            if (!this.phone){
                this.errors.push('Требуется указать телефон.');
            }
            if (!this.email){
                this.errors.push('Требуется указать email.');
            } 
            if (!this.message){
                this.errors.push('Требуется указать комментарий к заказу.');
            }
            // this.$router.go(0);

        },
        async click_submit(){
            let frm_dat = {
                first_name: this.first_name,
                last_name: this.last_name,
                phone: this.phone,
                locality: this.locality,
                email: this.email,
                message: this.message,
            }
            console.log(frm_dat)
            let response = await fetch('https://vitgo.ru/api/v1/contactform/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(frm_dat)
            });

            let result = await response.json();
            if(response.ok){
                alert("Заявка успешно отправлена: " + result.message);
            }else{
                alert("Заявка НЕ отправлена, попробуйте обновить страницу : " + result.message);
            }
            


        }

    },
}


</script>
<style scoped>
.form_box{
    padding: 20px;
}
</style>