var main = new Vue({
    el:"#main",
    data:{
        posts:[
            {picture:"images/1.jpg", user:{name:"Cody", picture:"images/profile.jpg"}, description:"Dando una vuelta en bicicleta en la playa!", comments:0, likes:0, emojis:'<i class="em em-bicyclist" aria-role="presentation" aria-label="BICYCLIST"></i><i class="em em-ocean" aria-role="presentation" aria-label="WATER WAVE"></i>'},
            {picture:"images/2.jpg", user:{name:"Cody", picture:"images/profile.jpg"}, description:"Construyendo la casa antes de que aparezcan los creepers", comments:0, likes:0, emojis:'<i class="em em-crossed_swords" aria-role="presentation" aria-label=""></i><i class="em em-video_game" aria-role="presentation" aria-label="VIDEO GAME"></i>'},
            {picture:"images/3.jpg", user:{name:"Cody", picture:"images/profile.jpg"}, description:"De chill tomando el sol", comments:0, likes:0, emojis:'<i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES"></i><i class="em em-sunny" aria-role="presentation" aria-label="BLACK SUN WITH RAYS"></i>'},
            {picture:"images/4.jpg", user:{name:"Cody", picture:"images/progile.jpg"}, description:"Una foto antes de que las olas se llevaran mis chanclas", comments:0, likes:0, emojis:'<i class="em em-cry" aria-role="presentation" aria-label="CRYING FACE"></i>'},
            {picture:"images/5.jpg", user:{name:"Cody", picture:"images/profile.jpg"}, description:"Modo incógnito", comments:0, likes:0, emojis:'<i class="em em-sleuth_or_spy" aria-role="presentation" aria-label=""></i>'},
            {picture:"images/6.jpg", user:{name:"Cody", picture:"images/profile.jpg"}, description:"Olvidé los audífonos en casa", comments:0, likes:0, emojis:'<i class="em em-face_with_symbols_on_mouth" aria-role="presentation" aria-label="SERIOUS FACE WITH SYMBOLS COVERING MOUTH"></i>'}
        ],
        post:null,
        stories:[
            {title:"Mis vacaciones Frontend", picture:"images/profile.jpg", content:[{message:"", emojis:""}]},
            {title:"Ruta de aprendizaje 2021", picture:"images/profile.jpg", content:[{message:"", emojis:""}]},
            {title:"Importancia de las vacaciones", picture:"images/profile.jpg", content:[{message:"", emojis:""}]},
        ]
    },
    mounted: function(){

    },
    methods:{
        seleccionarPost(post){
            this.post = post;
        }
    }
});