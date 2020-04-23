function getAllAnimal(){
    var url ="http://uts.if05a.xyz/index.php/animal"
    $.ajax({
        type : 'GET',
        url : url,
        beforeSend: function(xhr){
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        },
        error : function(xhr,status,error){
            console.log(xhr);
        }
    })
    .done(function(data){
        
        myData = JSON.parse(data);
        for (i=0;i< myData['animal'].length;i++){
            console.log(myData['animal'][i]);
            var item = $("#animal-item").clone();
            item.removeAttr("style")
            item.find('#animal-img').attr('src',myData['animal'][i].image);
            
            item.find('#animal-name').html(myData['animal'][i].animal_name);
            item.find('#animal-description').html(myData['animal'][i].description);
            item.find('#animal-ownedClass').html(myData['animal'][i].class_name);
            if (myData['animal'][i].student_name == null){
                item.find('#student').html("Posted by Anonymous");
            }else{
                item.find('#student').html("Posted by "+myData['animal'][i].student_name);
            }
            
            item.appendTo('#animal-items');

            //var item2 = $("#animal-item2").clone()
            //item2.find('#animal-imgx').attr('src',myData['animal'][i].image);
            //item2.appendTo('#animal-items2');
        }
    });
}
$(document).ready(function(){
    getAllAnimal();
})
				