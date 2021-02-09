function showShipInput() 
{
  if (document.getElementById("adwin-ship-checkbox").checked == true)
  {
    document.getElementById("adwin-shipprice").style.display = "inline-block";
  } 
  else 
  {
    document.getElementById("adwin-shipprice").style.display = "none";
  }
}

function showMeetInput() 
{
  if (document.getElementById("adwin-meet-checkbox").checked == true)
  {
    document.getElementById("adwin-meetcity").style.display = "inline-block";
  } 
  else 
  {
    document.getElementById("adwin-meetcity").style.display = "none";
  }
}

/*SUGGESTIONS*/

$("#adwin-meetcity").autocomplete({
  source: ["Warszawa", "Kraków", "Łódź", "Wrocław", "Poznań", "Gdańsk", "Szczecin", "Bydgoszcz", 
  "Lublin", "Białystok", "Toruń", "Gorzów Wielkopolski", "Zielona Góra", "Katowice", "Kielce",
  "Olsztyn", "Opole", "Rzeszów", "Częstochowa", "Radom", "Sosnowiec", "Gliwice", "Zabrze", "Bielsko-Biała",
  "Bytom", "Rybnik", "Ruda Śląska", "Tychy", "Dąbrowa Górnicza", "Elbląg", "Płock", "Wałbrzych", "Tarnów",
  "Chorzów", "Koszalin", "Kalisz", "Legnica"]
},
{
  autoFocus: false,
  delay: 0,
  minLength: 1
});

/*NUMBER OF CHARACTERS*/

document.getElementById("adwin-textarea").addEventListener("input", function()
{
  var number = (200-document.getElementById("adwin-textarea").value.length);
  document.getElementById("adwin-lettercounter").textContent = "Pozostało znaków: " + number;

  if(number<=20)
  {
    document.getElementById("adwin-lettercounter").style.color = 'red';
  }
  else
  {
    document.getElementById("adwin-lettercounter").style.color = 'black';
  }

});

/*SHOW PRICE*/

function showPrice()
{
  if (document.getElementById("adwin-price").value && !isNaN(document.getElementById("adwin-price").value))
  {
    var Price = document.getElementById("adwin-price").value - document.getElementById("adwin-price").value*0.1;
    Price = (Math.round(Price * 100) / 100).toFixed(2);

    document.getElementById("adwin-showprice").textContent = " (Otrzymasz: " + Price + "PLN)";
  }
  else
  {
    document.getElementById("adwin-showprice").textContent = "";
  }
}

/*CUSTOM SELECT*/

