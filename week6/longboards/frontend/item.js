var Item = function (longboard) {
  shallow_copy(longboard, this);
};

Item.prototype.toHTML_normal = function () {
  var output = '<div class="item">';
  output += '<div class="item-image"><img class="bottom" src="' + this.bottom_img_url + '"><img class="top" src="' + this.top_img_url + '"></div>';
  output += '<div class="name">' + this.brand + ' ' + this.name + ' ' + this.length + '"</div>'; 
  output += '<div class="price">$' + this.price.toFixed(2) + '</div>';
  output += '</div>';
  return output;
};

Item.prototype.toHTML_edit = function () {
  var output = '<div class="item-edit">';
  output += '<table>';
  output += '<tr><td>Brand:</td><td class="text-right"><input value="' + this.brand + '" type="text" id="edit-brand-' + this._id + '"></td></tr>';
  output += '<tr><td>Name:</td><td class="text-right"><input value="' + this.name + '" type="text" id="edit-name-' + this._id + '"></td></tr>';
  output += '<tr><td>Length:</td><td class="text-right"><input value="' + this.length + '" type="number" id="edit-length-' + this._id + '">"</td></tr>';
  output += '<tr><td>Style:</td><td class="text-right"><input value="' + this.style + '" type="text" id="edit-style-' + this._id + '"></td></tr>';
  output += '<tr><td>Price:</td><td class="text-right">$<input value="' + this.price.toFixed(2) + '" type="number" id="edit-price-' + this._id + '"></td></tr>';
  output += '<tr><td>Bottom Image:</td><td class="text-right"><input value="' + this.bottom_img_url + '" type="text" placeholder="(url)" id="edit-bottom-image-' + this._id + '"></td></tr>';
  output += '<tr><td>Top Image:</td><td class="text-right"><input value="' + this.top_img_url + '" type="text" placeholder="(url)" id="edit-top-image-' + this._id + '"></td></tr>';
  output += '<tr><td><a class="delete" href="#" id="delete-' + this._id + '">delete</a></td><td class="text-right"><button class="save" id="save-' + this._id + '">save</button></td></tr>';
  output += '</table></div>';
  return output;
}

function shallow_copy (obj1, obj2) {
  for (var key in obj1) {
    obj2[key] = obj1[key];
  }
}
