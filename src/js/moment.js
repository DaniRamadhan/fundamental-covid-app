import $ from "jquery";
import moment from "moment";

var displayTime = function displayTime() {
    moment.locale("id");
    $(".time").text(moment().format("LTS"));
    $(".date").text(moment().format("LL"));
  };
  
  var updateTime = function updateTime() {
    displayTime();
    setTimeout(updateTime, 1000);
  };
  
  updateTime();
