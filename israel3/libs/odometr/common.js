$(function () {
         $({
             n: 100000
         }).animate({
             n: 1E6
         }, {
             duration: 200E3,
             step: function (a) {
                 $("#test").html(a | 0)
             }
         })
     });
