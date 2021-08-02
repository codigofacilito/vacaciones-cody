let ContainerImg = document.querySelector('.photosGallery');
let ImgDowload = document.getElementById('ImgDownload');
let ImgView = document.getElementById('ImgView');
let ListImg  = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];
let ListAlt = ['Cody en la playa', 'Cody acampando', 'Cody en una alberca', 'Cody sentado en la playa', 'Cody paseando en la calle', 'Cody en el aeropuerto'];
let CountImg = 0;

export function CarrouselEvent() {
    ContainerImg.addEventListener('click', e => {
        let LeftImg = ContainerImg.querySelector('.leftArrow');
        let RightImg = ContainerImg.querySelector('.rightArrow');
        let ImageImg = ContainerImg.querySelector('img');
        let TargetImg = e.target;

            if(TargetImg === LeftImg) {
                if(CountImg > 0)
                { CountImg--; }
                else
                {CountImg = ListImg.length - 1; }                
                    
                ImageImg.src = ListImg[CountImg];
                ImageImg.alt = ListAlt[CountImg];
                ImageImg.title = ListAlt[CountImg];
                    ImgDowload.download = ListAlt[CountImg];
                    ImgDowload.target = '_blank';
                    ImgDowload.href= ListImg[CountImg];
                        ImgView.target = '_blank';
                        ImgView.href= ListImg[CountImg];
            }
            else if(TargetImg === RightImg) {
                if(CountImg < (ListImg.length - 1))
                { CountImg++; }
                else
                { CountImg = 0; }
                
                ImageImg.src = ListImg[CountImg];
                ImageImg.alt = ListAlt[CountImg];
                ImageImg.title = ListAlt[CountImg];
                    ImgDowload.download = ListAlt[CountImg];
                    ImgDowload.target = '_blank';
                    ImgDowload.href= ListImg[CountImg];
                        ImgView.target = '_blank';
                        ImgView.href= ListImg[CountImg];
                    
            }
    });
}