$(document).ready(function()
{
  var drop = ['#adwin-select-category','#adwin-select-condition','#adwin-select-kind','#adwin-select-sizeClothing',
  '#adwin-select-sizeFootwear','#adwin-select-fit','#adwin-select-cw'];

  function createDropdown()
  {
    var categories = ['Sneakersy','Hoodie','Teesy','Polo','Koszule','Crewnecki','Longsleevy','Katany','Kurtki','Płaszcze','Spodnie','Szale','Portfele','Plecaki',
    'Zegarki','Czapki','Paski','Bielizna','Inne'];
    var condition = ['DS','VNDS','4/5','3/5','2/5','1/5'];
    var kind = ['Męskie','Damskie'];
    var sizeClothing = ['XS','S','M','L','XL','XXL'];
    var sizeFootwear = ['36.0','36.5','37.0','37.5','38.0','38.5','39.0','39.5','40.0','40.5','41.0','41.5','42.0','42.5','43.0','43.5',
    '44.0','44.5','45.0','45.5','46.0','46.5','47.0','47.5','48.0','48.5','49.0','49.5','50.0'];
    var fit = ['SLIM FIT','REGULAR','OVERSIZE'];
    var cw = ['Brązowy','Czerwony','Pomarańczowy','Żółty','Zielony','Niebieski','Fioletowy','Różowy','Czarny','Szary','Biały','Wielobarwny'];
    var elements = [categories, condition, kind, sizeClothing, sizeFootwear, fit, cw];

    var colors = ['#A23A3A','#F2324D','#F4A523','#F8E71B','#7CD321','#4CA3FD','#8F12FF','#EC94FF','black','#AAA','white','#F9F9F9'];

    for(var i=0; i<drop.length; i++)
    {
      var htmlString = '<div class="dropContainer">';

      for(var j=0; j<elements[i].length; j++)
      {
        switch(i)
        {
          case 0:
          switch(j)
          {
            case 0: htmlString += '<div class="dropOption" data-value="1">'+elements[i][j]+'</div>'; break;
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: htmlString += '<div class="dropOption" data-value="3">'+elements[i][j]+'</div>'; break;
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17: htmlString += '<div class="dropOption" data-value="2">'+elements[i][j]+'</div>'; break;
            case 18: htmlString += '<div class="dropOption dropOption-different" data-value="2">'+elements[i][j]+'</div>'; break;
          }
          break;
          
          case 6:
          switch(j)
          {
            case 16: htmlString += '<div class="dropOption"><span class="ball multicolored">&#xf111;</span> '+elements[i][j]+'</div>'; break;
            default: htmlString += '<div class="dropOption"><span class="ball" style="color:'+colors[j]+';">&#xf111;</span> '+elements[i][j]+'</div>'; break;
          }
          break;

          default: htmlString += '<div class="dropOption">'+elements[i][j]+'</div>'; break;
        }
      }        
      htmlString += '</div>';

      ($(drop[i])).append(htmlString);
    }
  }

  createDropdown();

  var containerCategory = $('#adwin-select-category .dropContainer');

  $('#adwin-select-category').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.attr('id') === '#adwin-select-category')
    {
      if(containerCategory.is(":visible"))
      {
        containerCategory.hide();
        document.getElementById("adwin-select-category").style.borderColor = "#DDD";
      }
      else
      {
        containerCategory.show();
        document.getElementById("adwin-select-category").style.borderColor = "#00B4FF"; 
      }
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-category').find('div.valueHolder').text(target.text());
      $('#adwin-select-category').find('div.valueHolder').data('value', target.data('value'));
      containerCategory.hide();
      document.getElementById("adwin-select-category").style.borderColor = "#DDD";
      showElements();
    }
  });

  var containerCondition = $('#adwin-select-condition .dropContainer');

  $('#adwin-select-condition').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.attr('id') === 'adwin-select-condition')
    {
      if(containerCondition.is(":visible"))
      {
        containerCondition.hide();
        document.getElementById("adwin-select-condition").style.borderColor = "#DDD";
      }
      else
      {
        containerCondition.show();
        document.getElementById("adwin-select-condition").style.borderColor = "#00B4FF"; 
      }  
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-condition').find('div.valueHolder').text(target.text());
      containerCondition.hide();
      document.getElementById("adwin-select-condition").style.borderColor = "#DDD";
    }
  });

  var containerKind = $('#adwin-select-kind .dropContainer');

  $('#adwin-select-kind').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.attr('id') === 'adwin-select-kind')
    {
      if(containerKind.is(":visible"))
      {
        containerKind.hide();
        document.getElementById("adwin-select-kind").style.borderColor = "#DDD";
      }
      else
      {
        containerKind.show();
        document.getElementById("adwin-select-kind").style.borderColor = "#00B4FF"; 
      }    
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-kind').find('div.valueHolder').text(target.text());
      containerKind.hide();
      document.getElementById("adwin-select-kind").style.borderColor = "#DDD";
    }
  });

  var containerSizeFootwear = $('#adwin-select-sizeFootwear .dropContainer');

  $('#adwin-select-sizeFootwear').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.attr('id') === 'adwin-select-sizeFootwear')
    {
      if(containerSizeFootwear.is(":visible"))
      {
        containerSizeFootwear.hide();
        document.getElementById("adwin-select-sizeFootwear").style.borderColor = "#DDD";
      }
      else
      {
        containerSizeFootwear.show();
        document.getElementById("adwin-select-sizeFootwear").style.borderColor = "#00B4FF"; 
      }   
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-sizeFootwear').find('div.valueHolder').text(target.text());
      containerSizeFootwear.hide();
      document.getElementById("adwin-select-sizeFootwear").style.borderColor = "#DDD";
    }
  });

  var containerSizeClothing = $('#adwin-select-sizeClothing .dropContainer');

  $('#adwin-select-sizeClothing').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.attr('id') === 'adwin-select-sizeClothing')
    {
      if(containerSizeClothing.is(":visible"))
      {
        containerSizeClothing.hide();
        document.getElementById("adwin-select-sizeClothing").style.borderColor = "#DDD";
      }
      else
      {
        containerSizeClothing.show();
        document.getElementById("adwin-select-sizeClothing").style.borderColor = "#00B4FF"; 
      }   
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-sizeClothing').find('div.valueHolder').text(target.text());
      containerSizeClothing.hide();
      document.getElementById("adwin-select-sizeClothing").style.borderColor = "#DDD";
    }
  });

  var containerFit = $('#adwin-select-fit .dropContainer');

  $('#adwin-select-fit').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.attr('id') === 'adwin-select-fit')
    {
      if(containerFit.is(":visible"))
      {
        containerFit.hide();
        document.getElementById("adwin-select-fit").style.borderColor = "#DDD";
      }
      else
      {
        containerFit.show();
        document.getElementById("adwin-select-fit").style.borderColor = "#00B4FF"; 
      }   
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-fit').find('div.valueHolder').text(target.text());
      containerFit.hide();
      document.getElementById("adwin-select-fit").style.borderColor = "#DDD";
    }
  });

  var containerCW = $('#adwin-select-cw .dropContainer');

  $('#adwin-select-cw').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.attr('id') === 'adwin-select-cw')
    {
      if(containerCW.is(":visible"))
      {
        containerCW.hide();
        document.getElementById("adwin-select-cw").style.borderColor = "#DDD";
      }
      else
      {
        containerCW.show();
        document.getElementById("adwin-select-cw").style.borderColor = "#00B4FF"; 
      }   
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-cw').find('div.valueHolder').html(target.html());
      containerCW.hide();
      document.getElementById("adwin-select-cw").style.borderColor = "#DDD";
    }
  });

  $(document).mouseup(function(e) 
  {
    if (!$('#adwin-select-category').is(e.target) && $('#adwin-select-category').has(e.target).length === 0) 
    {
      containerCategory.hide();
      document.getElementById("adwin-select-category").style.borderColor = "#DDD";
    }
    if (!$('#adwin-select-condition').is(e.target) && $('#adwin-select-condition').has(e.target).length === 0) 
    {
      containerCondition.hide();
      document.getElementById("adwin-select-condition").style.borderColor = "#DDD";
    }
    if (!$('#adwin-select-kind').is(e.target) && $('#adwin-select-kind').has(e.target).length === 0) 
    {
      containerKind.hide();
      document.getElementById("adwin-select-kind").style.borderColor = "#DDD";
    }
    if (!$('#adwin-select-sizeFootwear').is(e.target) && $('#adwin-select-sizeFootwear').has(e.target).length === 0) 
    {
      containerSizeFootwear.hide();
      document.getElementById("adwin-select-sizeFootwear").style.borderColor = "#DDD";
    }
    if (!$('#adwin-select-sizeClothing').is(e.target) && $('#adwin-select-sizeClothing').has(e.target).length === 0) 
    {
      containerSizeClothing.hide();
      document.getElementById("adwin-select-sizeClothing").style.borderColor = "#DDD";
    }
    if (!$('#adwin-select-fit').is(e.target) && $('#adwin-select-fit').has(e.target).length === 0) 
    {
      containerFit.hide();
      document.getElementById("adwin-select-fit").style.borderColor = "#DDD";
    }
    if (!$('#adwin-select-cw').is(e.target) && $('#adwin-select-cw').has(e.target).length === 0) 
    {
      containerCW.hide();
      document.getElementById("adwin-select-cw").style.borderColor = "#DDD";
    }
  });


function showElements()
{
  var option = $('#adwin-select-category').find('div.valueHolder').data('value');

  if (option == "1")
  {
    document.querySelector(".adwin-dimensions").style.display = "none";
    document.getElementById("adwin-length").style.display = "inline-block";
    document.getElementById("adwin-select-sizeClothing").style.display = "none";
    document.getElementById("adwin-select-sizeFootwear").style.display = "inline-block";
    document.getElementById("adwin-select-fit").style.display = "none";
  }
  else if (option == "2")
  {
    document.querySelector(".adwin-dimensions").style.display = "none";
    document.getElementById("adwin-length").style.display = "none";
    document.getElementById("adwin-select-sizeClothing").style.display = "none";
    document.getElementById("adwin-select-sizeFootwear").style.display = "none";
    document.getElementById("adwin-select-fit").style.display = "none";
  }
  else
  {
    document.querySelector(".adwin-dimensions").style.display = "flex";
    document.getElementById("adwin-length").style.display = "none";
    document.getElementById("adwin-select-sizeClothing").style.display = "inline-block";
    document.getElementById("adwin-select-sizeFootwear").style.display = "none";
    document.getElementById("adwin-select-fit").style.display = "inline-block";
  }
}

});