function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$(document).on("submit", "#request_form", function(event) {
  $.ajax({
    type: "POST",
    url: "/request",
    data: {
      phone: $("#request_form input").val(),
      utm_source: getParameterByName("utm_source"),
      utm_term: getParameterByName("utm_term")
    },
    dataType: "JSON",
    success: function(data) {
      if (data && data.code == 200) {
        $("#request_form").slideUp();
        $("#response_data")
          .slideDown()
          .text(data.message);
      } else if (data && data.code != 200) {
        $("#response_data")
          .slideDown()
          .text(data.message);
      }
    }
  });

  event.preventDefault();
  return false;
});

$("body").ready(function() {
  $("#request_form input").bind("change keyup input click", function() {
    if (this.value.match(/[^0-9+]/g)) {
      this.value = this.value.replace(/[^0-9+]/g, "");
    }
  });
});
