function register() {
    const data =  {
          username: $('#username').val(),
          password: $('#password').val(),
          fullname: $('#fullname').val(),
          email: $('#email').val(),
      };
    const stringified_data = JSON.stringify(data).replace(/,/g, ",\n");
    alert("register with: \n" + stringified_data);
    console.log(stringified_data);
    $.ajax({
      type: "POST",
      url: "/user/register",
      data: data,
      success: (data,sm,sms) => {
          alert("data" + data);
          },
      dataType: "JSON"
    });
}

$('#register').click(register);
