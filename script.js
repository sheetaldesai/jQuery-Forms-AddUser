$(document).ready(function(){
    $("#addUser").submit(function(event){
        event.preventDefault();

        var fname = $("#addUser input[name=firstname]").val();
        var lname = $("#addUser input[name=lastname]").val();
        var email = $("#addUser input[name=email]").val();
        var contact = $("#addUser input[name=contact]").val();

        if (fname === "First Name" || lname=== "Last Name" || email === "Email Address" || contact === "Phone #"){
            alert("Please enter valid values!")
            return;
        }

        $("#tbl").append(
            `<tr>
                <td>${fname}</td>
                <td>${lname}</td>
                <td>${email}</td>
                <td>${contact}</td>
            </tr>`
        );
        
    });
});