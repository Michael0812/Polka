function initAutocompleteCity() {
    const locationFields = document.querySelectorAll(".g_city-lookup");
    const localityHiddenField = document.querySelector(".g_city-lookup-hidden");
    const countryFields = document.querySelectorAll(".g_country-lookup");
    const countryHiddenField = document.querySelector(".g_country-lookup-hidden");
    const zapCityField = document.querySelectorAll(".zapCity");
    const zapCountryField = document.querySelectorAll(".zapCountry");
    const zapNationalityField = document.querySelectorAll(".zapNationality");

    if (locationFields.length){
        locationFields.forEach(function(locationField) {
            const autocompleteLocation = new google.maps.places.Autocomplete(locationField, { types: ["(cities)"] });
            autocompleteLocation.addListener("place_changed", function() {
                handleLocationChange(autocompleteLocation, locationFields, localityHiddenField, zapCityField, zapCountryField);
            });
            locationField.addEventListener("input", function() {
                handleLocationInputChange(locationFields, localityHiddenField, zapCityField, zapCountryField);
            });
        });
    }

    if (countryFields.length) {
        countryFields.forEach(function(countryField) {
            const autocompleteCountry = new google.maps.places.Autocomplete(countryField, { types: ["(regions)"] });
            autocompleteCountry.addListener("place_changed", function() {
                handleCountryChange(autocompleteCountry, countryFields, countryHiddenField, zapNationalityField);
            });
            countryField.addEventListener("input", function() {
                handleCountryInputChange(countryFields, countryHiddenField, zapNationalityField);
            });
        });
    }
}

function handleLocationChange(autocompleteLocation, locationFields, localityHiddenField, zapCityField, zapCountryField) {
    const place = autocompleteLocation.getPlace();
    if (!place.geometry) {
        locationFields.forEach(function(field) {
            if (field) {
                field.value = "";
            }
        });
        if (localityHiddenField) {
            localityHiddenField.value = "";
        }
        return;
    }

    let city = "";
    let county = "";
    let country = "";

    for (const component of place.address_components) {
        const componentType = component.types[0];

        if (componentType === "locality") {
            city = component.long_name;
        }

        if (componentType === "administrative_area_level_2") {
            county = component.long_name;
        }

        if (componentType === "country") {
            country = component.long_name;
        }
    }

    let address = city;

    if (county) {
        address += ", " + county;
    }

    if (country) {
        address += ", " + country;
    }

    zapCityField.forEach(function(field) {
        if (field) {
            field.value = city;
        }
    });
    zapCountryField.forEach(function(field) {
        if (field) {
            field.value = country;
        }
    });
    locationFields.forEach(function(field) {
        if (field) {
            field.value = address;
        }
    });
    if (localityHiddenField) {
        localityHiddenField.value = address;
    }
}

function handleCountryChange(autocompleteCountry, countryFields, countryHiddenField, zapNationalityField) {
    const place = autocompleteCountry.getPlace();
    if (!place || !place.geometry) {
        countryHiddenField.value = "";
        return;
    }

    let country1 = "";

    for (const component of place.address_components) {
        const componentType = component.types[0];

        if (componentType === "country") {
            country1 = component.long_name;
        }
    }

    countryFields.forEach(function(countryField) {
        countryField.value = country1;
    });
    countryHiddenField.value = country1;
    zapNationalityField.forEach(function(field) {
        field.value = country1;
    });
}

function handleLocationInputChange(locationFields, localityHiddenField, zapCityField, zapCountryField) {
    if (locationFields.length) {
        const locationValue = locationFields[0].value;
        if (localityHiddenField) {
            localityHiddenField.value = locationValue;
        }

        zapCityField.forEach(function(field) {
            if (field) {
                field.value = locationValue;
            }
        });
    }
}

function handleCountryInputChange(countryFields, countryHiddenField, zapNationalityField) {
    if (countryFields.length) {
        const countryValue = countryFields[0].value;
        if (countryHiddenField) {
            countryHiddenField.value = countryValue;
        }

        zapNationalityField.forEach(function(field) {
            if (field) {
                field.value = countryValue;
            }
        });
    }
}

window.initAutocomplete = initAutocompleteCity;