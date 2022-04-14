<template>
<div>
    <div class="product-display-lodki">
        <!-- <div v-if="product.sale" class="sale_block">
            СКИДКА {{ product.sale }} %
        </div> -->
        <!-- <div v-if="product.image" class="prod-display-lodki-inside-img">

            <a href="{{ product.slug }}"><img class="product-display-img" src="#"></a>
        </div> -->
        <div class="product-lodki-text1">
            <div class="cart-product-name">
                лодка
            <a :href="product.category+'/'+product.slug"><h2>{{ product.name }}</h2></a>
            </div>
            <!-- <details class="cart_product"><summary class="all_characteristics">
            <div class="text-characteristics-container">
            <div class="text-characteristics-name">Длина:</div>
            <div class="text-characteristics">{{ product.length }} см</div>
            </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Ширина:</div>
            <div class="text-characteristics">{{ product.width }} см</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Диаметр баллонов:</div>
            <div class="text-characteristics">{{ product.cylinder_diameter }} см</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Вес лодки:</div>
            <div class="text-characteristics">{{ product.boat_weight }} кг</div>
                </div>
                <div class="text-characteristics-container">
                <center><font style="color:blue">ПОКАЗАТЬ ХАРАКТЕРИСТИКИ:</font></center>
                </div>
            </summary>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Производитель:</div>
            <div class="text-characteristics">{{ product.manufacturer }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Тип дна:</div>
            <div class="text-characteristics">{{ product.category }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Длина кокпита (см):</div>
            <div class="text-characteristics">{{ product.cockpit_length }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Ширина кокпита (см):</div>
            <div class="text-characteristics">{{ product.cockpit_width }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Плотность ткани борта (г/м²):</div>
            <div class="text-characteristics">{{ product.fabric_thickness_side }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Плотность ткани дна (г/м²):</div>
            <div class="text-characteristics">{{ product.fabric_thickness_bottom }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Кол-во надувных отсеков:</div>
            <div class="text-characteristics">{{ product.inflatable_compartments }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Грузоподъемность (кг):</div>
            <div class="text-characteristics">{{ product.load_capacity }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Пассожировместимость (чел):</div>
            <div class="text-characteristics">{{ product.passenger_capacity }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Макс мощность мотора (лс):</div>
            <div class="text-characteristics">{{ product.maximum_motor_power }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Вес полного комплекта кг:</div>
            <div class="text-characteristics">{{ product.complete_set_weight }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Фальшборт:</div>
            <div class="text-characteristics">{{ product.bulwark }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Киль:</div>
            <div class="text-characteristics">{{ product.keel }}</div>
                </div>
                <div class="text-characteristics-container">
            <div class="text-characteristics-name">Габариты упаковки(Д*Ш*В):</div>
            <div class="text-characteristics">{{ product.upak }}</div>
                </div>
            </details>
        </div> -->

        <!-- <div class="price-sale-button-block">
            {% if product.sale != 0 %}
            <div class="prod-display-lodki-inside-price">
                Цена: <font size="5"> {{ product.get_sale }}</font> р.
            </div>
            <div class="prod-display-lodki-inside-price">
                <s><font color="#20B2AA">Цена: </font></s><font color="#20B2AA" size="5"><s>{{ product.price }}</s></font><font color="#20B2AA"><s> р.</s></font>
            </div>
            <div class="sale_block">
                -{{ product.sale }} %
            </div>

            {% else %}
            <div class="prod-display-lodki-inside-price">
                <p>Цена: <font size="5">{{ product.price }}</font> р.</p>
            </div>
            {% endif %}

            <div class="prod-display-lodki-inside-price">
                <form action="/contacts/">
                <input class="button-search" type="submit" value="Заказать">
                </form>
            </div> -->
        </div>
    </div>
</div>    
</template>

<script>
export default {
    props: ['product'],
}


</script>
<style>

</style>