$().ready(function () {
 
    $("#commonForm").validate({
        // in 'rules' user have to specify all the constraints for respective fields
        rules: {
            uname: {
                required: true,
                minlength: 2 //for length of lastname
            },
            password: {
                required: true,
                minlength: 6
            },
            email: {
                required: true,
                email: true
            },
            agree: "required"
        },
        // in 'messages' user have to specify message as per rules
        messages: {
            username: {
                required: " Please enter a username",
            },
            password: {
                required: " passsword have must be 6 digit",
            },
            agree: "Please accept our policy"
        }
    });
   });