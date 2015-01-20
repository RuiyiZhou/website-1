DOUBAN.apikey = 'c4579586f41a90372f762cb65c78be5d'

DOUBAN.getMovie({
    id:'2340927',
    callback:function(movie){
        var title = movie.title['$t'];
                ...
    }
})