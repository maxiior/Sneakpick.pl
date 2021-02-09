/* FILTRY */
var categories = ['Sneakersy','Hoodie','Teesy','Polo','Koszule','Crewnecki','Longsleevy','Katany','Kurtki','Płaszcze','Spodnie',
'Szale','Portfele','Plecaki','Zegarki','Czapki','Paski','Bielizna'];
var brands = ['Nike','Adidas','Supreme','Puma','New Balance','Diadora','Vans','Louis Vuitton','Palace','Reebok','Balenciaga',
'Lacoste','Yeezy','Off-White','Converse','Stone Island','The North Face','Ralph Lauren','Guess','Tommy Hilfiger','VLONE'];
var clothingSizes = ['XXS','XS','S','M','L','XL','XXL'];
var fits = ['SLIM FIT','REGULAR','OVERSIZE'];
var conditions = ['DS','VNDS','4/5','3/5','2/5','1/5'];
var colors = ['#A23A3A','#F2324D','#F4A523','#F8E71B','#7CD321','#4CA3FD','#8F12FF','#EC94FF','black','#AAA','white','#F9F9F9'];
var footwearSizes = ['36.0','36.5','37.0','37.5','38.0','38.5','39.0','39.5','40.0','40.5','41.0','41.5','42.0','42.5','43.0',
'43.5','44.0','44.5','45.0','45.5','46.0','46.5','47.0','47.5','48.0','48.5','49.0','49.5','50.0'];

var filters = [categories,brands,footwearSizes,clothingSizes,conditions,colors,fits];

function categoriesList()
{
  var htmlString = '<div class="wtb-visibleCheckbox"><label class="wtb-checkbox-container"><div class="wtb-singleoption">';
  htmlString += filters[0][0];
  htmlString += '</div><input type="checkbox" data-value="1"><span class="wtb-checkmark"></span></label></div>';
  for(var i=1; i<=5; i++)
  {
    htmlString += '<div class="wtb-visibleCheckbox"><label class="wtb-checkbox-container"><div class="wtb-singleoption">';
    htmlString += filters[0][i];
    htmlString += '</div><input type="checkbox" data-value="2"><span class="wtb-checkmark"></span></label></div>';
  }
  for(var i=6; i<=10; i++)
  {
    htmlString += '<div class="wtb-hiddenCategoriesList"><label class="wtb-checkbox-container"><div class="wtb-singleoption">';
    htmlString += filters[0][i];
    htmlString += '</div><input type="checkbox" data-value="2"><span class="wtb-checkmark"></span></label></div>';
  }
  for(var i=11; i<=17; i++)
  {
    htmlString += '<div class="wtb-hiddenCategoriesList"><label class="wtb-checkbox-container"><div class="wtb-singleoption">';
    htmlString += filters[0][i];
    htmlString += '</div><input type="checkbox" data-value="3"><span class="wtb-checkmark"></span></label></div>';
  }
  htmlString += '<div class="wtb-hiddenCategoriesList"><label class="wtb-checkbox-container"><div class="wtb-singleoption" style="font-weight: 600; color: #00B4FF;">Inne';
  htmlString += '</div><input type="checkbox"><span class="wtb-checkmark"></span></label></div>';

  $('#wtb-categorieslist').append(htmlString);
}
function brandsList()
{
  var htmlString =""; 
  for(var i=0; i<=5; i++)
  {
    htmlString += '<div class="wtb-visibleCheckbox"><label class="wtb-checkbox-container"><div class="wtb-singleoption">';
    htmlString += filters[1][i];
    htmlString += '</div><input type="checkbox"><span class="wtb-checkmark"></span></label></div>';
  }
  for(var i=6; i<=20; i++)
  {
    htmlString += '<div class="wtb-hiddenBrandsList"><label class="wtb-checkbox-container"><div class="wtb-singleoption">';
    htmlString += filters[1][i];
    htmlString += '</div><input type="checkbox"><span class="wtb-checkmark"></span></label></div>';
  }
  htmlString += '<div class="wtb-hiddenBrandsList"><label class="wtb-checkbox-container"><div class="wtb-singleoption" style="font-weight: 600; color: #00B4FF;">Inne';
  htmlString += '</div><input type="checkbox"><span class="wtb-checkmark"></span></label></div>';
  $('#wtb-brandslist').append(htmlString);
}
function footwearSizesList()
{
  htmlString = "";
  for(var i=0; i<filters[2].length; i++)
  {
    htmlString += '<div class="wtb-singlesize"><label><input type="checkbox"><span>';
    htmlString += filters[2][i];
    htmlString += '</span></label></div>';
  }
  $('#wtb-footwearSizesList').append(htmlString);
}
function clothingSizesList()
{
  var htmlString = "";
  for(var i=0; i<filters[3].length; i++) 
  {
    htmlString += '<div class="wtb-singlesize"><label><input type="checkbox"><span>';
    htmlString += filters[3][i];
    htmlString += '</span></label></div>';
  }
  $('#wtb-clothingSizesList').append(htmlString);
}
function fitsList() 
{
  var htmlString = ""; 
  for(var i=0; i<filters[6].length; i++) 
  {
    htmlString += '<div class="wtb-singlefit"><label><input type="checkbox"><span>';
    htmlString += filters[6][i];
    htmlString += '</span></label></div>';
  }
  $('#wtb-fitsList').append(htmlString);
}
function conditionsList()
{
  var htmlString=""; 
  for(var i=0; i<filters[4].length; i++) 
  {
    htmlString += '<div class="wtb-singlecondition"><label><input type="checkbox"><span>';
    htmlString += filters[4][i];
    htmlString += '</span></label></div>';
  }
  $('#wtb-conditionslist').append(htmlString);
}
function colorsList()
{
  var htmlString="";
  for(var i=0; i<=9; i++)
  {
    htmlString += '<div class="wtb-singlecw"><label><input type="checkbox"><div class="color" style="background-color:';
    htmlString += filters[5][i];
    htmlString += ';"><div class="wtb-checkmark" style="border-color: white;"></div></div></label></div>';
  }
  htmlString += '<div class="wtb-singlecw"><label><input type="checkbox"><div class="color" style="background-color:';
  htmlString += filters[5][10];
  htmlString += '; border: 1px solid #DDDDDD; border-color: #DDDDDD;"><div class="wtb-checkmark" style="border-color: #DDDDDD;"></div></div></label></div>';
  
  htmlString += '<div class="wtb-singlecw"><label><input type="checkbox"><div class="color" style="';
  htmlString += 'background-image: url(styles/ps/other.png); "><div class="wtb-checkmark" style="border-color: white;"></div></div></label></div>';
  $('#wtb-cwlist').append(htmlString);
}

