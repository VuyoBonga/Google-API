function initMap() {

    const location = { lat: -25.7479, lng: 28.2293 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });

}
