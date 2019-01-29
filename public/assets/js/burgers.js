import { EventEmitter } from "events";

$(function() {
    $(".devour-button").on("click", event => {
        const id = $(this).data("id");
        const setDevoured = {
            devoured: true
        };
        
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: setDevoured
        }).then(
            function() {
                console.log(`Burger ${id} eaten`);
                // Reload page
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", event => {
        event.preventDefault();

        let newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Maade a new burger");
                location.reload();
            }
        );
    });
});