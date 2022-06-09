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
<p><textarea v-model="message" rows="10" cols="22" name="text"></textarea></p>
<input v-on:click="click_submit()" type="submit">
</form>
<!-- n: {{frm_dat}} text -->
</div>

</template>


<script>
export default {
    data() {
        return {
            showForm: true,
            first_name: '',
            last_name: "",
            phone: "",
            locality: "",
            email: "",
            message: "Напишите дополнительную информацию и пожелания к заказу",

        }
    },
    props: ['title', 'content'],
    methods: {
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
            alert("Заявка успешно отправлена: " + result.message);


        }

    },
}


</script>
<style scoped>
.form_box{
    padding: 20px;
}
</style>