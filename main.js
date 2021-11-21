$(document).ready(function() {
    if(localStorage.getItem('loading') != 'loaded') {
        
        $('.loading').fadeIn();
        
        let i = 1;

        const goLoad = () => {
            $('svg:nth-child(' + i + ')').addClass('active');
            $('svg:nth-child(' + i + ')').css('animation-delay',i);
            i == 1 ? $('.loading-bar').css('width', '100%') : null;
            i++;
        }

        const stopLoading = () => {
            clearInterval(loading);

            $('.loading').css('transform', ' translate(-160%, -50%)');
            $('.loaded-text').css('top', '50%');

            const showLoadedText = () => {
                $('.loaded-text').css('transform','translateY(-50%) scale(0)').css('opacity','0');
                $('.main-info').addClass('active');
                $('header').fadeIn().css('display','flex');
            }
            setTimeout(showLoadedText, 1200);
        }
        
        let loading = setInterval(goLoad, 450);

        setTimeout(stopLoading, 5500);
        localStorage.setItem('loading', 'loaded');
    }
    else {
        $('.main-info').addClass('active');
        $('header').fadeIn().css('display','flex').addClass('active');
    }
})