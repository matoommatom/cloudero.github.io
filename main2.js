$(document).ready(function(){
    function people(){
        var URL1 = 'https://jsonplaceholder.typicode.com/users/1';
        var URL2 = 'https://jsonplaceholder.typicode.com/users/2';
        var URL3 = 'https://jsonplaceholder.typicode.com/users/3';
        var URL4 = 'https://jsonplaceholder.typicode.com/users/4';
        var URL5 = 'https://jsonplaceholder.typicode.com/users/5';
        var URL6 = 'https://jsonplaceholder.typicode.com/users/6';
        var URL7 = 'https://jsonplaceholder.typicode.com/users/7';
        var URL8 = 'https://jsonplaceholder.typicode.com/users/8';
        //
        var URLa = 'https://jsonplaceholder.typicode.com/posts/1';
        var URLb = 'https://jsonplaceholder.typicode.com/posts/2';
        var URLc = 'https://jsonplaceholder.typicode.com/posts/3';
        var URLd = 'https://jsonplaceholder.typicode.com/posts/4';
        var URLe = 'https://jsonplaceholder.typicode.com/posts/5';
        var URLf = 'https://jsonplaceholder.typicode.com/posts/6';
        var URLg = 'https://jsonplaceholder.typicode.com/posts/7';
        var URLh = 'https://jsonplaceholder.typicode.com/posts/8';

        $.getJSON(URL1,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM(data);
        });
        $.getJSON(URL2,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM2(data);
        });
        $.getJSON(URL3,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM3(data);
        });
        $.getJSON(URL4,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM4(data);
        });
        $.getJSON(URL5,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM5(data);
        });
        $.getJSON(URL6,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM6(data);
        });
        $.getJSON(URL7,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM7(data);
        });
        $.getJSON(URL8,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM8(data);
        });
        //posts
        $.getJSON(URLa,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMa(data);
        });
        $.getJSON(URLb,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMb(data);
        });
        $.getJSON(URLc,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMc(data);
        });
        $.getJSON(URLd,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMd(data);
        });
        $.getJSON(URLe,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMe(data);
        });
        $.getJSON(URLf,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMf(data);
        });
        $.getJSON(URLg,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMg(data);
        });
        $.getJSON(URLh,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOMh(data);
        });
        
    }
    people();
    $(".card").click(function() { //make cards clickable
        window.location = $(this).find("a").attr("href"); 
        return false;
    });

    function updateDOM(data){
        var people = data.name;
        
        $('#n1').html(people); //find ones with id n1 and replace by a var people
    }
    function updateDOM2(data){
        var people = data.name;
        
        $('#n2').html(people); 
    }
    function updateDOM3(data){
        var people = data.name;
        
        $('#n3').html(people); 
    }
    function updateDOM4(data){
        var people = data.name;
        
        $('#n4').html(people); 
    }
    function updateDOM5(data){
        var people = data.name;
        
        $('#n5').html(people); 
    }
    function updateDOM6(data){
        var people = data.name;
        
        $('#n6').html(people); 
    }
    function updateDOM7(data){
        var people = data.name;
        
        $('#n7').html(people); 
    }
    function updateDOM8(data){
        var people = data.name;
        
        $('#n8').html(people); 
    }
    //posts
    function updateDOMa(data){
        var title = data.title;
        var body = data.body;
        
        $('#t1').html(title); 
        $('#ct').html(body); 
    }
    function updateDOMb(data){
        var title = data.title;
        var body = data.body;
        
        $('#t2').html(title); 
        $('#ct2').html(body); 
    }
    function updateDOMc(data){
        var title = data.title;
        var body = data.body;
        
        $('#t3').html(title); 
        $('#ct3').html(body); 
    }
    function updateDOMd(data){
        var title = data.title;
        var body = data.body;
        
        $('#t4').html(title); 
        $('#ct4').html(body); 
    }
    function updateDOMe(data){
        var title = data.title;
        var body = data.body;
        
        $('#t5').html(title); 
        $('#ct5').html(body); 
    }
    function updateDOMf(data){
        var title = data.title;
        var body = data.body;
        
        $('#t6').html(title); 
        $('#ct6').html(body); 
    }
    function updateDOMf(data){
        var title = data.title;
        var body = data.body;
        
        $('#t6').html(title); 
        $('#ct6').html(body); 
    }
    function updateDOMg(data){
        var title = data.title;
        var body = data.body;
        
        $('#t7').html(title); 
        $('#ct7').html(body); 
    }
    function updateDOMh(data){
        var title = data.title;
        var body = data.body;
        
        $('#t8').html(title); 
        $('#ct8').html(body); 
    }




}); //when want to talk with jquery, use $