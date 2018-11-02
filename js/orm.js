class ORM {
  constructor() {
    // API
    this._urlAPI = 'https://api.cours-webservice.arrobe.fr/v2';
    this._apikey = 'aee12534d3248864487c78e5b655a3b5f8aff32f96269b753e95ad04c405015c';
    // Range for searching in Km
    this._range = 10;
  }

  getsHospital(location, nbPoints, callback) {
    $.ajax({
      type: 'GET',
      url: this._urlAPI+"/places/"+location.lat+"/"+location.lng+"/"+this._range,
      headers: {
        'apikey': this._apikey
      },
      dataType: 'json',
      success: function(data) {
        // Sort the array of markers by distance
        var markers = data.results.sort(function(a, b) {
          return ((a.distance < b.distance) ? -1 : ((a.distance > b.distance) ? 1 : 0));
        });
        var aHospital = [];

        // Get nbPoints markers
        for (var i = 0; i < nbPoints; i++) {
          if (markers[i])
            aHospital.push(markers[i]);
        }

        callback(aHospital);
      }
    });
  }

  getsCategory(callback) {
    $.ajax({
      type: 'GET',
      url: this._urlAPI+"/category",
      headers: {
        'apikey': this._apikey
      },
      success: function(data) {
        var aCategory = [{id: 0, name: "Hospital"}];
        $.each(data.category, function(index, cat) {
          if (cat.id > 148) {
            aCategory.push({id: cat.id, name: cat.name});
          }
        });

        callback(aCategory);
      }
    });
  }

  getPlaces(catID, nbPoints, callback) {
    $.ajax({
      type: 'GET',
      url: this._urlAPI+"/places/category/"+catID,
      headers: {
        'apikey': this._apikey
      },
      dataType: 'json',
      success: function(data) {
        // Sort the array of markers by distance
        var markers = data.place.sort(function(a, b) {
          return ((a.distance < b.distance) ? -1 : ((a.distance > b.distance) ? 1 : 0));
        });
        var aMarkers = [];

        // Get nbPoints markers
        for (var i = 0; i < nbPoints; i++) {
          if (markers[i])
            aMarkers.push(markers[i]);
        }

        callback(aMarkers);
      }
    });
  }

  postPlace(inputName, inputCategory, inputAddress, inputCity, inputZip, callback) {
    var data = JSON.stringify({
      "category_id": inputCategory,
      "name": inputName,
      "address": inputAddress,
      "postal_code": inputZip,
      "city": inputCity
    });

    $.ajax({
      type: 'POST',
      url: this._urlAPI+"/places",
      headers: {
        'apikey': this._apikey
      },
      dataType: 'json',
      data: data,
      success: function(data) {
        callback(data);
      }
    });
  }
}