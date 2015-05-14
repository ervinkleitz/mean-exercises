$( function () {
  // page is now loaded
  get_diary();
  $('#save').on('click', save_diary);
});

function get_diary() {
  // add code here
}

function save_diary() {
  var text = $('#diary').val();

  console.log(text);
  // add code here
}