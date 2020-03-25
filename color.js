var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a')
    var i = 0;
    while (i < alist.length){
      alist[i].style.color= color;
      i = i + 1;
    }
  },
  favList:function(){
    var fav = ['Animation','Drawing','Painting']
    var i = 0
    while (i < fav.length){
      document.write('<li><a href="'+fav[i]+'.html" title="'+fav[i]+'">'+fav[i]+'</a></li>');
      i = i + 1;
    }
  },
  hobbyList:function(){
    var hob = ['Photo','Guitar','Game']
    var i = 0
    while (i < hob.length){
      document.write('<li><a href="'+hob[i]+'.html" title="'+hob[i]+'">'+hob[i]+'</a></li>');
      i = i + 1;
    }
  }
}

var Body = {
  setColor:function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor:function(color){
      document.querySelector('body').style.backgroundColor=color;
  },

}

function nightDayHandler(self){
  // var target = document.querySelector('body');
  if(self.value === 'Night') {
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'Day';
    Links.setColor("white");

} else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Night';
    Links.setColor("black");

  }
}
