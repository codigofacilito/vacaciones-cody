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
                comments: 123,
                likes: 400,
                emojis: '<i class="em em-bicyclist" aria-role="presentation" aria-label="BICYCLIST"></i><i class="em em-ocean" aria-role="presentation" aria-label="WATER WAVE"></i>'
              },
              {
                picture: "images/2.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "Construyendo la casa antes de que aparezcan los creepers",
                comments: 12,
                likes: 378,
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
                likes: 89,
                emojis: '<i class="em em-sunglasses" aria-role="presentation" aria-label="SMILING FACE WITH SUNGLASSES"></i><i class="em em-sunny" aria-role="presentation" aria-label="BLACK SUN WITH RAYS"></i>'
              },
              {
                picture: "images/4.jpg",
                user: {
                  name: "Cody",
                  picture: "images/progile.jpg"
                },
                description: "Una foto antes de que las olas se llevaran mis chanclas",
                comments: 2,
                likes: 160,
                emojis: '<i class="em em-cry" aria-role="presentation" aria-label="CRYING FACE"></i>'
              },
              {
                picture: "images/5.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "Modo incógnito",
                comments: 46,
                likes: 793,
                emojis: '<i class="em em-sleuth_or_spy" aria-role="presentation" aria-label=""></i>'
              },
              {
                picture: "images/6.jpg",
                user: {
                  name: "Cody",
                  picture: "images/profile.jpg"
                },
                description: "Olvidé los audífonos en casa",
                comments: 10,
                likes: 790,
                emojis: '<i class="em em-face_with_symbols_on_mouth" aria-role="presentation" aria-label="SERIOUS FACE WITH SYMBOLS COVERING MOUTH"></i>'
              }
        ],
        post:null,
        stories:[
            {
                title: "Mis vacaciones Frontend",
                icon:"images/geek.png",
                content: [
                  {
                    picture: "https://cdn.pixabay.com/photo/2018/06/21/14/00/swimming-pool-3488634__340.jpg",
                    message: "Durante el verano de 2019, decidí comenzar a aprender desarrollo frontend, por lo que durante mi viaje, estuve aprendiendo HTML, CSS, y JavaScript",
                    emojis: '<i class="em em-nerd_face" aria-role="presentation" aria-label="NERD FACE"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__340.jpg",
                    message: "Cada tarde, después de conocer nuevos lugares en mis vacaciones, practicaba mis habilidades en tecnologías frontend, construyendo esta página",
                    emojis: '<i class="em em-pencil2" aria-role="presentation" aria-label="PENCIL"></i>'
                  }
                ]
              },
              {
                title: "Ruta de aprendizaje 2021",
                icon:"images/dev.png",
                content: [
                  { 
                    picture: "https://cdn.pixabay.com/photo/2016/03/09/09/17/desktop-1245714__340.jpg",
                    message: "También me propuse aprender nuevas tecnologías durante 2021",
                    emojis: '<i class="em em-book" aria-role="presentation" aria-label="OPEN BOOK"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2020/04/30/15/34/code-5113374__340.jpg",
                    message: "Flexbox, y Grid",
                    emojis: '<i class="em em-notebook" aria-role="presentation" aria-label="NOTEBOOK"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2017/08/01/22/38/flash-2568381__340.jpg",
                    message: "Animaciones con CSS y JavaScript",
                    emojis: '<i class="em em-octopus" aria-role="presentation" aria-label="OCTOPUS"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536__340.jpg",
                    message: "AJAX",
                    emojis: '<i class="em em-outbox_tray" aria-role="presentation" aria-label="OUTBOX TRAY"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2015/09/17/17/25/code-944499__340.jpg",
                    message: "HTML semántico",
                    emojis: '<i class="em em-page_facing_up" aria-role="presentation" aria-label="PAGE FACING UP"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2018/07/15/10/44/dna-3539309__340.jpg",
                    message: "Entre otros",
                    emojis: '<i class="em em-nerd_face" aria-role="presentation" aria-label="NERD FACE"></i>'
                  }
                ]
              },
              {
                title: "Importancia de las vacaciones",
                icon:"images/vacation.png",
                content: [
                  {
                    picture: "https://cdn.pixabay.com/photo/2020/01/24/12/29/konigssee-4790116__340.jpg",
                    message: "Aprender a programar y escribir código, puede ser estresante, por eso es muy importante que periódicamente nos desconectemos y descansemos apropiadamente",
                    emojis: '<i class="em em-beach_with_umbrella" aria-role="presentation" aria-label=""></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2017/09/06/22/21/vw-2723353__340.jpg",
                    message: "Durante mis vacaciones aprendí que existen distintos beneficios de descansar:",
                    emojis: ''
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2017/11/11/21/08/paint-2940513__480.jpg",
                    message: "Mejora la salud mental",
                    emojis: '<i class="em em-brain" aria-role="presentation" aria-label="BRAIN"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2019/08/07/08/33/sunset-4390237__340.jpg",
                    message: "Incrementa la motivación",
                    emojis: '<i class="em em-first_place_medal" aria-role="presentation" aria-label="FIRST PLACE MEDAL"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2016/08/23/13/12/knitting-1614283__340.jpg",
                    message: "Reduce el burnout(desgaste profesional)",
                    emojis: '<i class="em em-dizzy_face" aria-role="presentation" aria-label="DIZZY FACE"></i>'
                  },
                  {
                    picture: "https://cdn.pixabay.com/photo/2017/11/11/21/08/paint-2940513__480.jpg",
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
        selectPost(post){
            this.post = post;
        },
        selectStory(story){
            this.story = story;
        }
    }
});