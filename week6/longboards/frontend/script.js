$( function () {
  preview();
  global_listeners();
  get_longboards();
});

var LONGBOARDS;

function global_listeners() {
  $('#edit').on('click', edit);
  $('#preview').on('click', preview);
  $('#add').on('click', add);
}

function preview() {
  $('#edit').show();
  $('#preview').hide();
  $('#add').hide()
  if (LONGBOARDS) display_longboards();
};

function edit() {
  $('#edit').hide();
  $('#preview').show();
  $('#add').show();
  if (LONGBOARDS) edit_longboards();
}

function add() {
  var longboard = {
    brand: '',
    name: '',
    length: '0',
    style: '',
    price: 0,
    bottom_img_url: '',
    top_img_url: '' 
  };

  create_longboard(longboard, function (new_longboard) {
    LONGBOARDS.push(new_longboard);
    edit_longboards();
  });
}

function get_longboards() {
  $.ajax(BASE_URL + '/longboards', {
    method: 'GET'
  })
  .done( function (data) {
    LONGBOARDS = objectify_longboards(data);
    preview();
  })
  .fail( function (err) {
    console.log(err.responseText);
  });
}

function objectify_longboards(data) {
  if (data.length) {
    return [new Item(data[0])].concat(objectify_longboards(data.slice(1)));
  } else {
    return [];
  }
}

function display_longboards() {
  $('#items').html(stringify_longboard(LONGBOARDS, 'toHTML_normal'));
}

function edit_longboards() {
  $('#items').html(stringify_longboard(LONGBOARDS, 'toHTML_edit'));
  save_delete_listeners(LONGBOARDS);
}

function save_delete_listeners(data) {
  if (data.length) {
    $('#save-' + data[0]._id).unbind('click').on('click', function () {
      save_handler.call(null, data[0]._id);
    });
    $('#delete-' + data[0]._id).unbind('click').on('click', function () {
      delete_handler.call(null, data[0]._id);
    });
    save_delete_listeners(data.slice(1));
  }
}

function save_handler(id) {
  var longboard = {
    _id: id,
    brand: $('#edit-brand-' + id).val(),
    name: $('#edit-name-' + id).val(),
    length: parseInt($('#edit-length-' + id).val()),
    style: $('#edit-style-' + id).val(),
    price: parseFloat($('#edit-price-' + id).val()),
    bottom_img_url: $('#edit-bottom-image-' + id).val(),
    top_img_url: $('#edit-top-image-' + id).val()
  };

  update_longboard(longboard, function (new_item) {
    console.log(new_item);
    replace_longboard(new_item);
  });
}

function delete_handler(id) {
  delete_longboard(id);
  remove_longboard(id);
  edit_longboards();
}

function remove_longboard(id) {
  for (var i = 0; i < LONGBOARDS.length; i++) {
    if (LONGBOARDS[i]._id === id) {
      LONGBOARDS.splice(i, 1);
      break;
    }
  }
}

function replace_longboard(new_longboard) {
  if (!new_longboard) return;
  for (var i = 0; i < LONGBOARDS.length; i++) {
    if (LONGBOARDS[i]._id === new_longboard._id) {
      LONGBOARDS[i] = new_longboard;
      break;
    }
  }
}

function stringify_longboard(data, method) {
  if (data.length) {
    return (new Item(data[0]))[method]() + stringify_longboard(data.slice(1), method);
  } else {
    return '';
  }
}

function delete_longboard(id) {
  $.ajax(BASE_URL + '/longboard/' + id, {
    method: 'DELETE'
  })
  .done( function (data) {
    console.log(data);
  })
  .fail( function (err) {
    console.log(err.responseText);
  });
}

function update_longboard(longboard, callback) {
  $.ajax(BASE_URL + '/longboard/' + longboard._id, {
    method: 'PUT',
    data: longboard
  })
  .done( function (data) {
    return callback(new Item(data));
  })
  .fail( function (err) {
    return callback();
    console.log(err.responseText);
  });
}

function create_longboard(longboard, callback) {
  $.ajax(BASE_URL + '/longboard', {
    method: 'POST',
    data: longboard
  })
  .done( function (data) {
    return callback(new Item(data));
  })
  .fail( function (err) {
    return callback([]);
    console.log(err.responseText);
  });
}
