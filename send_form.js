$('#boarding .btn_go_boarding').click(function(e){
    e.preventDefault();
    var data = [];
    var selector = $("#only_form input");
    selector.each(function(index, element){        


       if($(element).attr("type") == "radio"){
        if($(element).is(':checked')){
          var name = $(element).attr("name");
          var val = $(element).val();
          if(val != ""){
        var obj = {
          "name":name,
          "value":val
        }
        data.push(obj)
      }else{
        return false;
      }
        }else{
          var val = ""
        }
       }else if($(element).attr("type") != "radio"){
          if($(element).attr("type") == "checkbox"){
              var name = $(element).attr("name");
              var val = true;
               if(val != ""){
                  var obj = {
                    "name":name,
                    "value":val
                  }
                  data.push(obj)
               }else{
              return false;
            }
           }else{
              var name = $(element).attr("name");
              var val = $(element).val();
               if(val != ""){
                  var obj = {
                    "name":name,
                    "value":val
                  }
                  data.push(obj)
               }else{
              return false;
            }
          }
        }
       
    });

    var json_value = {
      "fields": data,
      "skipValidation": false,
      'hs_context' :JSON.stringify({
        "hutk": cookie_hub,
        "pageUrl": window.location.href, 
        "pageName": "Quizz" 
      })
    };
      console.log(data)
      $.ajax({
        url: "https://api.hsforms.com/submissions/v3/integration/submit/5022137/3d4d2420-9202-46ee-857c-c3d878a15d1c",
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(json_value),
        success: function (resp) {            
          console.log(resp)         
           fbq('track', 'CompleteRegistration');
        },error:function(XMLHttpRequest, textStatus, errorThrown){
          console.log(JSON.parse(XMLHttpRequest.responseText))
          alert("Please complete the fields correctly");
        }
    });
  });