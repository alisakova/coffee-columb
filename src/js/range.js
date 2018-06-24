const $input = $('input[type=range]');
const $output = $('#output');


$(document).ready(function() {
  if ($input.length) {
    function updateOutput(value) {
      $output[0].textContent = value;
    }

    $input.on('input', function(e) {
      updateOutput(e.target.value);
    });

    $input.rangeslider({
      polyfill: false
    });

    updateOutput($input[0].value);
  }
});
