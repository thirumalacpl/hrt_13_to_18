$(document).on('pageshow', '#cond_patient_details', function(){ 

//alert('ASD');

condition_emer =  JSON.parse(sessionStorage.getItem("emergency")); 

if(condition_emer == null){
    $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
 return false;
}

  $(document).off('click', '#oktoquestio').on('click', '#oktoquestio', function() {
 $.mobile.changePage($('#question_li'), { transition: "none", changeHash: true, reverse: false });
 return false;
  });
//alert(condition_emer+'condition');


	$(document).off('click', '#pate_enter_but').on('click', '#pate_enter_but', function() {
//alert('condition emergency but clcik');

 var pat_name = document.getElementById('pat_name').value;
 var age_nn = document.getElementById('age_n').value;
 var gender_d = $('input:radio[name=gender_de]:checked').val();
  var mob_no = document.getElementById('mob_no').value;



 
/*alert(lat_hosp+'lat_hosp');
alert(long_hosp+'long_hosp');*/

   //alert(pat_name+'pat_name');
/*
 alert(pat_name+'pat_name');
  alert(age_nn+'age_nn');
  alert(gender_d+'gender_d');
  alert(mob_no+'mob_no');*/
if(pat_name != ""){

  $.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
  options.async = true;
});

var formData = $("#callAjaxForm").serialize();

  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/pat_detai_inser.php?pat_name="+pat_name+"&age_nn="+age_nn+"&gender_d="+gender_d+"&mob_no="+mob_no+"&condition_emer="+condition_emer,
  data: formData,
  success: onSuccessfg,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorqwe

});
    function onSuccessfg(data){
//alert('onSuccessfg');



//sessionStorage.setItem("patient_detaias_array",JSON.stringify(result[0]));
sessionStorage.setItem("patient_detaias_array",JSON.stringify(data));
patient_detaias_array =  JSON.parse(sessionStorage.getItem("patient_detaias_array"));

for(a=0;a<patient_detaias_array.length;a++){
  var pat_id = patient_detaias_array[a];
  var pat_id_last = pat_id.patient_id;
}
//alert(pat_id_last+'pat_id_last');

alert(navigator.geolocation.getCurrentPosition+'navigator.geolocation.getCurrentPosition');

var watchId = navigator.geolocation.watchPosition(geolocationSuccess,
                                                  [geolocationError],
                                                  [geolocationOptions]);

alert(watchId+'watchId');

   navigator.geolocation.getCurrentPosition(onSuccess, onError);  

//alert(geolocation.getCurrentPosition+'alert(geolocation.getCurrentPosition)');

      function onSuccess(position) {

        lat_hosp = position.coords.latitude;
        long_hosp = position.coords.longitude;

alert(lat_hosp+'lat_hosp');
alert(long_hosp+'long_hosp');
alert(navigator.geolocation.getCurrentPosition+'navigator.geolocation.getCurrentPosition     adfjasidf   inside');

/*var lat_hosp ='89';
var long_hosp ='234';*/
if(lat_hosp != "" && long_hosp != ""){

  $.ajax({
  type: "POST",
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/pat_detai_lat_long.php?pat_id_last="+pat_id_last+"&lat_hosp="+lat_hosp+"&long_hosp="+long_hosp,
  data: formData,
  success: onSuccesspatid,
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  error: onErrorasdfa
});

}else{
  alert('on geo')
}

      }

    // onError Callback receives a PositionError object
    //
    function onError(error) {

      alert('eroor      gpss')
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

       function onSuccesspatid(data){
//alert('Submitted Successfully');
$("#myPopup1d").popup("open");
sessionStorage.setItem("twokm",JSON.stringify(data));
twokm =  JSON.parse(sessionStorage.getItem("twokm"));
document.getElementById('pat_name').value = '';
      document.getElementById('mob_no').value = '';
      document.getElementById('age_n').value='';
//alert(twokm+'twokm')
//alert('ssssssswsssssss            okkkkkkkkkkkk');
var pat_id_lasta = pat_id_last;

sessionStorage.setItem("pat_id_lasts",JSON.stringify(pat_id_lasta));
 // $.mobile.changePage($('#question_li'), { transition: "none", changeHash: true, reverse: false });

     return false;
     }
          function onErrorasdfa(data){
alert('errrrr drttttttttttttttttt');
     }

  }
     function onErrorqwe(data){
alert('errrrr');
     }

    
/*$.ajax({
 
  url: "http://staging.eimpressive.com/slim/slim-heart-mergedb/pat_detai_inser.php?pat_name="+pat_name+"&age_nn="+age_nn+"&gender_d="+gender_d+"&mob_no="+mob_no+"&condition_emer="+condition_emer+"&lat_hosp="+lat_hosp+"&long_hosp="+long_hosp,
  data:$('#pat_detai').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {
  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa ' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");

//alert('Data available for the search made');

       sessionStorage.setItem("patient_detaias_array",JSON.stringify(result[0]));
        sessionStorage.setItem("question_emergency_array",JSON.stringify(result[1]));
    
 
     document.getElementById('pat_name').value = '';
      document.getElementById('mob_no').value = '';
      document.getElementById('age_n').value='';

$.mobile.loading().hide();
//$.mobile.changePage($('#question_li'), { transition: "none", changeHash: true, reverse: false });
           //   $.mobile.changePage("five.html", { transition: "slide", changeHash: true, reverse: false }); 

}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {
// This callback function will trigger on unsuccessful action     
console.log(request);
console.log(error);  

alert('Network error has occurred please try again!');
}
});*/
}
else{
  alert("Fill the empty fields" );
  $.mobile.changePage($('#cond_patient_details'), { transition: "none", changeHash: true, reverse: false });
}
});


});