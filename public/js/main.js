var main = new Vue({
    el:"#main",
    data:{
        posts:[
            {picture:"images/1.jpg", user:{nombre:"Cody", picture:"images/profile.jpg"}, description:"Dando una vuelta en bicicleta en la playa!", comments:0, likes:0, emojis:'<i class="em em-bicyclist" aria-role="presentation" aria-label="BICYCLIST"></i><i class="em em-ocean" aria-role="presentation" aria-label="WATER WAVE"></i>'},
            {picture:"images/2.jpg", user:{nombre:"Cody", picture:"images/profile.jpg"}, description:"Levantando la casa antes de que aparezcan los creeepers", comments:0, likes:0, emojis:""},
            {picture:"images/3.jpg", user:{nombre:"Cody", picture:"images/profile.jpg"}, description:"De chill tomando el sol", comments:0, likes:0, emojis:""},
            {picture:"images/4.jpg", user:{nombre:"Cody", picture:"images/progile.jpg"}, description:"Una foto antes de que las olas se llevaran mis chanclas", comments:0, likes:0, emojis:""},
            {picture:"images/5.jpg", user:{nombre:"Cody", picture:"images/profile.jpg"}, description:"Modo incógnito", comments:0, likes:0, emojis:""},
            {picture:"images/6.jpg", user:{nombre:"Cody", picture:"images/profile.jpg"}, description:"Olvidé los audífonos en casa", comments:0, likes:0, emojis:""}
        ],
        post:null
    },
    mounted: function(){

    },
    methods:{
        seleccionarPost(post){
            this.post = post;
        }
    }
});