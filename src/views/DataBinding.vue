<template>
    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
        <input type="text" v-model="valueModel" />
        <input type="number" v-model.number="numberModel" />
        <textarea v-model="message"></textarea>
        <label>
            <input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{ checked }}
        </label>
        <br>
        <div>
            <label>
                <input type="checkbox" value="서울" v-model="checked2"> 서울
            </label>
            <label>
                <input type="checkbox" value="부산" v-model="checked2"> 부산
            </label>
            <label>
                <input type="checkbox" value="대구" v-model="checked2"> 대구
            </label>
        </div>
        <br>
        <span>체크한 지역: {{ checked2 }} </span>
        <br>
        <div>
            <label>
                <input type="radio" v-bind:value="radioValue1" v-model="picked"> 서울
            </label>
             <label>
                <input type="radio" v-bind:value="radioValue2" v-model="picked"> 부산
            </label>
             <label>
                <input type="radio" v-bind:value="radioValue3" v-model="picked"> 대구
            </label>
        </div>

        <div>
            <input type="text" v-model="textValue" />
            <button type="button" v-bind:disabled="textValue==''">Click</button> <!--  -->
            <img :src="imgSrc" alt="" />
        </div>

        <!-- <div class="container" v-bind:class="{
            'active': isActive, 'text-red': hasError
        }"> -->
         <div class="container" v-bind:class="[activeClass, errorClass]">
            Class Binding
        </div>

        <div v-bind:style="styleObject">
            인라인 스타일 바인딩
        </div>


        <table>
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(product, index) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                </tr>
            </tbody>
        </table>

        <h1 v-if="bRender">bRender이 true이면 보이게 됩니다.</h1>
        <h1 v-else>bRender이 false면 보이게 됩니다.</h1>

        <h1 v-if="type === 'A'">A</h1>
        <h1 v-else-if="type === 'B'">B</h1>
        <h1 v-else>Other</h1>

        <!-- v-if와 v-show의 차이는 v-if는 조건안맞으면 태그가 아예 렌더링 되지않음. v-show는 display:none이 됨. (즉 렌더링은 된다) -->
        <h1 v-show="bShow">bShow가 true면 보인다</h1>
    </div>
</template>

<style scoped>
    container {
        width: 100%;
        height: 200px;
    }
    .active {
        background-color: yellow;
        font-weight: bold;
    }
    .text-red {
        color: red;
    }
</style>

<script>
export default {
    name:'',
    components: {},
    data(){
        return {
            title:'World',
            htmlString: "<p style='color:red'>This is a red String</p>",
            valueModel: "South Korea",
            numberModel: 3,
            message: "여러 줄을 입력할 수 있는 textarea 입니다.",
            checked: true,
            checked2: [],
            picked: '',
            radioValue1: '서울',
            radioValue2: '부산',
            radioValue3: '대구',

            imgSrc: "https://kr.vuejs.org/images/logo.png",

            textValue: "",
            isActive: true,
            hasError: false,
            activeClass: "active",
            errorClass: "text-red",
            
            styleObject: {
                color: 'red',
                fontSize: '13px'
            },

            productList: [
                {product_name: "키보드", "price": 25000, category:"노트북/테블릿", delivery_price: 5000},
                {product_name: "무선마우스", "price": 12000, category:"노트북/테블릿", delivery_price: 5000},
            ],

            bRender: true,
            type: "A",
            bShow: false
        };
    },
    
    beforeCreate() {}, 
    created() {}, 
    beforeMount() {}, 
    updated() {}, 
    beforeUnmount(){}, 
    unmounted() {}, 
    methods: {}
}
</script>