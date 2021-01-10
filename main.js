$(document).ready(function(){ //when want to talk with jquery, use $

    function starwar(){
        var URL = 'https://swapi.dev/api/people/1/'; 
        var URL2 = 'http://swapi.dev/api/people/2/';
        var URL3 = 'http://swapi.dev/api/people/3/';
        var URL4 = 'http://swapi.dev/api/people/4/';
        var URL5 = 'http://swapi.dev/api/people/5/';
        var URL6 = 'http://swapi.dev/api/people/6/';
        //starship section
        var URL7 = 'http://swapi.dev/api/starships/2/';
        var URL8 = 'http://swapi.dev/api/starships/3/';
        var URL9 = 'http://swapi.dev/api/starships/5/';
        var URLx = 'http://swapi.dev/api/starships/9/';
        var URLy = 'http://swapi.dev/api/starships/10/';
        var URLz = 'http://swapi.dev/api/starships/11/';
        //species section
        var URLa = 'http://swapi.dev/api/species/2/';
        var URLb = 'http://swapi.dev/api/species/1/';
        //episodes
        var URLg = 'http://swapi.dev/api/films/4/'; //ep1
        var URLh = 'http://swapi.dev/api/films/5/'; //ep2
        var URLf = 'http://swapi.dev/api/films/6/'; //ep3
        var URLc = 'http://swapi.dev/api/films/1/'; //ep4
        var URLd = 'http://swapi.dev/api/films/2/'; //ep5
        var URLe = 'http://swapi.dev/api/films/3/'; //ep6
        
        $.getJSON(URL,function(data){ //to sent a request that want to use data from API
            console.log(data); // to show get data in console
            updateDOM(data);
        });
        $.getJSON(URL2,function(dt2){
            console.log(dt2);
            updateDOM2(dt2);
        });

        $.getJSON(URL3,function(dt3){
            console.log(dt3);
            updateDOM3(dt3);
        });
        $.getJSON(URL4,function(dt4){
            console.log(dt4);
            updateDOM4(dt4);
        });
        $.getJSON(URL5,function(dt5){
            console.log(dt5);
            updateDOM5(dt5);
        });
        $.getJSON(URL6,function(dt6){
            console.log(dt6);
            updateDOM6(dt6);
        });
        // starship section
        $.getJSON(URL7,function(dt7){
            console.log(dt7);
            updateDOM7(dt7);
        });
        $.getJSON(URL8,function(dt8){
            console.log(dt8);
            updateDOM8(dt8);
        });
        $.getJSON(URL9,function(dt9){
            console.log(dt9);
            updateDOM9(dt9);
        });
        $.getJSON(URLx,function(dtx){
            console.log(dtx);
            updateDOMx(dtx);
        });
        $.getJSON(URLy,function(dty){
            console.log(dty);
            updateDOMy(dty);
        });
        $.getJSON(URLz,function(dtz){
            console.log(dtz);
            updateDOMz(dtz);
        });
        //species
        $.getJSON(URLa,function(a){
            console.log(a);
            updateDOMa(a);
        });
        $.getJSON(URLb,function(b){
            console.log(b);
            updateDOMb(b);
        });
        //episodes
        $.getJSON(URLc,function(c){
            console.log(c);
            updateDOMc(c);
        });
        $.getJSON(URLd,function(d){
            console.log(d);
            updateDOMd(d);
        });
        $.getJSON(URLe,function(e){
            console.log(e);
            updateDOMe(e);
        });
        $.getJSON(URLf,function(f){
            console.log(f);
            updateDOMf(f);
        });
        $.getJSON(URLg,function(g){
            console.log(g);
            updateDOMg(g);
        });
        $.getJSON(URLh,function(h){
            console.log(h);
            updateDOMh(h);
        });

    }
    starwar();

    function updateDOM(data){
        var people = data.name;
        
        $('#n1').html(people); //find ones with class name and replace by a var name
        
    }
    function updateDOM2(dt2){
        var people = dt2.name;
    
        $('#n2').html(people);
    }
    function updateDOM3(dt3){
        var people = dt3.name;
    
        $('#n3').html(people);
    }
    function updateDOM4(dt4){
        var people = dt4.name;
    
        $('#n4').html(people);
    }
    function updateDOM5(dt5){
        var people = dt5.name;
    
        $('#n5').html(people);
    }
    function updateDOM6(dt6){
        var people = dt6.name;
    
        $('#n6').html(people);
    }
    //starship section
    function updateDOM7(dt7){
        var ship = dt7.name;
        var cost = Math(dt7.cost_in_credits/10^6);

        $('#s1').html(ship);
        $('#c1').html(cost + ' - ');
    }
    function updateDOM8(dt8){
        var ship = dt8.name;
        var cost = dt8.cost_in_credits;

        $('#s2').html(ship);
        $('#c2').html(cost + ' - ');
    }
    function updateDOM9(dt9){
        var ship = dt9.name;
        var cost = dt9.cost_in_credits;

        $('#s3').html(ship);
        $('#c3').html(cost + ' - ');
    }
    function updateDOMx(dtx){
        var ship = dtx.name;
        var cost = dtx.cost_in_credits;

        $('#s4').html(ship);
        $('#c4').html(cost + ' - ');
    }
    function updateDOMy(dty){
        var ship = dty.name;
        var cost = dty.cost_in_credits;

        $('#s5').html(ship);
        $('#c5').html(cost + ' - ');
    }
    function updateDOMz(dtz){
        var ship = dtz.name;
        var cost = dtz.cost_in_credits;

        $('#s6').html(ship);
        $('#c6').html(cost + ' - ');
    }
    //species
    function updateDOMa(a){
        var species = a.name;

        $('#spc2').html(species + ' - ');
        $('#spc3').html(species + ' - ');
    }
    function updateDOMb(b){
        var species = b.name;

        $('#spc1').html(species + ' - ');
        $('#spc4').html(species + ' - ');
        $('#spc5').html(species + ' - ');
        $('#spc6').html(species + ' - ');
    }
    //episodes
    function updateDOMc(c){ //f1
        var ep = c.episode_id; //ep4

        $('#spc1').append(' ' + ep);
        $('#spc2').append(' ' + ep);
        $('#spc3').append(' ' + ep);
        $('#spc4').append(' ' + ep);
        $('#spc5').append(' ' + ep);
        //starship
        $('#c1').append(' ' + ep);
        $('#c2').append(' ' + ep);
        $('#c3').append(' ' + ep);
        $('#c4').append(' ' + ep);
        $('#c5').append(' ' + ep);
        $('#c6').append(' ' + ep);
    }
    function updateDOMd(d){ //f2
        var ep = d.episode_id; //ep5
    
        $('#spc1').append(' ' + ep);
        $('#spc2').append(' ' + ep);
        $('#spc3').append(' ' + ep);
        $('#spc4').append(' ' + ep);
        $('#spc5').append(' ' + ep);
        $('#spc6').append(' ' + ep);
        //
        $('#c2').append(' ' + ep);
        $('#c5').append(' ' + ep);
        $('#c6').append(' ' + ep);
    }
    function updateDOMe(e){ //f3
        var ep = e.episode_id; //ep6
    
        $('#spc1').append(' ' + ep);
        $('#spc2').append(' ' + ep);
        $('#spc3').append(' ' + ep);
        $('#spc4').append(' ' + ep);
        $('#spc5').append(' ' + ep);
        //
        $('#c1').append(' ' + ep);
        $('#c2').append(' ' + ep);
        $('#c5').append(' ' + ep);
        $('#c6').append(' ' + ep);
    }
    function updateDOMg(g){ //f4
        var ep = g.episode_id; //ep1
    
        $('#spc2').append(' ' + ep);
        $('#spc3').append(' ' + ep);
    }
    function updateDOMh(h){ //f5
        var ep = h.episode_id; //ep2
    
        $('#spc2').append(' ' + ep);
        $('#spc3').append(' ' + ep);
        $('#spc6').append(' ' + ep);
    }
    function updateDOMf(f){ //f6
        var ep = f.episode_id; //ep3
    
        $('#spc1').append(' ' + ep);
        $('#spc2').append(' ' + ep);
        $('#spc3').append(' ' + ep);
        $('#spc4').append(' ' + ep);
        $('#spc5').append(' ' + ep);
        $('#spc6').append(' ' + ep);
        //
        $('#c1').append(' ' + ep);
    }

});