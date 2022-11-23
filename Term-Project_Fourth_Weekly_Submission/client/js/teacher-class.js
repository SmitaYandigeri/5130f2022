var emptyRow = "<tr class='trNewRow'>"; 
emptyRow = emptyRow + "    <td class='tdSlNo'>";
emptyRow = emptyRow + "    </td>";
emptyRow = emptyRow + "    <td class='tdClassName'>";
emptyRow = emptyRow + "        <input type='text' class='form-control className' style='height:40px; width:120px; font-family: monsterrat;' placeholder='Enter Class Name'/>";
emptyRow = emptyRow + "    </td>";
emptyRow = emptyRow + "    <td class='tdClassCode'>";
emptyRow = emptyRow + "        <input type='text' class='form-control classCode' style='height:40px; width:120px; font-family: monsterrat;' placeholder='Enter Class Code' />";
emptyRow = emptyRow + "    </td>";
emptyRow = emptyRow + "    <td class='tdInvitation'>";
emptyRow = emptyRow + "    </td>";
emptyRow = emptyRow + "    <td class='tdAction'>";
emptyRow = emptyRow + "        <a title='Save' class='btn border-shadow save'><span class='text-gradient'><i class='fas fa fa-floppy-o'></i></span></a>";
emptyRow = emptyRow + "        <a title='Cancel' class='btn border-shadow cancel'><span class='text-gradient'><i class='fas fa-times'></i></span></a>";
emptyRow = emptyRow + "    </td>";
emptyRow = emptyRow + "</tr>";

var actionForEdit = "<a title='Save' class='btn border-shadow update'><span class='text-gradient'><i class='fas fa fa-floppy-o'></i></span></a>"
actionForEdit = actionForEdit + "<a title='Cancel' class='btn border-shadow edit-cancel'><span class='text-gradient'><i class='fas fa-times'></i></span></a>"

$(document).ready(function () {
    $("#btnAdd").click(function () { 
        $("#tblData tbody").append(emptyRow); // appending dynamic string to table tbody
    });

    $('#tblData').on('click', '.cancel', function () { 
        $(this).parent().parent().remove();
    });

    $('#tblData').on('click', '.save', async function () { 
        $(this).parent().parent().remove();
        const className =  $(this).parent().parent().find(".className").val();
        const classCode =  $(this).parent().parent().find(".classCode").val();
        console.log("Class Name :: "+className);
        console.log("Class Code :: "+classCode);
    
        const result = fetch('/api/addclass', {
            headers: {
                'Content-type': 'application/json'
            }, 
            method: "POST",
            body: JSON.stringify({className, classCode})
        })
        .then(res => res.json());
        
        location.reload();
        
    }); 

    $('#tblData').on('click', '.edit', async function () { 
        console.log("Editing the page");
        const className =$(this).parent().parent().find(".tdClassName").html();
        $(this).parent().parent().find(".tdClassName")
        .html("<input type='text' value='"+className+"' class='form-control className' style='height:40px; width:120px; font-family: monsterrat;' placeholder='Enter Name'/>"); 

        const classCode =$(this).parent().parent().find(".tdClassCode").html();
        $(this).parent().parent().find(".tdClassCode")
        .html("<input type='text' value='"+classCode+"' class='form-control classCode' style='height:40px; width:120px; font-family: monsterrat;' placeholder='Enter City'/>"); 

        $(this).parent().parent().find(".tdAction").html(actionForEdit);
    
    }); 

    $('#tblData').on('click', '.update', async function () { 
        $(this).parent().parent().remove();
        const className =  $(this).parent().parent().find(".className").val();
        const classCode =  $(this).parent().parent().find(".classCode").val();
        const invitationCode =$(this).parent().parent().find(".tdInvitation").html();

        const result = fetch('/api/updateclass', {
            headers: {
                'Content-type': 'application/json'
            }, 
            method: "POST",
            body: JSON.stringify({className, classCode, invitationCode})
        })
        .then(res => res.json());
        
        location.reload();
    }); 

    $('#tblData').on('click', '.edit-cancel', function () { 
        location.reload();
    });

    $('#tblData').on('click', '.delete', async function () { 
        console.log("Deleting the page")
        const invitationCode =$(this).parent().parent().find(".tdInvitation").html();

        fetch('/api/deleteclass', {
            headers: {
                'Content-type': 'application/json'
            }, 
            method: "POST",
            body: JSON.stringify({invitationCode})
        })
        .then(res => res.json());
        
        location.reload();
    }); 
});