/**
 * Class Quote
 */
class Quote
{
    /**
     * Quote constructor.
     * @param jQuote
     */
    constructor(jQuote)
    {
        this.id = jQuote.id;
        this.title = jQuote.title;
        this.category = jQuote.category;
        this.quote = jQuote.quote;
        this.author = jQuote.author;
        this.date = jQuote.date;
        this.length = jQuote.length;
        this.background = jQuote.background;
        this.permalink = jQuote.permalink;
        this.tags = jQuote.tags;
    }

    /**
     * @return mixed
     */
    getId()
    {
        return this.id;
    }

    /**
     * @param id
     */
    setId(id)
    {
        this.id = id;
    }

    /**
     * @return mixed
     */
    getTitle()
    {
        return this.title;
    }

    /**
     * @param title
     */
    setTitle(title)
    {
        this.title = title;
    }

    /**
     * @return mixed
     */
    getCategory()
    {
        return this.category;
    }

    /**
     * @param category
     */
    setCategory(category)
    {
        this.category = category;
    }

    /**
     * @return mixed
     */
    getQuote()
    {
        return this.quote;
    }

    /**
     * @param quote
     */
    setQuote(quote)
    {
        this.quote = quote;
    }

    /**
     * @return mixed
     */
    getAuthor()
    {
        return this.author;
    }

    /**
     * @param author
     */
    setAuthor(author)
    {
        this.author = author;
    }

    /**
     * @return mixed
     */
    getDate()
    {
        return this.date;
    }

    /**
     * @param date
     */
    setDate(date)
    {
        this.date = date;
    }

    /**
     * @return mixed
     */
    getLength()
    {
        return this.length;
    }

    /**
     * @param length
     */
    setLength(length)
    {
        this.length = length;
    }

    /**
     * @return mixed
     */
    getBackground()
    {
        return this.background;
    }

    /**
     * @param background
     */
    setBackground(background)
    {
        this.background = background;
    }

    /**
     * @return mixed
     */
    getPermalink()
    {
        return this.permalink;
    }

    /**
     * @param permalink
     */
    setPermalink(permalink)
    {
        this.permalink = permalink;
    }

    /**
     * @return mixed
     */
    getTags()
    {
        return this.tags;
    }

    /**
     * @param tags
     */
    setTags(tags)
    {
        this.tags = tags;
    }
}

// class Quote {
//     constructor() {
//         // API
//         this._urlAPI = 'https://api.cours-webservice.arrobe.fr/v2';
//         this._apikey = 'aee12534d3248864487c78e5b655a3b5f8aff32f96269b753e95ad04c405015c';
//         // Range for searching in Km
//         this._range = 10;
//     }
//
//     getsHospital(location, nbPoints, callback) {
//         .ajax({
//             type: 'GET',
//             url: this._urlAPI+"/places/"+location.lat+"/"+location.lng+"/"+this._range,
//             headers: {
//                 'apikey': this._apikey
//             },
//             dataType: 'json',
//             success: function(data) {
//                 // Sort the array of markers by distance
//                 var markers = data.results.sort(function(a, b) {
//                     return ((a.distance < b.distance) ? -1 : ((a.distance > b.distance) ? 1 : 0));
//                 });
//                 var aHospital = [];
//
//                 // Get nbPoints markers
//                 for (var i = 0; i < nbPoints; i++) {
//                     if (markers[i])
//                         aHospital.push(markers[i]);
//                 }
//
//                 callback(aHospital);
//             }
//         });
//     }
//
//     getsCategory(callback) {
//         .ajax({
//             type: 'GET',
//             url: this._urlAPI+"/category",
//             headers: {
//                 'apikey': this._apikey
//             },
//             success: function(data) {
//                 var aCategory = [{id: 0, name: "Hospital"}];
//                 .each(data.category, function(index, cat) {
//                     if (cat.id > 148) {
//                         aCategory.push({id: cat.id, name: cat.name});
//                     }
//                 });
//
//                 callback(aCategory);
//             }
//         });
//     }
//
//     getPlaces(catID, nbPoints, callback) {
//         .ajax({
//             type: 'GET',
//             url: this._urlAPI+"/places/category/"+catID,
//             headers: {
//                 'apikey': this._apikey
//             },
//             dataType: 'json',
//             success: function(data) {
//                 // Sort the array of markers by distance
//                 var markers = data.place.sort(function(a, b) {
//                     return ((a.distance < b.distance) ? -1 : ((a.distance > b.distance) ? 1 : 0));
//                 });
//                 var aMarkers = [];
//
//                 // Get nbPoints markers
//                 for (var i = 0; i < nbPoints; i++) {
//                     if (markers[i])
//                         aMarkers.push(markers[i]);
//                 }
//
//                 callback(aMarkers);
//             }
//         });
//     }
//
//     postPlace(inputName, inputCategory, inputAddress, inputCity, inputZip, callback) {
//         var data = JSON.stringify({
//             "category_id": inputCategory,
//             "name": inputName,
//             "address": inputAddress,
//             "postal_code": inputZip,
//             "city": inputCity
//         });
//
//         .ajax({
//             type: 'POST',
//             url: this._urlAPI+"/places",
//             headers: {
//                 'apikey': this._apikey
//             },
//             dataType: 'json',
//             data: data,
//             success: function(data) {
//                 callback(data);
//             }
//         });
//     }
// }