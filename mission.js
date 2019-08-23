$("input").on("click", function(){
    var target = document.querySelector('body');
    if(this.value === 'NIGHT'){
        target.style.backgroundColor = '#333232';
        target.style.color = '#F4F4F4'; 
        this.value = 'DAY';
    
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
          alist[i].style.color = '#3B7B7B7';
          i = i + 1;
        }
      } else {
        target.style.backgroundColor = '#EEE2DF';
        target.style.color = '#7A5C61';
        this.value = 'NIGHT';
    
        var alist = document.querySelectorAll('a');
        var i = 0;
        while(i < alist.length){
          alist[i].style.color = '#BFBCCB';
          i = i + 1;
        }
      }       
});