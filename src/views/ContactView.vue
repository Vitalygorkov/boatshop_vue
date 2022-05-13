<template>
<div class="form_box">
        <h2>Оставьте свои контакты и пожелания для покупки </h2>
    <h2>с помощью формы снизу и мы обязательно вам перезвоним!</h2>
<form class="form_contact">
<label for="fname">Ваше имя:</label><br>
<input type="text" name="name" ><br>
<label for="fname">Телефон:</label><br>
<input type="text" name="phone" ><br>
<label for="fname">Email:</label><br>
<input type="text" name="email" ><br>
<input type="submit">
</form>
</div>
</template>


<script>
export default {
    data() {
        return {
            showForm: true,
        }
    },
    props: ['title', 'content'],
    methods: {

    },
}


</script>
<style scoped>
.form_box{
    padding: 20px;
}
</style>