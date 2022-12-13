<template>
<div>
    <div class="article__card">
        <div class="image-title">
            <div v-if="post.photo" class="card__image"><img :src="GET_MEDIA_URL+post.photo.split('media')[1]" alt=""></div>
            
            <router-link :to="{ name: 'post', params:{ id: post.id} }">
            <h2 class="card-title__article">{{post.title}}</h2>
            </router-link>
        </div>
        <div class="card-text__article">
            <p>{{post.short_description}}</p>
        </div>
        <div class="card-footer__article">
            <div class="article__date">{{post.created_ad.slice(0,10)}}</div>
            <div class="article__author">Автор: {{post.author_name}}</div>
            <div class="article__read"><img src="../assets/img/icon-preview.png" alt="">{{post.views_simple}}</div>
        </div>
 
    </div>
</div>
    
</template>
    
    
<script>

import {mapGetters, mapActions} from 'vuex'

export default {
    // name: 'PostCard',
    data() {
        return {
            // blog_categories: [], 
            // post_data: {
            //         "title": "Статья Фрегат 420 Air",
            //         "slug": "ssilka-na-statiu",
            //         "author": "Автор",
            //         "content": "<p>Фрегат 420 Air&nbsp;&mdash; это беспайольная моторная лодка ПВХ с&nbsp;надувным дном низкого давления,&nbsp;<strong>длиной 4,20&nbsp;м</strong>&nbsp;под мотор до&nbsp;30 л. с., рассчитанная на&nbsp;8 пассажиров со&nbsp;снаряжением. Фрегат Air&nbsp;&mdash; серия надувных моторных лодок с&nbsp;НДНД, надежных и&nbsp;прочных, с&nbsp;отличной маневренностью и&nbsp;управляемостью. Они предназначены для рыбалки, охоты и&nbsp;активного отдыха на&nbsp;воде.</p>\r\n\r\n<p>Благодаря жестко вклеенному надувному килевому дну в&nbsp;лодках Фрегат Air отсутствует пайол из&nbsp;фанеры, в&nbsp;отличие от&nbsp;лодок серий EK, C, F, PRO. За&nbsp;счет этого лодки этой серии имеют значительно меньший вес при одинаковой длине.<br />\r\nПодготовка лодки серии Air к&nbsp;спуску на&nbsp;воду занимает 10&nbsp;минут, достаточно накачать отсеки до&nbsp;рабочего давления. Сборка такой лодки заключается в&nbsp;открытии клапанов и&nbsp;простом сворачивании в&nbsp;сумку.</p>\r\n\r\n<blockquote><strong>Важно</strong>! Моторные лодки Фрегат не&nbsp;требуют регистрации в&nbsp;ГИМС при условии эксплуатации с&nbsp;мотором до&nbsp;10,88 л.с.</blockquote>\r\n\r\n<h2>Особенности модели</h2>\r\n\r\n<h3>U-образный&nbsp;баллон с&nbsp;перегородками, вклеенным транцем и&nbsp;НДНД</h3>\r\n\r\n<p>Корпус 420 Air&nbsp;л/т&nbsp;состоит из&nbsp;&laquo;U&raquo;-образного баллона, разделенного на&nbsp;3 независимых отсека внутренними перегородками и&nbsp;замкнутого в&nbsp;корме вклеенным жестким транцем. Снизу к&nbsp;корпусу лодки приклеено профилированное внутренними перегородками надувное&nbsp;V-образное&nbsp;дно низкого давления, снабженное предохранительным клапаном.</p>\r\n\r\n<p>На&nbsp;носу и&nbsp;корме лодки установлены ручки, служащие для ее&nbsp;переноски в&nbsp;рабочем состоянии.<br />\r\nПо&nbsp;бортам расположен леерный пояс, обеспечивающий страховку пассажиров.</p>\r\n\r\n<h3>НДНД&nbsp;&mdash; надувное днище низкого давления</h3>\r\n\r\n<p>У&nbsp;лодок Фрегат серии Air надувное дно низкого давления. Конструкция надувного&nbsp;V-образного&nbsp;дна образована комплектом продольных переборок и&nbsp;вклеена в&nbsp;корпус надувной лодки. Благодаря тщательно распределенному по&nbsp;длине надувного дна углу килеватости корпус лодок Фрегат серии &laquo;Air&raquo; сглаживает удары при движении лодки по&nbsp;волне, обеспечивая комфортный, мягкий ход.</p>\r\n\r\n<p>Днище НДНД имеет необходимую жесткость и&nbsp;обеспечивает высокие скоростные характеристики, позволяя моторной лодке выходить на&nbsp;глиссирование с&nbsp;лодочным мотором малой мощности. Благодаря жестко вклеенному надувному килевому дну в&nbsp;надувных лодках серии Air пайол из&nbsp;фанеры не&nbsp;требуется. Беспайольные лодки этой серии имеют значительно меньший вес, чем классические пайольные.</p>\r\n\r\n<p>Надувное дно низкого давления в&nbsp;конструкции лодки обеспечивает большую грузоподъемность и&nbsp;вместимость в&nbsp;сочетании с&nbsp;легкой и&nbsp;компактной упаковкой, что очень удобно в&nbsp;эксплуатации и&nbsp;транспортировке.</p>\r\n\r\n<h3>Стравливающий клапан</h3>\r\n\r\n<p>В&nbsp;надувном дне лодки установлен специальный итальянский стравливающий клапан Bravo. Клапан обеспечивает защиту элементов надувного дна от&nbsp;повреждения избыточным давлением. Избыточное давление может возникать как при накачке, так и&nbsp;при движении лодки&nbsp;по&nbsp;сильным волнам.</p>\r\n\r\n<h3>Окончания баллонов</h3>\r\n\r\n<p>Окончания баллонов имеют специальную сферическую форму, что обеспечивает быстрый выход лодки на&nbsp;глиссирование. Сферическая форма баллонов позволила увеличить пространство кокпита за&nbsp;счет передвижения транца к&nbsp;окончанию баллонов. Благодаря такой конструкции лодка имеет большую площадь кокпита по&nbsp;сравнению с&nbsp;аналогичными лодками с&nbsp;конусообразным окончанием баллонов.</p>\r\n\r\n<h3>Транец</h3>\r\n\r\n<p>Транец для установки лодочного мотора изготовлен из&nbsp;высококачественной водостойкой фанеры и&nbsp;жестко вклеен в&nbsp;баллон корпуса под углом.</p>\r\n\r\n<p>Косынки-брызгоотбойники&nbsp;на&nbsp;транце эффективно защищают внутреннее пространство лодки от&nbsp;попадания воды.<br />\r\nВысота транца лодок Фрегат серии Air рассчитана на&nbsp;установку стандартного подвесного лодочного мотора с&nbsp;размером дейдвуда (ноги) S&nbsp;и&nbsp;составляет 381&nbsp;мм (15&Prime; дюймов).</p>\r\n\r\n<h3>Привальный брус</h3>\r\n\r\n<p>Установленный привальный брус не&nbsp;только защищает корпус, но&nbsp;и&nbsp;выполняет функцию брызгоотбойника.</p>\r\n\r\n<h3>Сливной клапан</h3>\r\n\r\n<p>Лодки оснащены сливным клапаном, который позволяет осушать палубу на&nbsp;ходу.</p>\r\n\r\n<h3>Крепление сидений (банок)</h3>\r\n\r\n<p>Фрегат 420 Air комплектуется системой крепления сидений(банок) ликпаз/ликтрос&nbsp;- 1160*300*21 мм (размер банки).</p>\r\n\r\n<p>Система крепления ликпаз/ликтрос позволяет перемещать банки по&nbsp;длине кокпита в&nbsp;зависимости от&nbsp;условий эксплуатации, сохраняя при этом надежность их&nbsp;фиксации.</p>\r\n\r\n<h3>Весла</h3>\r\n\r\n<p>Лодка комплектуется легкими алюминиевыми веслами со&nbsp;съемной лопастью. Весла устанавливаются в&nbsp;эффективные поворотные уключины, значительно облегчающие процесс гребли.</p>\r\n\r\n<h2>Комплектация и&nbsp;упаковка</h2>\r\n\r\n<p>Лодка, весла, сумка, паспорт, ножная помпа (насос), ремкомплект. В&nbsp;сложенном состоянии надувная лодка перевозится в&nbsp;одной упаковочной сумке.</p>\r\n\r\n<table>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Длина лодки (см)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>420</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Ширина лодки (см)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>197</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Вес лодки (кг)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>58,2</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Диаметр борта (см)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>52</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Кол-во герметичных отсеков</p>\r\n\t\t\t</td>\r\n\t\t\t<td>4</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Грузоподъемность (кг)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>950</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Пассажировместимость</p>\r\n\t\t\t</td>\r\n\t\t\t<td>8</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Плотность ткани ПВХ борта (г/м2)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>950</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Размеры кокпита (см)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>323х93</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<p>Мощность мотора (л.с.)</p>\r\n\t\t\t</td>\r\n\t\t\t<td>30</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>"
            //     },
            
            }
    },
    props:{
      post: Object,
    },
    methods: {
        ...mapActions(['FETCH_BLOG_CATEGORIES']),
        // async straight_fetch_post(){
        //     console.log('прямой запрос неполного поста')
        //     const res = await fetch(
        //         `${this.GET_SERVER_URL}/posts/${post_id}`
        //     )
        //     console.log('прямой запрос неполного поста выполнен')
        //     const res = await res.json()
        //     console.log(res)
        //     return res

        // },

    },
    computed: {
        ...mapGetters(['GET_BLOG_CATEGORIES', 'GET_SERVER_URL', 'GET_MEDIA_URL']),
        // async computed_post () {
        //     console.log("начало computed categories_blog")
        //     this.blog_categories = await this.straight_fetch_blog_cate()
        //     // console.log(cat_obj)    
        //     console.log("начало computed categories_blog")
        //     return cat_obj
        // },
    },
    // created(){
        
    // },
    // mounted() {
    //     // this.FETCH_BLOG_CATEGORIES()
    //     console.log('mounted начало blogview')
    //     // this.blog_categories = [...this.GET_BLOG_CATEGORIES]
    //     document.title = `Блог магазина лодок пвх нептун 55`
    //     console.log('mounted')
    // },
    // watch: {
    //     // blog_categories(){
    //     //     сonsole.log('ВОТЧЕР blog_categories')
    //     // }
    //     // GET_BLOG_CATEGORIES(){
    //     //     console.log('вотчер геттера категорий блога')
    //     //     this.blog_categories = [...this.GET_BLOG_CATEGORIES]
    //     // },
    //     // FETCH_BLOG_CATEGORIES(){
    //     //     console.log('вотчер экшина категорий блога')
    //     //     this.blog_categories = [...this.GET_BLOG_CATEGORIES]
    //     // }
    // },

}