$(document).ready(function()
{
  function createDropdown()
  {
    categoriesList();
    brandsList();
    footwearSizesList();
    clothingSizesList();
    fitsList();
    conditionsList();
    colorsList();
  }
  createDropdown();
});

/*INPUT RANGE - WYŚWIETLACZ WYBRANEGO ZAKRESU CEN*/

function rangeSlider(value)
{
  document.getElementById('rangeValue').innerHTML = value;
}

document.getElementById("wtb-range").oninput = function() 
{
  this.style.background = 'linear-gradient(to right, #151515 0%, #151515 '+ this.value/10 +'%, #DDD ' + this.value/10 + '%, #DDD 100%)'
};

/*PRZYCISK ROZWIJAJĄCY MARKI*/

function showMoreBrands()
{
  if($('.wtb-hiddenBrandsList').css('display') == 'none')
  {
    $('.wtb-hiddenBrandsList').css('display','block');
    $('#hiddenBrandsList').text('Pokaż mniej');
  }
  else
  {
    $('.wtb-hiddenBrandsList').css('display','none');
    $('#hiddenBrandsList').text('Pokaż więcej');
  }
}

/*PRZYCISK ROZWIJAJĄCY KATEGORIE*/

function showMoreCategories()
{
  if($('.wtb-hiddenCategoriesList').css('display') == 'none')
  {
    $('.wtb-hiddenCategoriesList').css('display','block');
    $('#hiddenCategoriesList').text('Pokaż mniej');
  }
  else
  {
    $('.wtb-hiddenCategoriesList').css('display','none');
    $('#hiddenCategoriesList').text('Pokaż więcej');
  }
}

/*WYŚWIETLANIE OKIEN W ZALEŻNOŚCI OD KATEGORII*/
 
function showElements()
{
  var state = getAllCheckBoxState();
 
  if(shouldDisplayClothingSizes(state)=='grid' || shouldDisplayFootwearSizes(state)=='grid')
  {
    document.getElementById('wtb-sizesList').style.display = 'block';
    document.getElementById('wtb-length').style.display = 'block';
  }
  else
  {
    document.getElementById('wtb-sizesList').style.display = 'none';
    document.getElementById('wtb-length').style.display = 'none';
  }

  document.getElementById('wtb-clothingSizesList').style.display = shouldDisplayClothingSizes(state);
  document.getElementById('wtb-footwearSizesList').style.display = shouldDisplayFootwearSizes(state);
  document.getElementById('wtb-fits').style.display = shouldDisplayFits(state);
  document.getElementById('wtb-width').style.display = shouldDisplayFits(state);
}

