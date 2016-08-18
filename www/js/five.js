$(document).on('pageshow', '#question_li', function(){ 

//alert('condition');
		//userobject = JSON.parse(sessionStorage.getItem("categories_details_array"));	
		activities_details_ag = JSON.parse(sessionStorage.getItem("activities_details_arrayaa"));	
		pat_id_lasts = JSON.parse(sessionStorage.getItem("pat_id_lasts"));

		  $(document).off('click', '#tosear_nearby_mapp').on('click', '#tosear_nearby_mapp', function() {

$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });

     return false;
});

$('#chestpain').empty();
$('#painstrt').empty();
$('#painstrt3').empty();
$('#painstrt4').empty();
$('#painstrt5').empty();
$('#painstrt6').empty();
$('#painstrt7').empty();
$('#painstrt8').empty();
$('#painstrt9').empty();
$('#painstrt10').empty();
$('#painstrt11').empty();
$('#painstrt12').empty();
$('#painstrt13').empty();

var c=0;
for(a=0;a<activities_details_ag.length;a++){
 activities_de = activities_details_ag[a];
var activities_de_categoryid = activities_de.category_id;
//alert(activities_de_categoryid+'op');
	//alert(activities_de_categoryid);
/*if (activities_de_categoryid == '1'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="chestpaini" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	
	c++;
	$('#chestpain').append(frone);
} */
/*if (activities_de_categoryid == '2'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt').append(frone);
} */
/*if (activities_de_categoryid == '3'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt3" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt3').append(frone);
}*/ 
/*if (activities_de_categoryid == '4'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt4" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt4').append(frone);
} */
/*if (activities_de_categoryid == '5'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt5" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt5').append(frone);
} */
/*if (activities_de_categoryid == '6'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt6" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt6').append(frone);
} */
/*if (activities_de_categoryid == '7'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt7" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt7').append(frone);
} */
/*if (activities_de_categoryid == '8'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt8" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt8').append(frone);
} */
/*if (activities_de_categoryid == '9'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt9" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt9').append(frone);
} */
/*if (activities_de_categoryid == '10'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="radio" name="painstrtt10" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" checked="checked"> <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt10').append(frone);
} */
/*if (activities_de_categoryid == '11'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="checkbox" name="painstrtt11" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" > <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt11').append(frone);
} */
/*if (activities_de_categoryid == '12'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="checkbox" name="painstrtt12" id="radio3b" class="chatSendBut_qua" value="'+activities_de.observation_id+'" > <label for="radio-choice-3b">'+activities_de.observation_name+'</label>'
	c++;
	$('#painstrt12').append(frone);
} */
/*if (activities_de_categoryid == '13'){
	//alert('activities_de_categoryid');
	//var frone='<p>'+activities_de.observation_name+'</p>'

	var frone='<input type="text" name="anyop" id="anyop" value="" data-clear-btn="true" placeholder="'+activities_de.observation_name+'">'
	c++;
	$('#painstrt13').append(frone);
} */

}

/*$(".chatSendBut_qua").click(function(){
var element = $(this);
var img_id = element.attr("id");
alert(img_id+'img_id');
});*/
$(document).off('click', '#chatSendBut_qu').on('click', '#chatSendBut_qu', function() { 
//alert('chat chatSendBut_qu    asdf');

var chstpain = $('input:radio[name=chestpainit]:checked').val();
//alert(chstpain+'chstpain');



var painstrttt = $('input:radio[name=painstrttw]:checked').val();
//alert(painstrttt+'painstrttt');

var painstrtt3 = $('input:radio[name=painstrtt3]:checked').val();
//alert(painstrtt3+'painstrtt3');

var painstrtt4 = $('input:radio[name=painstrtt4]:checked').val();
//alert(painstrtt4+'painstrtt4');

var painstrtt5 = $('input:radio[name=painstrtt5]:checked').val();
//alert(painstrtt5+'painstrtt5');

var painstrtt6 = $('input:radio[name=painstrtt6]:checked').val();
//alert(painstrtt6+'painstrtt6');
var painstrtt7 = $('input:radio[name=painstrtt7]:checked').val();
//alert(painstrtt7+'painstrtt7');
var painstrtt8 = $('input:radio[name=painstrtt8]:checked').val();
//alert(painstrtt8+'painstrtt8');

var painstrtt9 = $('input:radio[name=painstrtt9]:checked').val();
//alert(painstrtt9+'painstrtt9');
var painstrtt10 = $('input:radio[name=painstrtt10]:checked').val();
//alert(painstrtt10+'painstrtt10');







   var favorite = [];
   $.each($("input[name='painstrtt11']:checked"), function(){            
                favorite.push($(this).val());
            });
   //alert("My favourite sports 11 11 11 are: " + favorite.join(", "));

var far= favorite[0];
var far1= favorite[1];
var far2= favorite[2];
var far3= favorite[3];
var far4= favorite[4];
//alert(far4+'far4');

   var favoritea = [];
   $.each($("input[name='painstrtt12']:checked"), function(){            
                favoritea.push($(this).val());
            });
//alert("My favourite sports 12 12 are: " + favoritea.join(", "));

var fara= favoritea[0];
var far1a= favoritea[1];
var far2a= favoritea[2];
var far3a= favoritea[3];
var far4a= favoritea[4];
var far5a= favoritea[5];

var painstrtt13 = document.getElementById('anyop').value;


//alert(painstrtt13+'painstrtt13');


$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});


var formData = $("#callAjaxFormradio").serialize();

$.ajax({
  type: "POST",
url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/inser_radio.php?chstpain="+chstpain+"&painstrttt="+painstrttt+"&painstrtt3="+painstrtt3+"&painstrtt4="+painstrtt4+"&painstrtt5="+painstrtt5+"&painstrtt6="+painstrtt6+"&painstrtt7="+painstrtt7+"&painstrtt8="+painstrtt8+"&painstrtt9="+painstrtt9+"&painstrtt10="+painstrtt10+"&pat_id_lasts="+pat_id_lasts+"&far="+far+"&far1="+far1+"&far2="+far2+"&far3="+far3+"&far4="+far4+"&fara="+fara+"&far1a="+far1a+"&far2a="+far2a+"&far3a="+far3a+"&far4a="+far4a+"&far5a="+far5a+"&painstrtt13="+painstrtt13,
  data: formData,
  success: onSuccessyu,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErroruop
});

function onSuccessyu(data){
//	alert('Successfully Submitted');
	$("#myPopup1da").popup("open");
	//alert('oikjas');
	//$("#positionWindow").popup('open');
	document.getElementById('anyop').value = '';
	//$.mobile.changePage($('#sear_nearby_mapp'), { transition: "none", changeHash: true, reverse: false });
}
function onErroruop(data){
	alert('er');
}


});

});