</script>
<style scoped>
*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
ul,
ol,
li {
    list-style: none;
}
img {
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: inherit;
    font-size: inherit;
}
html,
body {
    height: 100%;
    line-height: 2;
    font-size: 20px;
    color: #000;
    font-family: Montserrat;
    font-weight: 500;
}
.wrapper {
    min-height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
._container {
    width: 80%; /* дописал котя */
    max-width: 100vw;
    padding: 0px 15px;
    margin: 30px auto;
    box-sizing: content-box;
}
.article__card{
    display: flex;
    flex-direction: column;
    padding: 30px 0px;
    margin-bottom: 50px;
    align-items: center;
    background-color: rgba(210, 252, 255, 0.466);
    border-radius: 20px;
}
.article__card:hover {
    background-color: rgb(253, 253, 253);
    box-shadow: 0 0 40px #71fafae3;
}
.card__image{
    margin-bottom: 6px;
    max-width: 230px;
    object-fit: cover;
    display: flex;
    justify-content: center;
    vertical-align: center;
}
.image-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    text-align: center;
    vertical-align: center;
    width: 95%;
}
.card__image img{
    width: 70%;
    border-radius: 20px;
}
.card-title__article{
    line-height: 2;
    font-size: 26px;
    color: rgb(2, 38, 71);
    font-weight: 700;
    padding: 0px 20px ;
}
.card-text__article{
    max-height: 193px;
    overflow: hidden;
    padding: 0 60px;
    text-indent: 40px;
    text-align: justify;
}
.card-footer__article{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    height: 100%;
    line-height: 2;
    font-size: 18px;
    color: rgb(48, 47, 47);
    font-weight: 400;
    margin-top: 15px;
}
.article__read img{
    margin-right: 15px;
}
/*--------------------------------------медиа-------------------------------*/
@media (max-width: 1030px){
    ._container {
        width: 90%;
    }
    .card__image{
        width: 100%;
        margin-bottom: 35px;
    }
}
@media (max-width: 780px){
    ._container {
        width: 95%;
    }
    .card-text__article{
        max-height: 131px;
    }
}
@media (max-width: 430px){
    ._container {
        width: 95%;
    }
    .card__image{
        width: 100%;
        margin-bottom: 25px;
    }
    .card__image img{
        width: 90%;
    }
    .card-title__article{
        font-size: 20px;
        color: rgb(2, 38, 71);
        font-weight: 600;
    }
    .card-text__article{
        padding: 0 30px;
        text-indent: 20px;
        font-size: 18px;
        padding: 0 10px;
    }
    .card-footer__article{
        font-size: 16px;
        font-weight: 400;
        margin-top: 10px;
    }
    .article__read img{
        margin-right: 12px;
        width: 40%;
    }
    .card-text__article{
        max-height: 104px;
    }
}
@media (max-width: 330px){
    ._container {
        width: 98%;
    }
    .card__image{
        width: 100%;
        margin-bottom: 20px;
    }
    .card__image img{
        width: 95%;
    }
    .card-title__article{
        font-size: 16px;
        color: rgb(2, 38, 71);
        font-weight: 500;
    }
}


</style>