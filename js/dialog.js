
$(function () {

    //create all the dialogue
    $(".dialog").dialog({
        autoOpen: false,
        show: 'blind',
        hide: 'fold',
        closeOnEscape: true
    });

    //opens the appropriate dialog
    $(".opener").click(function () {
        //takes the ID of appropriate dialogue
        var id = $(this).data('id');
        //open dialogue
        if ($(id).dialog('isOpen') == true)
            $(id).dialog('close');
        else
            $(id).dialog('open');
        return false;
    });

});