function getAllCheckBoxState()
{
  var states = [];
  var id = document.getElementById('wtb-categorieslist').querySelectorAll('input');
  
  for(var i=0; i<id.length; i++)
  {
    if(id[i].checked == true) states.push(true);
    else states.push(false);
  }

  return states;
}

function shouldDisplayFits(e)
{
  for(var i=1; i<=10; i++)
  {
    if(e[i]==true) return 'block';
  }
  return 'none';
}

function shouldDisplayClothingSizes(e)
{
  for(var i=1; i<=10; i++)
  {
    if(e[i]==true) return 'grid';
  }
  return 'none';
}

function shouldDisplayFootwearSizes(e)
{
  if(e[0]==true) return 'grid';
  return 'none';
}

/*OTWIERANIE I ZAMYKANIE MENU SORTOWANIA*/

$('#adwin-select-category').find('div.dropOption').first().css('background-color', '#00B4FF');
$('#adwin-select-category').find('div.dropOption').first().css('color', '#FFF');

var containerCategory = $('#adwin-select-category .dropContainer');

  $('#adwin-select-category').on('click', function(event)
  {
    var target = $(event.target);

    if(target.hasClass('valueHolder') || target.hasClass('icon-down-dir') || target.attr('id') === '#adwin-select-category')
    {
      if(containerCategory.is(":visible"))
      {
        containerCategory.hide();
        $('.icon-down-dir').css('transform', 'rotate(0)');
      }
      else
      {
        containerCategory.show();
        $('.icon-down-dir').css('transform', 'rotate(180deg)');
      }
    }
    else if(target.hasClass('dropOption'))
    {
      $('#adwin-select-category').find('div.valueHolder').text(target.text());
      $('#adwin-select-category').find('div.valueHolder').data('value', target.data('value'));
      
      $('#adwin-select-category').find('div.dropOption').css('background-color', '');
      $('#adwin-select-category').find('div.dropOption').css('color', '');

      target.css('background-color', '#00B4FF');
      target.css('color', '#FFF');
      $('.icon-down-dir').css('transform', 'rotate(0)');
      containerCategory.hide();
    }
  });

  $(document).mouseup(function(e) 
  {
    if (!$('#adwin-select-category').is(e.target) && $('#adwin-select-category').has(e.target).length === 0 && containerCategory.is(":visible")) 
    {
      containerCategory.hide();
      $('.icon-down-dir').css('transform', 'rotate(0)');
    }
  });

/*PRZYCISK CZYSZCZĄCY FILTRY*/

  $('.wtb-resetButton').on('click', function(){
    $("input[type='checkbox']:checked").prop("checked", false);
    $("#wtb-range").prop("value", 1000);

    $( "#slider-range-length" ).slider({values: [ 0, 100 ]});
    $( "#rangeLengthMin" ).html( $( "#slider-range-length" ).slider( "values", 0 ) );
    $( "#rangeLengthMax" ).html( $( "#slider-range-length" ).slider( "values", 1 ) );

    $( "#slider-range-width" ).slider({values: [ 0, 100 ]});
    $( "#rangeWidthMin" ).html( $( "#slider-range-width" ).slider( "values", 0 ) );
    $( "#rangeWidthMax" ).html( $( "#slider-range-width" ).slider( "values", 1 ) );

    document.getElementById('wtb-range').style.background = 'linear-gradient(to right, #191919 0%, #191919 100%, #DDD 100%, #DDD 100%)'
    rangeSlider(1000);
    showElements();
  });

  /*MULTIRANGE INPUT*/

  $(function() {
    $("#slider-range-length").slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $("#rangeLengthMin").html( ui.values[ 0 ] );
        $("#rangeLengthMax").html( ui.values[ 1 ] );
      }
    });
    $("#rangeLengthMin").html($("#slider-range-length").slider("values", 0));
    $("#rangeLengthMax").html($("#slider-range-length").slider("values", 1));
  });

  $(function() {
    $("#slider-range-width").slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $("#rangeWidthMin").html( ui.values[ 0 ] );
        $("#rangeWidthMax").html( ui.values[ 1 ] );
      }
    });
    $("#rangeWidthMin").html($("#slider-range-width").slider("values", 0));
    $("#rangeWidthMax").html($("#slider-range-width").slider("values", 1));
  });

/*ZAZNACZANIE TYLKO JEDNEGO CHACKBOXA*/
$("#wtb-categorieslist").change(function(e) 
{
  if(!$(e.target).prop("checked"))
  {
    $("#wtb-categorieslist").find('input[type="checkbox"]').prop("checked", false);
  }
  else
  {
    $("#wtb-categorieslist").find('input[type="checkbox"]').prop("checked", false);
    $(e.target).prop("checked", true);
  }
  showElements();
});