function get_data() {
            fetch('http://newsapi.org/v2/everything?q=climate&sortBy=publishedAt&apiKey=f4a7cc07790747a88ad8519c05a8e531')
            .then(a => a.json())
            .then(response => {
                for (i =0 ; i<response.articles.length ; i++){
                    document.getElementById("container").innerHTML+="<div id='news'><img src='"+response.articles[i].urlToImage+"'><h3>"+response.articles[i].title+"</h3><br><h4>"+response.articles[i].description+"</h4><hr>"
                }
            })
        }
        get_data();
