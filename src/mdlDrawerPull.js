/*
Plugin for MDL Drawer Pull.

Enables the drawer to be opened by pulling (swiping) it from the left side. A behavior which is commonly seen in Android apps.

This works only alongside the Material Design Lite framework by Google.

This project is licensed under the terms of the GNU GPLv3 license.
A copy of the lisence will be found in the root directory of the project as "LICENSE.txt"
*/
window.onload = function() {
  sideMenu = document.createElement("div");
  sideMenu.setAttribute("id", "jbSideMenu");
  sideMenu.style.height = "100%";
  sideMenu.style.left = "0px";
  sideMenu.style.position = "fixed";
  sideMenu.style.top = "0px";
  sideMenu.style.width = "15px";
  sideMenu.style.zIndex = "10";
  document.body.appendChild(sideMenu);
  $("#jbSideMenu").swipe({
    swipeStatus: function(event, phase, direction, distance) {
      console.log(event);
      console.log(phase);
      console.log(direction);
      console.log(distance);
      if (direction == "right" && distance <= 250) {
        $(".mdl-layout__drawer").css({
          "-webkit-transform": "translateX(" + (distance - 250) + "px)",
          "transform": "translateX(" + (distance - 250) + "px)"
        });
        if ((phase == "cancel" || phase == "end") && distance > 100) {
          $(".mdl-layout__drawer-button").attr("aria-expanded", "true");
          $(".mdl-layout__obfuscator").addClass("is-visible");
          $(".mdl-layout__drawer").addClass("is-visible").attr("aria-hidden", "true");
          $(".mdl-layout__drawer").attr("style", "");
        }
        if ((phase == "cancel" || phase == "end") && distance < 100) {
          $(".mdl-layout__drawer").attr("style", "");
        }
      }
      if ((phase == "cancel" || phase == "end") && distance > 100) {
        $(".mdl-layout__drawer-button").attr("aria-expanded", "true");
        $(".mdl-layout__obfuscator").addClass("is-visible");
        $(".mdl-layout__drawer").addClass("is-visible").attr("aria-hidden", "true");
        $(".mdl-layout__drawer").attr("style", "");
      }
      if ((phase == "cancel" || phase == "end") && distance < 100) {
        $(".mdl-layout__drawer").attr("style", "");
      }
    },
    allowPageScroll: "horizontal"
  });
  $(".mdl-layout__drawer").swipe({
    swipeStatus: function(event, phase, direction, distance) {
      if (direction == "left") {
        $(".mdl-layout__drawer.is-visible").css({
          "-webkit-transform": "translateX(" + (-1.5 * distance) + "px)",
          "transform": "translateX(" + (-1.5 * distance) + "px)"
        });
        if ((phase == "cancel" || phase == "end") && distance > 100) {
          $(".mdl-layout__drawer").attr("aria-hidden", "true").removeClass("is-visible").attr("style", "");
          $(".mdl-layout__drawer-button").attr("aria-expanded", "false");
          $(".mdl-layout__obfuscator").removeClass("is-visible");
        }
        if ((phase == "cancel" || phase == "end") && distance < 100) {
          $(".mdl-layout__drawer").attr("style", "");
        }
      }
    },
    allowPageScroll: "horizontal"
  });
};
