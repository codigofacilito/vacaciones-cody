var main = new Vue({
    el:"#main",
    data:{
        posts:[
            {
                picture: "images/1.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "Dando una vuelta en bicicleta en la playa!",
                comments: 0,
                likes: 0,
                emojis: '<i class="em em-bicyclist" aria-role="presentation" aria-label="BICYCLIST"></i><i class="em em-ocean" aria-role="presentation" aria-label="WATER WAVE"></i>'
              },
              {
                picture: "images/2.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "Construyendo la casa antes de que aparezcan los creepers",
                comments: 0,
                likes: 0,
                emojis: '<i class="em em-crossed_swords" aria-role="presentation" aria-label=""></i><i class="em em-video_game" aria-role="presentation" aria-label="VIDEO GAME"></i>'
              },
              {
                picture: "images/3.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "De chill tomando el sol",
                comments: 0,
                likes: 0,
                emojis: '<i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES"></i><i class="em em-sunny" aria-role="presentation" aria-label="BLACK SUN WITH RAYS"></i>'
              },
              {
                picture: "images/4.jpg",
                user: {
                  name: "Cody",
                  picture: "images/progile.jpg"
                },
                description: "Una foto antes de que las olas se llevaran mis chanclas",
                comments: 0,
                likes: 0,
                emojis: '<i class="em em-cry" aria-role="presentation" aria-label="CRYING FACE"></i>'
              },
              {
                picture: "images/5.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "Modo incógnito",
                comments: 0,
                likes: 0,
                emojis: '<i class="em em-sleuth_or_spy" aria-role="presentation" aria-label=""></i>'
              },
              {
                picture: "images/6.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "Olvidé los audífonos en casa",
                comments: 0,
                likes: 0,
                emojis: '<i class="em em-face_with_symbols_on_mouth" aria-role="presentation" aria-label="SERIOUS FACE WITH SYMBOLS COVERING MOUTH"></i>'
              }
        ],
        post:null,
        stories:[
            {
                title: "Mis vacaciones Frontend",
                icon:"images/profile.jpg",
                content: [
                  {
                    picture: "images/atardecerplaya.jpg",
                    message: "Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript",
                    emojis: '<i class="em em-nerd_face" aria-role="presentation" aria-label="NERD FACE"></i>'
                  },
                  {
                    picture: "images/atardecerplaya.jpg",
                    message: "Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página",
                    emojis: '<i class="em em-pencil2" aria-role="presentation" aria-label="PENCIL"></i>'
                  }
                ]
              },
              {
                title: "Ruta de aprendizaje 2021",
                icon:"images/profile.jpg",
                content: [
                  { 
                    picture: "images/codigo.jpg",
                    message: "También me propuse aprender nuevas tecnologías durante 2021",
                    emojis: '<i class="em em-book" aria-role="presentation" aria-label="OPEN BOOK"></i>'
                  },
                  {
                    picture: "images/codigo.jpg",
                    message: "Flexbox, y Grid",
                    emojis: '<i class="em em-notebook" aria-role="presentation" aria-label="NOTEBOOK"></i>'
                  },
                  {
                    picture: "images/codigo.jpg",
                    message: "Animaciones con CSS y JavaScript",
                    emojis: '<i class="em em-octopus" aria-role="presentation" aria-label="OCTOPUS"></i>'
                  },
                  {
                    picture: "images/codigo.jpg",
                    message: "AJAX",
                    emojis: '<i class="em em-outbox_tray" aria-role="presentation" aria-label="OUTBOX TRAY"></i>'
                  },
                  {
                    picture: "images/codigo.jpg",
                    message: "HTML semántico",
                    emojis: '<i class="em em-page_facing_up" aria-role="presentation" aria-label="PAGE FACING UP"></i>'
                  },
                  {
                    picture: "images/codigo.jpg",
                    message: "Entre otros",
                    emojis: '<i class="em em-nerd_face" aria-role="presentation" aria-label="NERD FACE"></i>'
                  }
                ]
              },
              {
                title: "Importancia de las vacaciones",
                icon:"images/profile.jpg",
                content: [
                  {
                    picture: "images/videojuegos.png",
                    message: "Aprender a programar y escribir código, puede ser estresante, por eso es muy importante que periódicamente nos desconectemos y descansemos apropiadamente",
                    emojis: '<i class="em em-beach_with_umbrella" aria-role="presentation" aria-label=""></i>'
                  },
                  {
                    picture: "images/videojuegos.png",
                    message: "Durante mis vacaciones aprendí que existen distintos beneficios de descansar:",
                    emojis: ''
                  },
                  {
                    picture: "images/videojuegos.png",
                    message: "Mejora la salud mental",
                    emojis: '<i class="em em-brain" aria-role="presentation" aria-label="BRAIN"></i>'
                  },
                  {
                    picture: "images/videojuegos.png",
                    message: "Incrementa la motivación",
                    emojis: '<i class="em em-first_place_medal" aria-role="presentation" aria-label="FIRST PLACE MEDAL"></i>'
                  },
                  {
                    picture: "images/videojuegos.png",
                    message: "Reduce el burnout(desgaste profesional)",
                    emojis: '<i class="em em-dizzy_face" aria-role="presentation" aria-label="DIZZY FACE"></i>'
                  },
                  {
                    picture: "images/videojuegos.png",
                    message: "Mejora tu productividad y creatividad",
                    emojis: '<i class="em em-rocket" aria-role="presentation" aria-label="ROCKET"></i>'
                  }
                ]
              }
        ],
        story:null
    },
    mounted: function(){

    },
    methods:{
        seleccionarPost(post){
            this.post = post;
        },
        seleccionarStory(story){
            this.story = story;
        }
    }
});