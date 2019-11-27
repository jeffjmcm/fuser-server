/*eslint-env jquery */
alert("asdsdfhsdakjlghjdslfhgjhdfslgkjsdhfg");

function register() {
    const data =  {
          username: $('#username').val(),
          password: $('#password').val(),
      };
    alert("register with: \n" + JSON.stringify(data));
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
