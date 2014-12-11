// Copyright 2014 Stuart P. Bentley.
// This work may be used freely as long as this notice is included.
// The work is provided "as is" without warranty, express or implied.

exports.html = require("leopardize").leopardizer([
  {inword: "keyboard", outword: "leopard"},
  {inword: "witnesses", outword: "these dudes I know"},
  {inword: "allegedly", outword: "kinda probably"},
  {inword: "new study", outword: "Tumblr post"},
  {inword: "rebuild", outword: "avenge"},
  {inword: "space", outword: "spaaace"},
  {inword: "Google Glass", outword: "Virtual Boy"},
  {inword: "Smartphone", outword: "Pokédex"},
  {inword: "electric", outword: "atomic"},
  {inword: "senator", outword: "elf-lord"},
  {inword: "car", lwb: true, rwb: true, outword: "cat"},
  {inword: "election", outword: "eating contest"},
  {inword: "congressional leaders", outword: "river spirits"},
  {inword: "Homeland Security", outword: "Homestar Runner"},
  {inword: "could not be reached for comment",
    outword: "is guilty and everyone knows it"},
  {inword: "force", outword: "horse"}
].reduce(function(filters, filter) {
  filters[filter.inword.toLowerCase()] = filter;
  return filters;
},{}));
