
$(function () {
    // Fonction pour rendre les images drag & drop
    function makeDraggable() {
        $(".piece").draggable({
            revert: "invalid",
            helper: "clone",
            start: function (event, ui) {
                $(this).css("opacity", 0.5);
            },
            stop: function (event, ui) {
                $(this).css("opacity", 1);
            }
        });
    }

    // Rendre les slots droppables
    $(".slot").droppable({
        accept: ".piece",
        drop: function (event, ui) {
            const $slot = $(this);
            const $img = ui.draggable;
            // Si le slot contient déjà une image, on la remet dans #source
            if ($slot.find("img").length) {
                $("#source").append($slot.find("img").remove());
            }
            // Si l'image vient d'un slot, on vide ce slot
            const $parent = $img.parent();
            if ($parent.hasClass("slot")) {
                $parent.empty();
            }
            // On ajoute l'image dans le slot
            $img.css({ top: 0, left: 0, position: "" });
            $slot.append($img);
            checkWin();
        }
    });

    // Rendre la zone source droppable pour remettre les images
    $("#source").droppable({
        accept: ".piece",
        drop: function (event, ui) {
            const $img = ui.draggable;
            const $parent = $img.parent();
            if ($parent.hasClass("slot")) {
                $parent.empty();
            }
            $img.css({ top: 0, left: 0, position: "" });
            $(this).append($img);
            checkWin();
        }
    });

    // Mélanger les images
    $("#shuffle").click(function () {
        // Récupère toutes les pièces, qu'elles soient dans les slots ou dans la source
        const allPieces = [];
        $(".slot").each(function () {
            const img = $(this).find(".piece");
            if (img.length) {
                allPieces.push(img.detach()[0]);
            }
        });
        $("#source .piece").each(function () {
            allPieces.push($(this).detach()[0]);
        });
        // Mélange le tableau
        allPieces.sort(() => Math.random() - 0.5);
        // Vide la source et les slots
        $("#source").empty().append(allPieces);
        $(".slot").empty();
        $("#result").text("");
        makeDraggable();
    });

    // Vérifier si les 6 pièces sont dans l’ordre
    function checkWin() {
        let ok = true;
        let count = 0;
        $(".slot").each(function () {
            let slotPos = $(this).data("slot");
            let img = $(this).find("img");
            if (img.length === 0) {
                ok = false;
            } else {
                count++;
                if (img.data("pos") != slotPos) {
                    ok = false;
                }
            }
        });
        if (count === 6) {
            if (ok) {
                $("#result").text("Vous avez gagné !").css("color", "green");
            } else {
                $("#result").text("Vous avez perdu !").css("color", "red");
            }
        } else {
            $("#result").text("");
        }
    }

    // Initialisation
    makeDraggable();
});



// $(function () {
//     $("#puzzle").sortable();
//     $("#puzzle").disableSelection();
// });

