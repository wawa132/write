      
    // function day_night(self){
    //  var target = document.querySelector('body');
    //  if(self.value === 'night'){
    //     target.style.backgroundColor = 'black';
    //     target.style.color = 'white';
    //     self.value = 'day';

    //     var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < alist.length){
    //         alist[i].style.color = 'white';
    //         i = i + 1;
    //         }

    //     }else{
    //     target.style.backgroundColor = 'white';
    //     target.style.color = 'black';
    //     self.value = 'night';

    //     var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i < alist.length){
    //         alist[i].style.color = 'black';
    //         i = i + 1;
    //         }    
    //     }
    // }

    var body = {
        SetBackColor: function(color){
        // document.querySelector('body').style.backgroundColor = color
        $('body').css('background-color',color);

        },
        
        SetColor:function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color',color);
        }
    }

    // function BodySetBackColor(color){
    //     document.querySelector('body').style.backgroundColor = color;
    // }

    // function SetColor(color) {
    //     document.querySelector('body').style.color = color;
    // }

    var link = {
        Setalist:function(color){
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i<alist.length){
        //     alist[i].style.color = color;
        //     i = i + 1;
        //     }
        $('a').css('color',color);
        }
    }

    // function Setalist(color){
    //     var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while(i<alist.length){
    //         alist[i].style.color = color;
    //         i = i + 1;
    //     }
    // }

    function day_night(self) {
        if(self.value === 'night'){
            body.SetBackColor('black');
            body.SetColor('white');
            self.value = 'day';
            link.Setalist('white');
        }else{
            body.SetBackColor('white');
            body.SetColor('black');
            self.value = 'night';
            link.Setalist('black');
        }
    }
