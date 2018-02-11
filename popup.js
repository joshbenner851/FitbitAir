/**
 * Project: FitbitAir
 * File name: popup
 * Created by:  joshbenner on 2/10/18.
 *
 * Outside references:
 *
 * Purpose:
 */
'use strict';
// var $ = require("jquery");

chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        var food = request.source;
        var data = {
            "name": food.name,
                "defaultFoodMeasurementUnitId": 304,
                "defaultServingSize": 1,
                "calories": food.calories,
                "totalFat": food.fat,
                "totalCarbohydrate": food.carbs,
                "protein": food.protein,
                "sodium": food.sodium,
        };
        console.log("data: ", data);
        $.ajax({
            url: "https://api.fitbit.com/1/user/4WB3RR/foods.json",
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0V0IzUlIiLCJhdWQiOiIyMjgyR1oiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd3BybyB3bnV0IHdzbGUgd3dlaSB3YWN0IHdzZXQiLCJleHAiOjE1NDk4Mzg5NjEsImlhdCI6MTUxODMwMjk2MX0.5dq6OD3yd-6CC9pec7sLPiYJtEvH69jmhvIvG71PJFI",
            },
            data: data
        }).done(function(data){
            message.innerText = "Successfully added this meal to your Fitbit custom foods";
            console.log("Data: ", data);
        }).fail(function(err){
            console.log("Failed to create food");
        });
    }
});

function onWindowLoad() {

    var message = document.querySelector('#message');

    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
    }, function() {
        // If you try and inject into an extensions page or the webstore/NTP you'll get an error
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });

}

window.onload = onWindowLoad;